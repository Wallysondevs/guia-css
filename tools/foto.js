#!/usr/bin/env node
/* foto.js — tira a FOTO (PNG) do quadro "Resultado" do Guia CSS num Chromium de verdade
   (o mesmo assets/htmlsim.js do leitor) e imprime os valores CALCULADOS pedidos.
   Para o autor conferir, olhando, o que escreve sobre o resultado (CONTRIBUINDO.md §4 e §5).

   node tools/foto.js pagina.html [opções]             uma caixa .tryhtml ou um Resultado da página
   node tools/foto.js --html a.html [--css b.css] …     um rascunho solto (o HTML precisa do
                                                        <link rel="stylesheet" href="style.css">
                                                        para usar a aba CSS; um <style> também serve)
   opções:
     --caixa N           a N-ésima caixa .tryhtml da página (1 = a primeira; padrão)
     --resultado N       o N-ésimo pre.file[data-resultado] da página
     --solucao           a caixa com a solução (padrão: o código inicial)
     --largura PX        largura do quadro (padrão: o data-largura da caixa, senão a largura que o
                         quadro tem no guia numa janela de 1100 px, como no testador: 728 px)
     --altura PX         altura da foto (padrão: a altura do conteúdo, até 4000)
     --estado hover:SEL  força :hover no primeiro SEL (e nos pais), como o mouse em cima
     --estado foco:SEL   força :focus e :focus-visible no SEL (e :focus-within nos pais)
     --estilo "SEL{prop1,prop2}"   imprime os valores calculados (getComputedStyle) do
                         primeiro SEL; pode repetir; vale "p::before{content}"
     --escuro / --claro  tema do quadro (prefers-color-scheme), como o botão ◐ do editor
     --menos-movimento   emula prefers-reduced-motion: reduce
     --sem-fim           NÃO leva as animações/transições ao fim (foto no instante em que carregou)
     --listar            só lista as caixas e os Resultados da página, com os números
     --nome NOME         nome do arquivo (padrão: montado a partir das opções)
   A foto vai para ~/rascunho/css/fotos/NOME.png (o caminho é impresso no fim).
   No notebook, use ~/guia-css-lab/foto (roda aqui e já baixa a foto). */
"use strict";
const fs = require("fs");
const path = require("path");
const HS = require("../assets/htmlsim.js");
const T = require("./testar-missoes.js");

const PASTA = path.join(process.env.HOME, "rascunho/css/fotos");

function uso(msg) {
  if (msg) console.error("foto.js: " + msg);
  const src = fs.readFileSync(__filename, "utf8");
  console.error(src.slice(src.indexOf("/*") + 2, src.indexOf("*/")).replace(/^ {3}/gm, ""));
  process.exit(2);
}
function args() {
  const a = process.argv.slice(2), o = { estilos: [], estados: [] };
  for (let i = 0; i < a.length; i++) {
    const x = a[i], v = () => { if (i + 1 >= a.length) uso("falta o valor de " + x); return a[++i]; };
    if (x === "--caixa") o.caixa = +v();
    else if (x === "--resultado") o.resultado = +v();
    else if (x === "--solucao") o.solucao = true;
    else if (x === "--largura") o.largura = +v();
    else if (x === "--altura") o.altura = +v();
    else if (x === "--estado") o.estados.push(v());
    else if (x === "--estilo") o.estilos.push(v());
    else if (x === "--escuro") o.tema = "escuro";
    else if (x === "--claro") o.tema = "claro";
    else if (x === "--menos-movimento") o.menosMov = true;
    else if (x === "--sem-fim") o.semFim = true;
    else if (x === "--listar") o.listar = true;
    else if (x === "--nome") o.nome = v().replace(/[^\w.-]+/g, "-").replace(/\.png$/i, "");
    else if (x === "--html") o.html = v();
    else if (x === "--css") o.css = v();
    else if (x === "-h" || x === "--help") uso();
    else if (x.startsWith("-")) uso("opção desconhecida: " + x);
    else if (!o.pagina) o.pagina = x;
    else uso("só uma página por vez");
  }
  if (!o.pagina && !o.html) uso("diga a página (pagina.html) ou --html arquivo.html");
  if (o.caixa !== undefined && !(o.caixa >= 1)) uso("--caixa N: N começa em 1");
  if (o.resultado !== undefined && !(o.resultado >= 1)) uso("--resultado N: N começa em 1");
  if (o.largura !== undefined && !(o.largura >= 200 && o.largura <= 2000)) uso("--largura: entre 200 e 2000 px");
  o.estados = o.estados.map((e) => { const m = /^(hover|foco):(.+)$/.exec(e); if (!m) uso("--estado hover:SELETOR ou foco:SELETOR"); return { tipo: m[1], sel: m[2] }; });
  o.estilos = o.estilos.map((e) => { const m = /^([^{]+)\{([^}]+)\}\s*$/.exec(e); if (!m) uso("--estilo \"SELETOR{prop1,prop2}\""); return { sel: m[1].trim(), props: m[2].split(",").map((p) => p.trim()).filter(Boolean) }; });
  return o;
}

