#!/usr/bin/env node
/* testar-navegador.js — abre páginas do Guia CSS num Chromium headless (na VPS) como o LEITOR:
   a página inteira, com o menu (site.js), rolando até o fim para o editor desenhar cada caixa
   e cada Resultado (como acontece quando eles chegam perto da tela).

     timeout 600 node tools/testar-navegador.js pagina.html [outra.html…]
     timeout 3600 node tools/testar-navegador.js --todas      (todas as .html da raiz)
     --celular     janela de 375 × 800 (além de conferir a rolagem lateral no celular, que é feita sempre)
     --fotos DIR   salva um print de página inteira de cada uma em DIR
     -q            mostra só as páginas com problema (e o resumo)

   Problema (FALHA): erro de JavaScript ou console.error DA PÁGINA DO GUIA (os erros do código do
   leitor, dentro dos quadros, são parte da aula: o testar-missoes.js cuida deles), HTTP ≥ 400 fora
   da pasta virtual do editor, caixa ou Resultado que não montou ou não desenhou, link interno para
   uma página que não existe, rolagem lateral na página com 375 px de largura, menu não montado.
   Código de saída: 0 = tudo ok; 1 = alguma página com problema; 2 = uso errado. */
"use strict";
const fs = require("fs");
const path = require("path");
const T = require("./testar-missoes.js");

const args = process.argv.slice(2);
let fotos = null, quieto = false, celular = false;
const paginas = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--todas") fs.readdirSync(T.RAIZ).filter((f) => /\.html$/.test(f)).sort().forEach((f) => paginas.push(f));
  else if (a === "--fotos") fotos = path.resolve(args[++i] || "fotos");
  else if (a === "--celular") celular = true;
  else if (a === "-q") quieto = true;
  else if (a.startsWith("-")) { console.error("opção desconhecida: " + a); process.exit(2); }
  else paginas.push(path.relative(T.RAIZ, fs.existsSync(a) ? path.resolve(a) : path.join(T.RAIZ, a)));
}
if (!paginas.length) { console.error("uso: timeout 600 node tools/testar-navegador.js [--celular] [--fotos DIR] [-q] pagina.html…|--todas"); process.exit(2); }
if (fotos) fs.mkdirSync(fotos, { recursive: true });

