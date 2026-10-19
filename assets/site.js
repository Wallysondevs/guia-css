/* =========================================================
   Guia CSS — navegação e componentes
   NIVEIS é a única fonte do menu lateral, do selo de nível e
   dos botões Anterior/Próximo. Para adicionar uma página,
   inclua-a aqui.
   ========================================================= */
var NIVEIS = [
  { id: "n1", nome: "Nível 1 · Iniciante", curto: "Iniciante", desc: "CSS do zero", grupos: [
    { grupo: "Começando", itens: [
      ["index.html", "Início"],
      ["introducao.html", "O que é CSS"],
      ["html-e-css.html", "HTML e CSS: Estrutura e Aparência"],
      ["onde-colocar.html", "Três Jeitos de Usar CSS"],
      ["simulador.html", "O Editor do Guia"],
      ["primeiro-estilo.html", "Seu Primeiro Estilo"],
      ["sintaxe.html", "Regras, Seletores e Declarações"],
      ["comentarios.html", "Comentários (/* */)"],
      ["devtools.html", "Inspecionando com o F12"]
    ]},
    { grupo: "Seletores Básicos", itens: [
      ["seletores.html", "O que é um Seletor"],
      ["seletor-elemento.html", "Seletor de Elemento"],
      ["seletor-classe.html", "Seletor de Classe (.)"],
      ["seletor-id.html", "Seletor de ID (#)"],
      ["seletor-universal.html", "Seletor Universal (*)"],
      ["seletor-grupo.html", "Agrupando Seletores (,)"],
      ["combinadores.html", "Descendente, Filho e Irmãos"]
    ]},
    { grupo: "A Cascata", itens: [
      ["cascata.html", "A Cascata: Quem Vence"],
      ["especificidade.html", "Especificidade"],
      ["heranca.html", "Herança"],
      ["important.html", "!important (e Por que Evitar)"]
    ]},
    { grupo: "Cores", itens: [
      ["cores.html", "Cores por Nome"],
      ["cores-hex.html", "Cores Hexadecimais (#)"],
      ["cores-rgb.html", "rgb()"],
      ["cores-hsl.html", "hsl()"],
      ["opacity.html", "Transparência (opacity e alfa)"]
    ]},
    { grupo: "Texto e Fontes", itens: [
      ["font-family.html", "Fontes (font-family)"],
      ["fontes-web.html", "Fontes da Internet (@font-face)"],
      ["font-size.html", "Tamanho da Letra (font-size)"],
      ["font-weight.html", "Negrito e Itálico (font-weight e font-style)"],
      ["text-align.html", "Alinhamento (text-align)"],
      ["text-decoration.html", "Sublinhado e Riscado (text-decoration)"],
      ["line-height.html", "Espaçamento (line-height e letter-spacing)"],
      ["text-transform.html", "Maiúsculas e Minúsculas (text-transform)"],
      ["text-shadow.html", "Sombra no Texto (text-shadow)"],
      ["texto-longo.html", "Texto que Não Cabe (overflow-wrap e text-overflow)"]
    ]},
    { grupo: "Unidades", itens: [
      ["unidades.html", "Unidades: px, em, rem e %"],
      ["unidades-viewport.html", "Unidades da Tela (vw, vh, dvh)"]
    ]},
    { grupo: "Fundos", itens: [
      ["background-color.html", "Cor de Fundo"],
      ["background-image.html", "Imagem de Fundo"],
      ["background-posicao.html", "Repetição e Posição do Fundo"],
      ["background-size.html", "Tamanho do Fundo (cover e contain)"],
      ["gradientes.html", "Degradês (linear-gradient)"],
      ["gradientes-radial.html", "Degradês Radiais e Cônicos"]
    ]},
    { grupo: "O Modelo de Caixa", itens: [
      ["box-model.html", "O Modelo de Caixa"],
      ["margin.html", "Margem (margin)"],
      ["padding.html", "Espaço Interno (padding)"],
      ["border.html", "Bordas (border)"],
      ["border-radius.html", "Cantos Arredondados (border-radius)"],
      ["width-height.html", "Largura e Altura"],
      ["box-sizing.html", "box-sizing: border-box"],
      ["outline.html", "Contorno (outline)"],
      ["box-shadow.html", "Sombra (box-shadow)"]
    ]},
    { grupo: "Links, Listas e Tabelas", itens: [
      ["links.html", "Estilizando Links"],
      ["listas.html", "Estilizando Listas"],
      ["tabelas.html", "Estilizando Tabelas"]
    ]}
  ]},
  { id: "n2", nome: "Nível 2 · Intermediário", curto: "Intermediário", desc: "Layout e páginas que se adaptam", grupos: [
    { grupo: "Display e Posição", itens: [
      ["display.html", "display: block, inline e inline-block"],
      ["esconder.html", "Escondendo (display: none × visibility)"],
      ["overflow.html", "O que Transborda (overflow)"],
      ["position.html", "position: Como Funciona"],
      ["position-relative.html", "position: relative"],
      ["position-absolute.html", "position: absolute"],
      ["position-fixed.html", "position: fixed"],
      ["position-sticky.html", "position: sticky"],
      ["z-index.html", "Camadas (z-index)"],
      ["float.html", "float: o Jeito Antigo"]
    ]},
    { grupo: "Flexbox", itens: [
      ["flexbox.html", "Introdução ao Flexbox"],
      ["flex-direction.html", "Direção (flex-direction)"],
      ["justify-content.html", "Alinhando na Linha (justify-content)"],
      ["align-items.html", "Alinhando na Coluna (align-items)"],
      ["flex-wrap.html", "Quebrando Linha (flex-wrap)"],
      ["gap.html", "Espaço entre Itens (gap)"],
      ["flex-grow.html", "Crescer e Encolher (flex-grow, flex-shrink, flex-basis)"],
      ["align-self.html", "Um Item Diferente (align-self e order)"],
      ["centralizar.html", "Centralizando Qualquer Coisa"]
    ]},
    { grupo: "Grid", itens: [
      ["grid.html", "Introdução ao Grid"],
      ["grid-colunas.html", "Colunas (grid-template-columns e fr)"],
      ["grid-linhas.html", "Linhas (grid-template-rows)"],
      ["grid-posicionar.html", "Posicionando Itens (grid-column e grid-row)"],
      ["grid-areas.html", "Áreas com Nome (grid-template-areas)"],
      ["grid-repeat.html", "repeat, minmax e auto-fit"],
      ["grid-alinhar.html", "Alinhando no Grid"],
      ["flex-ou-grid.html", "Flexbox ou Grid?"]
    ]},
    { grupo: "Seletores Avançados", itens: [
      ["hover-focus.html", "Estados: :hover, :focus e :active"],
      ["nth-child.html", ":first-child, :last-child e :nth-child"],
      ["before-after.html", "::before e ::after"],
      ["pseudo-elementos.html", "Outros Pseudo-elementos (::first-letter, ::placeholder…)"],
      ["seletores-atributo.html", "Seletores de Atributo ([type=\"email\"])"],
      ["not-is-where.html", ":not(), :is() e :where()"],
      ["has.html", ":has(): o Seletor do Pai"]
    ]},
    { grupo: "Responsivo", itens: [
      ["responsivo.html", "O que é Design Responsivo"],
      ["viewport.html", "A Meta Viewport"],
      ["media-queries.html", "Media Queries (@media)"],
      ["mobile-first.html", "Mobile First"],
      ["imagens-responsivas.html", "Imagens que se Adaptam (max-width e object-fit)"],
      ["clamp.html", "min(), max() e clamp()"],
      ["container-queries.html", "Container Queries (@container)"]
    ]},
    { grupo: "Formulários e Interface", itens: [
      ["formularios.html", "Estilizando Formulários"],
      ["botoes.html", "Estilizando Botões"],
      ["cursor.html", "Cursor e Interação (cursor, pointer-events, user-select)"]
    ]}
  ]},
  { id: "n3", nome: "Nível 3 · Avançado", curto: "Avançado", desc: "CSS moderno, efeitos e organização", grupos: [
    { grupo: "Variáveis e Funções", itens: [
      ["variaveis.html", "Variáveis (Custom Properties)"],
      ["calc.html", "Contas com calc()"],
      ["tema-escuro.html", "Tema Escuro (prefers-color-scheme)"],
      ["cores-modernas.html", "Cores Modernas (oklch e color-mix)"]
    ]},
    { grupo: "Efeitos", itens: [
      ["transform.html", "transform: Mover, Girar e Escalar"],
      ["transform-3d.html", "Transformações em 3D"],
      ["transition.html", "Transições (transition)"],
      ["animation.html", "Animações (@keyframes)"],
      ["animation-propriedades.html", "Controlando Animações"],
      ["reduced-motion.html", "Respeitando Quem Prefere Menos Movimento"],
      ["filter.html", "Filtros (filter e backdrop-filter)"],
      ["clip-path.html", "Recortes (clip-path)"],
      ["mix-blend-mode.html", "Mistura de Cores (mix-blend-mode)"]
    ]},
    { grupo: "CSS Moderno", itens: [
      ["aninhamento.html", "CSS Aninhado (&)"],
      ["layer.html", "Camadas da Cascata (@layer)"],
      ["scope.html", "Escopo (@scope)"],
      ["propriedades-logicas.html", "Propriedades Lógicas (inline e block)"],
      ["aspect-ratio.html", "Proporção (aspect-ratio)"],
      ["scroll.html", "Rolagem Suave e scroll-snap"],
      ["subgrid.html", "Subgrid"],
      ["supports.html", "@supports e Compatibilidade"],
      ["accent-color.html", "accent-color e appearance"]
    ]},
    { grupo: "Organização e Boas Práticas", itens: [
      ["reset.html", "Reset e Normalize"],
      ["bem.html", "Organizando Classes (BEM)"],
      ["organizar-arquivos.html", "Organizando os Arquivos de CSS"],
      ["acessibilidade.html", "CSS e Acessibilidade"],
      ["impressao.html", "CSS para Impressão (@media print)"],
      ["performance.html", "CSS Rápido"],
      ["estilo.html", "Estilo de Código"],
      ["frameworks.html", "Frameworks (Tailwind e Bootstrap)"],
      ["novidades.html", "Novidades do CSS"]
    ]}
  ]},
  { id: "pj", nome: "Projetos", curto: "Projetos", desc: "Páginas completas, passo a passo", grupos: [
    { grupo: "Projetos", itens: [
      ["projeto-cartao.html", "Projeto: Cartão de Perfil"],
      ["projeto-botoes.html", "Projeto: Coleção de Botões"],
      ["projeto-menu.html", "Projeto: Menu Responsivo"],
      ["projeto-receita.html", "Projeto: Página de Receita"],
      ["projeto-galeria.html", "Projeto: Galeria de Fotos com Grid"],
      ["projeto-precos.html", "Projeto: Tabela de Preços"],
      ["projeto-formulario.html", "Projeto: Formulário de Contato"],
      ["projeto-landing.html", "Projeto: Página de Apresentação"],
      ["projeto-blog.html", "Projeto: Layout de Blog"]
    ]}
  ]},
  { id: "ref", nome: "Referência", curto: "Referência", desc: "Consulta rápida", grupos: [
    { grupo: "Referência", itens: [
      ["ref-propriedades.html", "Propriedades"],
      ["ref-seletores.html", "Seletores"],
      ["ref-pseudo.html", "Pseudo-classes e Pseudo-elementos"],
      ["ref-unidades.html", "Unidades"],
      ["ref-cores.html", "Nomes de Cores"],
      ["ref-flexbox.html", "Flexbox"],
      ["ref-grid.html", "Grid"],
      ["ref-funcoes.html", "Funções (calc, var, clamp…)"],
      ["ref-at-rules.html", "Regras @ (@media, @font-face…)"],
      ["ref-problemas.html", "\"Meu CSS Não Funciona\": Problemas Comuns"]
    ]}
  ]}
];