// a página de mentira do --html/--css: uma caixa .tryhtml com as abas do rascunho
function paginaRascunho(o) {
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const ler = (f) => { if (!fs.existsSync(f)) uso("arquivo não encontrado: " + f); return fs.readFileSync(f, "utf8"); };
  const abas = [["index.html", ler(o.html)]];
  if (o.css) abas.push([/\.css$/i.test(o.css) ? "style.css" : path.basename(o.css), ler(o.css)]);
  // o rascunho pode apontar para outro nome de CSS: a aba ganha o nome do <link> que existir
  const link = /<link\b[^>]*href\s*=\s*["']?([^"'\s>]+\.css)/i.exec(abas[0][1]);
  if (o.css && link && !/^(https?:)?\/\//.test(link[1])) abas[1][0] = link[1];
  return "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><title>foto</title><link rel=\"stylesheet\" href=\"assets/style.css\"></head><body><main class=\"main\"><div class=\"content\">" +
    "<div class=\"tryhtml\"" + (o.largura ? " data-largura=\"" + o.largura + "\"" : "") + ">" +
    abas.map(([n, c]) => "<pre class=\"script\" data-file=\"" + n + "\">" + esc(c) + "</pre>").join("") +
    "</div></div></main><script src=\"assets/htmlsim.js\"></script></body></html>";
}

async function main() {
  const o = args();
  let rel, virtuais = null, listaCaixas = [], listaRes = [];
  if (o.html) {
    rel = "__foto__.html";
    virtuais = { "/__foto__.html": { tipo: "text/html; charset=utf-8", dados: paginaRascunho(o) } };
    o.caixa = 1; o.resultado = undefined;
  } else {
    const arq = path.isAbsolute(o.pagina) ? o.pagina : fs.existsSync(o.pagina) ? path.resolve(o.pagina) : path.join(T.RAIZ, o.pagina);
    if (!fs.existsSync(arq)) uso("página não encontrada: " + o.pagina);
    rel = path.relative(T.RAIZ, arq);
    if (rel.startsWith("..")) uso("a página precisa estar em ~/guia-css (use ~/guia-css-lab/enviar)");
    const html = fs.readFileSync(arq, "utf8");
    listaCaixas = T.caixas(html);
    listaRes = T.todosPres(html).filter((p) => T.temClasse(p.a, "file") && p.a["data-resultado"] !== undefined);
    if (o.listar) {
      listaCaixas.forEach((c, k) => console.log("--caixa " + (k + 1) + "  linha " + c.linha + (c.a["data-goal"] ? "  missão [" + c.a["data-goal"] + "]" : "  (livre)") + (c.a["data-largura"] ? "  data-largura=" + c.a["data-largura"] : "")));
      listaRes.forEach((p, k) => console.log("--resultado " + (k + 1) + "  linha " + p.linha + "  " + (p.a["data-file"] || "")));
      process.exit(0);
    }
    if (o.caixa === undefined && o.resultado === undefined) {
      if (listaCaixas.length) o.caixa = 1; else if (listaRes.length) o.resultado = 1; else uso("a página não tem caixa .tryhtml nem Resultado");
    }
    if (o.caixa > listaCaixas.length) uso("a página tem " + listaCaixas.length + " caixa(s) .tryhtml");
    if (o.resultado > listaRes.length) uso("a página tem " + listaRes.length + " Resultado(s)");
  }
  const ehRes = o.resultado !== undefined, idx = (ehRes ? o.resultado : o.caixa) - 1;
  const info = ehRes ? listaRes[idx] : listaCaixas[idx];
  if (info) console.log((ehRes ? "Resultado " + o.resultado + " (" + (info.a["data-file"] || "") + ")" : "caixa " + o.caixa + (info.a["data-goal"] ? " [missão " + info.a["data-goal"] + "]" : " (livre)")) + ", linha " + info.linha + " de " + rel);

  const srv = await T.servidor(virtuais);
  const base = "http://127.0.0.1:" + srv.address().port + "/";
  const nav = await T.puppeteer().launch({ executablePath: T.CHROMIUM, headless: true, args: ["--no-sandbox", "--disable-gpu", "--mute-audio", "--hide-scrollbars", "--font-render-hinting=none", "--disable-features=CompositeBGColorAnimation,CompositeClipPathAnimation"] });
  let codigoSaida = 0;
  try {
    const pg = await nav.newPage();
    await pg.setViewport({ width: 1100, height: 900 });
    if (o.menosMov) await pg.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await pg.goto(base + rel.split(path.sep).map(encodeURIComponent).join("/") + "?htmlsim-teste", { waitUntil: "load", timeout: 30000 });
    await pg.waitForFunction(() => window.HtmlSim && window.HtmlSim.montado, { timeout: 15000 });
    const md = await pg.evaluate(() => window.HtmlSim.modo());
    if (md !== "sw") console.log("! o editor caiu no modo simples (sem service worker)");

    // desenha (inicial ou solução)
    const r = await T.comTempo(pg.evaluate((ehRes, i, sol) => ehRes ? window.HtmlSim.resultados[i].desenhar() : window.HtmlSim.caixas[i].testar(sol ? "solucao" : "inicial"), ehRes, idx, !!o.solucao), 20000, "o quadro não terminou de carregar");
    // largura e tema
    const larg = await pg.evaluate((ehRes, i, l, tema) => {
      const HS = window.HtmlSim, c = ehRes ? null : HS.caixas[i], q = ehRes ? HS.resultados[i].quadro : c.quadro;
      // padrão: o data-largura, senão a largura que o quadro tem na página do guia (janela de 1100 px, como no testador)
      const final = l || q.largura || q.frame.contentWindow.innerWidth || 728;
      if (c) c.largura(final); else q.definirLargura(final);
      if (tema) { if (c) c.tema(tema === "escuro"); else q.definirTema(tema === "escuro"); }
      return final;
    }, ehRes, idx, o.largura || 0, o.tema || "");
    // o <iframe> vai para o canto da janela ANTES de forçar estados e esperar animações (fora
    // da tela, o Chromium não pinta o quadro, e a foto sairia com os pixels velhos);
    // position: fixed não recarrega o quadro
    await pg.evaluate((ehRes, i) => {
      const q = ehRes ? window.HtmlSim.resultados[i].quadro : window.HtmlSim.caixas[i].quadro;
      Object.assign(q.frame.style, { position: "fixed", left: "0", top: "0", zIndex: "2147483647", margin: "0", transform: "none", boxShadow: "none" });
    }, ehRes, idx);
    await pg.setViewport({ width: larg, height: 900 });
    await new Promise((ok) => setTimeout(ok, 150));
    // estados forçados (CDP), como o testador faz nas metas hover:/foco:
    for (const e of o.estados) {
      const desfazer = await T.forcarEstado(pg, idx, ehRes ? "resultado" : "caixa", e.tipo, e.sel);
      if (!desfazer.achou) console.log("! --estado " + e.tipo + ":" + e.sel + ": nenhum elemento casa (nada foi forçado)");
    }
    // animações/transições finitas: estado final (como o testador)
    // (espera de verdade, até 6 s: o finish() muda o estilo calculado, mas uma transição de
    // background-color composta pela GPU continuaria com os pixels velhos na foto)
    const nAnim = o.semFim ? 0 : await pg.evaluate(async (ehRes, i) => {
      const q = ehRes ? window.HtmlSim.resultados[i].quadro : window.HtmlSim.caixas[i].quadro, d = q.frame.contentDocument;
      const finitas = d.getAnimations().filter((a) => { try { return isFinite(a.effect.getComputedTiming().endTime); } catch (e) { return false; } });
      await Promise.race([Promise.all(finitas.map((a) => a.finished.catch(() => {}))), new Promise((ok) => setTimeout(ok, 6000))]);
      window.HtmlSim.finalizarAnimacoes(d);
      await new Promise((ok) => q.frame.contentWindow.requestAnimationFrame(() => q.frame.contentWindow.requestAnimationFrame(ok)));
      return finitas.length;
    }, ehRes, idx);
    await pg.evaluate(() => document.fonts && document.fonts.ready);

    // valores calculados
    const est = await pg.evaluate((ehRes, i, estilos) => {
      const q = ehRes ? window.HtmlSim.resultados[i].quadro : window.HtmlSim.caixas[i].quadro;
      const d = q.frame.contentDocument, w = q.frame.contentWindow;
      return { largura: w.innerWidth, escuro: w.matchMedia("(prefers-color-scheme: dark)").matches, linhas: estilos.map((e) => {
        const ps = /::?(before|after|marker|placeholder|first-line|first-letter|backdrop|file-selector-button|selection)\s*$/i.exec(e.sel);
        const sel = ps ? e.sel.slice(0, ps.index) || "*" : e.sel;
        let lista; try { lista = d.querySelectorAll(sel); } catch (x) { return e.sel + "  → seletor inválido"; }
        if (!lista.length) return e.sel + "  → nenhum elemento casa";
        const cs = w.getComputedStyle(lista[0], ps ? "::" + ps[1].toLowerCase() : null);
        return e.sel + (lista.length > 1 ? "  (o primeiro de " + lista.length + ")" : "") + " {\n" + e.props.map((p) => "  " + p + ": " + (cs.getPropertyValue(p).trim() || "(vazio)") + ";").join("\n") + "\n}";
      }) };
    }, ehRes, idx, o.estilos);

    // a foto: a janela fica do tamanho do quadro
    const alt = await pg.evaluate((ehRes, i, altura) => {
      const q = ehRes ? window.HtmlSim.resultados[i].quadro : window.HtmlSim.caixas[i].quadro;
      const f = q.frame, d = f.contentDocument;
      const h = altura || Math.min(4000, Math.max(f.offsetHeight, d.documentElement.scrollHeight, d.body ? d.body.scrollHeight : 0));
      f.style.height = h + "px";
      return h;
    }, ehRes, idx, o.altura || 0);
    await pg.setViewport({ width: larg, height: Math.max(40, alt) });
    await new Promise((ok) => setTimeout(ok, 200));
    fs.mkdirSync(PASTA, { recursive: true });
    const nome = o.nome || [path.basename(rel, ".html").replace(/^__foto__$/, "rascunho"), ehRes ? "res" + o.resultado : "caixa" + o.caixa, o.solucao ? "solucao" : "", larg + "px"]
      .concat(o.estados.map((e) => e.tipo + "-" + e.sel.replace(/[^\w-]+/g, "")), o.tema === "escuro" ? ["escuro"] : [], o.menosMov ? ["menosmov"] : []).filter(Boolean).join("-");
    const destino = path.join(PASTA, nome + ".png");
    await pg.screenshot({ path: destino, clip: { x: 0, y: 0, width: larg, height: Math.max(40, alt) } });

    console.log("quadro: " + est.largura + " × " + alt + " px" + (est.escuro ? ", tema escuro (prefers-color-scheme: dark)" : "") + (o.menosMov ? ", prefers-reduced-motion: reduce" : "") + (o.estados.length ? ", estado forçado: " + o.estados.map((e) => e.tipo + " em " + e.sel).join(", ") : "") + (nAnim ? ", " + nAnim + " animação(ões)/transição(ões) levada(s) ao fim" : ""));
    if (r.metas && r.metas.length) {
      await T.metasComEstado(pg, idx, r).catch(() => {});
      console.log("metas (" + (o.solucao ? "solução" : "código inicial") + "):\n" + r.metas.map((m) => "  " + (m.ok ? "✓ " : "✗ ") + m.meta + (m.ok || !m.motivo ? "" : "  (" + m.motivo + ")")).join("\n"));
    }
    if (r.console) console.log("console:\n" + r.console.split("\n").map((l) => "  │ " + l).join("\n"));
    if (est.linhas.length) console.log("valores calculados (getComputedStyle):\n" + est.linhas.join("\n"));
    console.log("foto: " + destino.replace(process.env.HOME, "~"));
  } catch (e) {
    console.error("foto.js: " + e.message); codigoSaida = 1;
  } finally {
    await nav.close();
    srv.close();
  }
  process.exit(codigoSaida);
}
main();