(async () => {
  const srv = await T.servidor();
  const origem = "http://127.0.0.1:" + srv.address().port;
  const nav = await T.puppeteer().launch({ executablePath: T.CHROMIUM, headless: true, args: ["--no-sandbox", "--disable-gpu", "--mute-audio", "--lang=pt-BR", "--disable-dev-shm-usage"] });
  let ruins = 0;
  for (const nome of paginas) {
    const probs = [], oks = [];
    if (!fs.existsSync(path.join(T.RAIZ, nome))) { console.log("== " + nome + "  (arquivo não encontrado)"); ruins++; continue; }
    const pg = await nav.newPage();
    await pg.setViewport(celular ? { width: 375, height: 800, isMobile: true, hasTouch: true } : { width: 1200, height: 900 });
    // o que vem de dentro de um quadro (pasta virtual assets/sim/, srcdoc, blob) é código do leitor
    const doQuadro = (u) => /\/assets\/sim\/|^about:srcdoc|^blob:/.test(String(u || ""));
    pg.on("pageerror", (e) => { const st = String((e && e.stack) || ""); if (!doQuadro((st.match(/(https?:\/\/\S+|about:srcdoc|blob:\S+)/) || [])[1])) probs.push("erro de JS na página: " + String((e && e.message) || e).split("\n")[0]); });
    pg.on("console", (m) => { const u = m.location() && m.location().url; if (m.type() === "error" && !doQuadro(u) && !/Failed to load resource/.test(m.text())) probs.push("console.error da página: " + m.text().slice(0, 200)); });
    pg.on("response", (r) => { if (r.status() >= 400 && !/favicon/.test(r.url()) && !doQuadro(r.url())) probs.push("HTTP " + r.status() + ": " + r.url().replace(origem, "")); });
    pg.on("dialog", (d) => d.dismiss().catch(() => {}));
    try {
      await pg.goto(origem + "/" + nome.split(path.sep).map(encodeURIComponent).join("/"), { waitUntil: "load", timeout: 30000 });
      const temEditor = await pg.evaluate(() => !!document.querySelector(".tryhtml, pre.file[data-resultado]"));
      if (temEditor) await pg.waitForFunction(() => window.HtmlSim && window.HtmlSim.montado, { timeout: 15000 });
      // rola até o fim, aos poucos, para os IntersectionObserver desenharem tudo
      await pg.evaluate(async () => {
        const passo = Math.max(300, innerHeight * 0.8);
        for (let y = 0; y < document.documentElement.scrollHeight; y += passo) { scrollTo(0, y); await new Promise((ok) => setTimeout(ok, 60)); }
        scrollTo(0, document.documentElement.scrollHeight);
      });
      // espera os quadros carregarem (até 15 s)
      const est = await pg.evaluate(async () => {
        const HS = window.HtmlSim;
        if (!HS) return { caixas: 0, res: 0, dom: [0, 0], semFrame: [] };
        const t0 = Date.now();
        const faltam = () => HS.caixas.concat(HS.resultados).filter((c) => { const q = c.quadro; try { return !(q && q.frame && q.frame.contentDocument && q.frame.contentDocument.readyState === "complete"); } catch (e) { return true; } });
        while (faltam().length && Date.now() - t0 < 15000) await new Promise((ok) => setTimeout(ok, 150));
        const nomeDe = (c) => (c.box ? "caixa " + (HS.caixas.indexOf(c) + 1) : "Resultado " + (HS.resultados.indexOf(c) + 1));
        return {
          caixas: HS.caixas.length, res: HS.resultados.length,
          dom: [document.querySelectorAll(".tryhtml").length, document.querySelectorAll("pre.file[data-resultado]").length],
          semFrame: faltam().map(nomeDe)
        };
      });
      if (temEditor) {
        if (est.caixas !== est.dom[0] || est.res !== est.dom[1]) probs.push("o editor montou " + est.caixas + " de " + est.dom[0] + " caixas e " + est.res + " de " + est.dom[1] + " Resultados");
        if (est.semFrame.length) probs.push("não desenharam: " + est.semFrame.join(", "));
        else oks.push(est.caixas + " caixa(s) e " + est.res + " Resultado(s) desenhados");
      }
      // menu, links internos e rolagem lateral
      const pag = await pg.evaluate(() => {
        const lista = (sel) => Array.from(new Set(Array.from(document.querySelectorAll(sel)).filter((a) => !a.closest(".tryhtml, .hs, .pager"))
          .map((a) => a.getAttribute("href")).filter((h) => h && !/^(https?:|mailto:|tel:|#|javascript:|data:)/.test(h)).map((h) => h.split("#")[0].split("?")[0]).filter(Boolean)));
        let niveis = [];
        try { niveis = NIVEIS.flatMap((n) => n.grupos.flatMap((g) => g.itens.map((i) => i[0]))); } catch (e) { /* sem site.js */ }
        return { menu: !!document.querySelector("#sidebar a"), texto: lista(".content a[href]"), menuLinks: lista("#sidebar a[href]"), niveis };
      });
      const dir = path.dirname(path.join(T.RAIZ, nome));
      const falta = (h) => !fs.existsSync(path.join(dir, decodeURIComponent(h)));
      // páginas de fora do menu (tools/…) não têm o site.js
      if (!pag.menu && !/^tools[\/]/.test(nome)) probs.push("o menu (site.js) não montou");
      // link para uma página da NIVEIS que ainda não foi escrita: normal; fora da NIVEIS: FALHA (CONTRIBUINDO §1)
      const quebrados = pag.texto.filter(falta), foraNiveis = quebrados.filter((h) => !pag.niveis.includes(h)), aindaNao = quebrados.filter((h) => pag.niveis.includes(h));
      if (foraNiveis.length) probs.push("link no texto da aula para uma página que não existe nem está na NIVEIS: " + foraNiveis.join(", "));
      if (aindaNao.length) oks.push("links para aulas da NIVEIS ainda não escritas: " + aindaNao.join(", "));
      const menuFalta = pag.menuLinks.filter(falta);
      if (menuFalta.length) oks.push("menu: " + menuFalta.length + " página(s) da NIVEIS ainda não existem (normal enquanto o guia é escrito)");
      if (!celular) await pg.setViewport({ width: 375, height: 800, isMobile: true, hasTouch: true });
      await new Promise((ok) => setTimeout(ok, 300));
      const lateral = await pg.evaluate(() => {
        const de = document.documentElement, larg = de.clientWidth;
        if (de.scrollWidth <= larg + 1) return null;
        // o elemento mais largo que a tela (para o autor achar)
        let pior = null;
        document.querySelectorAll("main *").forEach((e) => { const r = e.getBoundingClientRect(); if (r.right > larg + 1 && (!pior || r.right > pior.r)) pior = { r: r.right, d: e.tagName.toLowerCase() + (e.className && typeof e.className === "string" ? "." + e.className.trim().split(/\s+/).join(".") : "") }; });
        return de.scrollWidth + " px" + (pior ? " (" + pior.d + ")" : "");
      });
      if (lateral) probs.push("rolagem lateral no celular (375 px): a página tem " + lateral);
      if (fotos) await pg.screenshot({ path: path.join(fotos, nome.replace(/[\/\\]/g, "-").replace(/\.html$/, ".png")), fullPage: true });
    } catch (e) { probs.push("erro do testador: " + String((e && e.message) || e).split("\n")[0]); }
    await pg.close();
    if (probs.length) ruins++;
    if (!quieto || probs.length) {
      console.log("== " + nome + (probs.length ? "  (" + probs.length + " problema(s))" : "  ok"));
      if (!quieto) oks.forEach((x) => console.log("  ok     " + x));
      probs.forEach((x) => console.log("  FALHA  " + x));
    }
  }
  await nav.close(); srv.close();
  console.log("\n" + paginas.length + " página(s), " + ruins + " com problema");
  process.exitCode = ruins ? 1 : 0;
})().catch((e) => { console.error("erro: " + (e.stack || e)); process.exitCode = 2; });