(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var atual = location.pathname.split("/").pop() || "index.html";

  // Lista linear de páginas (para Anterior/Próximo) e localização da atual
  var plano = [], aqui = null;
  NIVEIS.forEach(function (n) {
    n.grupos.forEach(function (g) {
      g.itens.forEach(function (i) {
        var item = { href: i[0], titulo: i[1], nivel: n, grupo: g.grupo };
        plano.push(item);
        if (i[0] === atual) aqui = item;
      });
    });
  });
  var pos = aqui ? plano.indexOf(aqui) : -1;

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function semAcento(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  /* ---------- Barra superior ---------- */
  var links = NIVEIS.map(function (n) {
    return '<a class="top-link' + (aqui && aqui.nivel === n ? " ativo" : "") + '" href="' + n.grupos[0].itens[0][0] + '">' + n.curto + "</a>";
  }).join("");
  var header = el("header", { "class": "topbar" },
    '<button class="icon-btn" id="menu-btn" aria-label="Abrir menu" aria-expanded="false">&#9776;</button>' +
    '<a class="brand" href="index.html"><span class="brand-mark">&lt;/&gt;</span>Guia CSS</a>' +
    '<nav class="top-links" aria-label="Níveis">' + links + "</nav>" +
    '<span class="spacer"></span>' +
    '<button class="icon-btn" id="theme-btn" aria-label="Alternar tema claro/escuro" title="Alternar tema"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg></button>');
  body.insertBefore(header, body.firstChild);

  /* ---------- Menu lateral com abas de nível ---------- */
  var sidebar = document.getElementById("sidebar");
  if (sidebar) {
    var nivelAtivo = aqui ? aqui.nivel.id : "n1";
    var html = '<div class="sidebar-filter"><input type="search" placeholder="Buscar em todos os níveis…" aria-label="Buscar tópicos"></div>';
    html += '<div class="nivel-tabs" role="tablist">' + NIVEIS.map(function (n) {
      return '<button type="button" role="tab" data-nivel="' + n.id + '" class="tab-' + n.id + '">' + n.curto + "</button>";
    }).join("") + "</div>";
    NIVEIS.forEach(function (n) {
      html += '<div class="nivel-lista" data-nivel="' + n.id + '"><p class="nivel-desc">' + n.desc + "</p>";
      n.grupos.forEach(function (g) {
        html += '<div class="grupo"><h2>' + g.grupo + "</h2><ul>";
        g.itens.forEach(function (i) {
          html += '<li><a href="' + i[0] + '"' + (i[0] === atual ? ' class="active" aria-current="page"' : "") + ">" + i[1] + "</a></li>";
        });
        html += "</ul></div>";
      });
      html += "</div>";
    });
    sidebar.innerHTML = html;

    var mostrar = function (id) {
      sidebar.querySelectorAll(".nivel-lista").forEach(function (l) { l.hidden = l.getAttribute("data-nivel") !== id; });
      sidebar.querySelectorAll(".nivel-tabs button").forEach(function (b) {
        var on = b.getAttribute("data-nivel") === id;
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
    };
    mostrar(nivelAtivo);
    sidebar.querySelectorAll(".nivel-tabs button").forEach(function (b) {
      b.addEventListener("click", function () { mostrar(b.getAttribute("data-nivel")); sidebar.scrollTop = 0; });
    });

    var ativo = sidebar.querySelector("a.active");
    if (ativo) sidebar.scrollTop = ativo.offsetTop - sidebar.clientHeight / 2;

    sidebar.querySelector(".sidebar-filter input").addEventListener("input", function () {
      var q = semAcento(this.value.trim());
      if (!q) { mostrar(nivelAtivo); sidebar.querySelectorAll(".grupo, li").forEach(function (x) { x.style.display = ""; }); sidebar.classList.remove("buscando"); return; }
      sidebar.classList.add("buscando");
      sidebar.querySelectorAll(".nivel-lista").forEach(function (l) {
        var algumNivel = false;
        l.querySelectorAll(".grupo").forEach(function (g) {
          var algum = false;
          g.querySelectorAll("li").forEach(function (li) {
            var ok = semAcento(li.textContent + " " + g.querySelector("h2").textContent).indexOf(q) !== -1;
            li.style.display = ok ? "" : "none";
            if (ok) algum = true;
          });
          g.style.display = algum ? "" : "none";
          if (algum) algumNivel = true;
        });
        l.hidden = !algumNivel;
      });
    });
  }

  /* ---------- Selo de nível abaixo do título ---------- */
  var h1 = document.querySelector(".content h1");
  if (h1 && aqui && atual !== "index.html") {
    var selo = el("p", { "class": "selo selo-" + aqui.nivel.id }, '<span class="selo-nivel">' + aqui.nivel.nome + '</span><span class="selo-grupo">' + aqui.grupo + "</span>");
    h1.parentNode.insertBefore(selo, h1.nextSibling);
  }

  /* ---------- Anterior / Próximo ---------- */
  document.querySelectorAll(".pager").forEach(function (p) {
    var h = "";
    if (pos > 0) h += '<a class="prev" href="' + plano[pos - 1].href + '">&#10094; Anterior</a>';
    if (pos >= 0 && pos < plano.length - 1) h += '<a class="next" href="' + plano[pos + 1].href + '">Próximo &#10095;</a>';
    p.innerHTML = h;
  });

  /* ---------- Rodapé ---------- */
  var content = document.querySelector(".content");
  if (content) {
    content.appendChild(el("footer", { "class": "site-footer" },
      "Guia CSS · CSS moderno · Os exemplos são desenhados de verdade pelo seu navegador · Validados com o validador oficial do W3C · Vale para qualquer navegador e sistema."));
  }

  /* ---------- Tema ---------- */
  document.getElementById("theme-btn").addEventListener("click", function () {
    var t = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var novo = t === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  /* ---------- Menu no celular ---------- */
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () {
    var aberto = body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  /* ---------- Copiar ---------- */
  function botaoCopiar(bloco, texto) {
    var b = el("button", { "class": "copy-btn", "type": "button" }, "copiar");
    b.addEventListener("click", function () {
      var feito = function () { b.textContent = "copiado!"; setTimeout(function () { b.textContent = "copiar"; }, 1500); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto).then(feito);
      } else {
        var t = el("textarea"); t.value = texto; body.appendChild(t); t.select();
        try { document.execCommand("copy"); feito(); } catch (e) {}
        body.removeChild(t);
      }
    });
    bloco.appendChild(b);
  }

  /* ---------- Sessão de terminal (máquina fictícia) ----------
     <pre class="term">$ comando
     saída do comando        « anotação opcional
     #> comando como root
     </pre>
     data-user (ana) · data-host (notebook) · data-cwd (~)
     O prompt acompanha os "cd" da própria sessão. */
  function resolver(cwd, alvo, home) {
    if (!alvo || alvo === "~") return home;
    if (alvo === "-") return cwd;
    if (alvo.indexOf("~/") === 0) alvo = home + alvo.slice(1);
    var partes = (alvo[0] === "/" ? alvo : cwd + "/" + alvo).split("/"), out = [];
    partes.forEach(function (x) { if (!x || x === ".") return; if (x === "..") out.pop(); else out.push(x); });
    return "/" + out.join("/");
  }
  function curto(p, home) { return p === home ? "~" : p.indexOf(home + "/") === 0 ? "~" + p.slice(home.length) : p; }


  /* ---------- acompanhar a pasta atual nas sessões pre.term ----------
     Entende cd/pushd/popd com aspas, barras invertidas, ~, variáveis atribuídas
     na própria sessão, cd - e CDPATH (pela linha que o Bash imprime), e não
     muda a pasta quando a saída mostra que o comando falhou. */
  function saidaDepois(linhas, idx) {
    var out = [], j = idx + 1;
    while (j < linhas.length && /^> ?/.test(linhas[j])) j++; // linhas de continuação
    for (; j < linhas.length; j++) {
      if (/^(\$|#>)( |$)/.test(linhas[j])) break;
      out.push(linhas[j].replace(/\s*«.*$/, ""));
    }
    return out;
  }
  function palavrasShell(txt, vars, home) {
    var res = [], cur = null, i = 0, c;
    function add(x) { cur = (cur || "") + x; }
    function variavel() {
      var m = /^\$(\{([A-Za-z_]\w*)\}|([A-Za-z_]\w*))/.exec(txt.slice(i));
      if (!m) { add("$"); i++; return; }
      var n = m[2] || m[3];
      add(n === "HOME" ? home : n === "PWD" ? vars.__pwd : n === "OLDPWD" ? (vars.__oldpwd || "") : (vars[n] != null ? vars[n] : "\u0000"));
      i += m[0].length;
    }
    while (i < txt.length) {
      c = txt[i];
      if (/\s/.test(c)) { if (cur !== null) { res.push(cur); cur = null; } i++; continue; }
      if (c === "~" && cur === null && (i + 1 === txt.length || /[\/\s]/.test(txt[i + 1]))) { add(home); i++; continue; }
      if (c === "\\") { add(txt[i + 1] || ""); i += 2; continue; }
      if (c === "'") { var f = txt.indexOf("'", i + 1); if (f < 0) f = txt.length; add(txt.slice(i + 1, f)); i = f + 1; continue; }
      if (c === '"') {
        i++; add("");
        while (i < txt.length && txt[i] !== '"') {
          if (txt[i] === "\\" && /[$`"\\]/.test(txt[i + 1] || "")) { add(txt[i + 1]); i += 2; }
          else if (txt[i] === "$") variavel();
          else { add(txt[i]); i++; }
        }
        i++; continue;
      }
      if (c === "$") { variavel(); continue; }
      add(c); i++;
    }
    if (cur !== null) res.push(cur);
    return res;
  }
  function segmentos(cmd) { // divide em && ; || fora de aspas
    var segs = [], cur = "", q = "", i;
    for (i = 0; i < cmd.length; i++) {
      var c = cmd[i];
      if (q) { cur += c; if (c === "\\" && q === '"') { cur += cmd[++i] || ""; } else if (c === q) q = ""; continue; }
      if (c === "\\") { cur += c + (cmd[++i] || ""); continue; }
      if (c === "'" || c === '"') { q = c; cur += c; continue; }
      if ((c === "&" && cmd[i + 1] === "&") || (c === "|" && cmd[i + 1] === "|")) { segs.push(cur); cur = ""; i++; continue; }
      if (c === ";" || c === "|") { segs.push(cur); cur = ""; continue; }
      cur += c;
    }
    segs.push(cur);
    return segs;
  }
  function acompanharCd(cmd, cwd, home, ses, saida) {
    var falhou = saida.some(function (l) { return /^bash: (cd|pushd|popd|dirs): /.test(l); });
    var impresso = saida.filter(function (l) { return /^(\/|~)/.test(l); })[0];
    var mudou = false;
    segmentos(cmd).forEach(function (seg) {
      ses.vars.__pwd = cwd; ses.vars.__oldpwd = ses.oldpwd;
      var w = palavrasShell(seg.trim(), ses.vars, home);
      if (!w.length) return;
      // atribuições simples: nome=valor (sem comando depois)
      if (w.every(function (x) { return /^[A-Za-z_]\w*=/.test(x); })) {
        w.forEach(function (x) { var k = x.indexOf("="); ses.vars[x.slice(0, k)] = x.slice(k + 1); });
        return;
      }
      var nome = w[0], args = w.slice(1).filter(function (a) { return !/^-[LPe@]+$/.test(a); });
      if (nome !== "cd" && nome !== "pushd" && nome !== "popd") return;
      if (falhou) return;
      if (args.some(function (a) { return a.indexOf("\u0000") !== -1; })) return; // variável desconhecida
      var novo = null;
      if (nome === "cd") {
        if (args[0] === "-") { if (!ses.oldpwd) return; novo = ses.oldpwd; }
        else if (impresso && !mudou) novo = impresso.replace(/^~(?=\/|$)/, home); // CDPATH: o Bash imprime a pasta
        else novo = resolver(cwd, args[0] || home, home);
      } else if (nome === "pushd") {
        if (impresso && !mudou) { // pushd imprime a pilha: a primeira entrada é a pasta nova
          var topo = impresso.split(" ")[0].replace(/^~(?=\/|$)/, home);
          novo = topo;
        } else novo = args[0] ? resolver(cwd, args[0], home) : (ses.pilha[ses.pilha.length - 1] || null);
        if (novo) ses.pilha.push(cwd);
      } else if (nome === "popd") {
        if (impresso && !mudou) novo = impresso.split(" ")[0].replace(/^~(?=\/|$)/, home);
        else novo = ses.pilha.length ? ses.pilha[ses.pilha.length - 1] : null;
        ses.pilha.pop();
      }
      if (novo && novo !== cwd) { ses.oldpwd = cwd; cwd = novo; mudou = true; }
      else if (novo) mudou = true;
    });
    return cwd;
  }
  document.querySelectorAll("pre.term").forEach(function (pre) {
    var user = pre.getAttribute("data-user") || "ana",
      host = pre.getAttribute("data-host") || "notebook",
      homeUser = user === "root" ? "/root" : "/home/" + user,
      cwd = resolver("/", (pre.getAttribute("data-cwd") || "~").replace(/^~/, homeUser), homeUser);
    var linhas = pre.textContent.replace(/^\n+|\s+$/g, "").split("\n"), html = [], cmds = [];
    var tituloCwd = curto(cwd, homeUser), primeiroUser = user, pilhaSu = [];
    var ultimoCmd = false, sessao = { vars: {}, oldpwd: null, pilha: [] };
    linhas.forEach(function (l, idx) {
      var mc = ultimoCmd && /^> ?(.*)$/.exec(l);
      if (mc) {
        var nc = "", ic = mc[1].indexOf("«");
        if (ic !== -1) { nc = '<span class="t-a">← ' + esc(mc[1].slice(ic + 1).trim()) + "</span>"; mc[1] = mc[1].slice(0, ic).replace(/\s+$/, ""); }
        html.push('<span class="t-p">&gt; </span><span class="t-c">' + esc(mc[1]) + "</span>" + (nc ? "   " + nc : ""));
        cmds[cmds.length - 1] += "\n" + mc[1];
        return;
      }
      var m = /^(\$|#>)(?: (.*)|())$/.exec(l);
      if (m && m[2] == null) m[2] = "";
      ultimoCmd = !!m;
      if (m) {
        var root_ = m[1] === "#>", u = root_ ? "root" : user, home = root_ ? "/root" : homeUser;
        var nota = "", ia = m[2].indexOf("«");
        if (ia !== -1) { nota = '<span class="t-a">← ' + esc(m[2].slice(ia + 1).trim()) + "</span>"; m[2] = m[2].slice(0, ia).replace(/\s+$/, ""); }
        html.push('<span class="t-p"><span class="t-u">' + u + "@" + host + '</span>:<span class="t-d">' + esc(curto(cwd, home)) + "</span>" + (root_ ? "#" : "$") + " </span>" + '<span class="t-c">' + esc(m[2]) + "</span>" + (nota ? "   " + nota : ""));
        cmds.push(m[2]);
        cwd = acompanharCd(m[2], cwd, home, sessao, saidaDepois(linhas, idx));
        if (/^\s*sudo -i\s*$/.test(m[2])) cwd = "/root";
        if (/^\s*su(\s+-|\s+-l|\s+--login)?(\s+root)?\s*$/.test(m[2])) { pilhaSu.push({ cwd: cwd }); if (/-/.test(m[2])) cwd = "/root"; }
        if (/^\s*(exit|logout)\s*$/.test(m[2]) && root_ && pilhaSu.length) cwd = pilhaSu.pop().cwd;
        return;
      }
      var a = l.indexOf("«");
      if (a !== -1) html.push('<span class="t-o">' + esc(l.slice(0, a)) + '</span><span class="t-a">← ' + esc(l.slice(a + 1).trim()) + "</span>");
      else html.push('<span class="t-o">' + esc(l) + "</span>");
    });
    var janela = el("div", { "class": "term-win" });
    var titulo = pre.getAttribute("data-title") || (primeiroUser + "@" + host + ": " + tituloCwd);
    janela.innerHTML = '<div class="term-bar"><span class="sim-dots"><i></i><i></i><i></i></span><span class="term-title">' + esc(titulo) + "</span></div>";
    pre.parentNode.insertBefore(janela, pre);
    pre.innerHTML = html.join("\n");
    janela.appendChild(pre);
    if (cmds.join("").trim()) botaoCopiar(janela, cmds.filter(function (c) { return c.trim(); }).join("\n"));
  });

  /* ---------- Anatomia do comando ----------
     <dl class="anatomy">
       <dt>pgrep</dt><dd>o programa que procura processos</dd>
       <dt>-a</dt><dd>mostra a linha de comando completa</dd>
     </dl> */
  document.querySelectorAll("dl.anatomy").forEach(function (dl) {
    var dts = dl.querySelectorAll("dt"), linha = el("div", { "class": "anat-cmd" });
    dts.forEach(function (dt, i) {
      var n = i + 1;
      dt.setAttribute("data-n", n);
      dt.classList.add("anat-" + (i % 6));
      var parte = el("span", { "class": "anat-parte anat-" + (i % 6), "data-n": n }, esc(dt.textContent));
      linha.appendChild(parte);
      if (i < dts.length - 1) linha.appendChild(document.createTextNode(" "));
    });
    dl.parentNode.insertBefore(linha, dl);
    var caixa = el("div", { "class": "anat-box" });
    dl.parentNode.insertBefore(caixa, linha);
    caixa.appendChild(el("p", { "class": "anat-label" }, "Anatomia"));
    caixa.appendChild(linha);
    caixa.appendChild(dl);
  });

  /* ---------- Blocos antigos pre.cmd (ainda suportados) ---------- */
  document.querySelectorAll("pre.cmd").forEach(function (pre) {
    var linhas = pre.textContent.replace(/^\n+|\s+$/g, "").split("\n"), continua = false, copiaveis = [];
    pre.innerHTML = linhas.map(function (l) {
      var out;
      if (/^\s*#/.test(l)) out = '<span class="cmt">' + esc(l) + "</span>";
      else if (continua || l.trim() === "") { out = esc(l); copiaveis.push(l); }
      else { out = '<span class="prompt">$ </span>' + esc(l); copiaveis.push(l); }
      continua = /\\\s*$/.test(l);
      return out;
    }).join("\n");
    botaoCopiar(pre, copiaveis.join("\n"));
  });
  document.querySelectorAll("pre.file").forEach(function (pre) {
    botaoCopiar(pre, pre.textContent.replace(/^\n+|\s+$/g, ""));
  });

  /* ---------- Experimente: carrega o simulador só quando necessário ---------- */
  var tries = document.querySelectorAll(".try, .tryhtml");
  if (tries.length) {
    tries.forEach(function (t) {
      if (!t.querySelector(".try-head")) t.insertBefore(el("p", { "class": "try-head" }, t.classList.contains("tryhtml") ? "Experimente: edite o código e veja o resultado" : t.classList.contains("tryjshell") ? "Experimente no JShell" : t.classList.contains("tryscript") ? "Experimente: edite e rode o script" : "Experimente você mesmo"), t.firstChild);
    });
  }
  // o editor (assets/htmlsim.js) também desenha o quadro "Resultado" de pre.file[data-resultado]
  if (tries.length || document.querySelector("pre.file[data-resultado]")) body.appendChild(el("script", { src: "assets/htmlsim.js" }));

  /* ---------- Exercícios de completar ----------
     <div class="exercise"><div class="ex-code">ls <input data-answer="-a|-A"> ~</div></div> */
  /* "|" separa respostas alternativas; "\|" é uma barra vertical dentro da resposta (ex.: int\|string). */
  function respostas(i) {
    return i.getAttribute("data-answer").split(/(?<!\\)\|/).map(function (r) { return r.replace(/\\\|/g, "|"); });
  }
  document.querySelectorAll(".exercise").forEach(function (ex) {
    var inputs = ex.querySelectorAll(".ex-code input");
    if (!inputs.length) return;
    inputs.forEach(function (i) {
      i.setAttribute("autocomplete", "off");
      i.setAttribute("spellcheck", "false");
      i.setAttribute("autocapitalize", "off");
      var maior = 0;
      respostas(i).forEach(function (r) { maior = Math.max(maior, r.length); });
      i.style.width = Math.max(4, maior + 2) + "ch";
    });
    var acoes = el("div", { "class": "ex-actions" },
      '<button type="button" class="ex-check">Verificar</button>' +
      '<button type="button" class="secondary ex-show">Mostrar resposta</button>' +
      '<span class="ex-result" aria-live="polite"></span>');
    ex.appendChild(acoes);
    var res = acoes.querySelector(".ex-result");
    function norm(s) { return s.trim().replace(/\s+/g, " "); }
    acoes.querySelector(".ex-check").addEventListener("click", function () {
      var tudo = true;
      inputs.forEach(function (i) {
        var certas = respostas(i).map(norm);
        var ok = certas.indexOf(norm(i.value)) !== -1;
        i.classList.toggle("ok", ok);
        i.classList.toggle("bad", !ok);
        if (!ok) tudo = false;
      });
      res.textContent = tudo ? "Correto!" : "Ainda não. Tente de novo.";
      res.className = "ex-result " + (tudo ? "ok" : "bad");
    });
    acoes.querySelector(".ex-show").addEventListener("click", function () {
      inputs.forEach(function (i) {
        i.value = respostas(i)[0];
        i.classList.remove("bad"); i.classList.add("ok");
      });
      res.textContent = "";
    });
    inputs.forEach(function (i) {
      i.addEventListener("keydown", function (e) { if (e.key === "Enter") acoes.querySelector(".ex-check").click(); });
    });
  });

  /* ---------- Múltipla escolha ----------
     <div class="mc" data-answer="2"><p class="mc-q">…</p><label><input type="radio" name="q1"> …</label>…</div> */
  document.querySelectorAll(".mc").forEach(function (mc) {
    var certa = parseInt(mc.getAttribute("data-answer"), 10) - 1;
    var labels = mc.querySelectorAll("label");
    var fb = el("p", { "class": "mc-feedback", "aria-live": "polite" });
    mc.appendChild(fb);
    labels.forEach(function (lb, n) {
      lb.querySelector("input").addEventListener("change", function () {
        labels.forEach(function (x) { x.classList.remove("ok", "bad"); });
        if (n === certa) { lb.classList.add("ok"); fb.textContent = "Correto!"; fb.style.color = "var(--ok)"; }
        else { lb.classList.add("bad"); fb.textContent = "Não é essa. Tente outra opção."; fb.style.color = "var(--bad)"; }
        var placar = document.getElementById("placar");
        if (placar) placar.textContent = document.querySelectorAll(".mc label.ok").length + " de " + document.querySelectorAll(".mc").length;
      });
    });
  });
})();
