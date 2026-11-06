// Renderiza projetos e experiências a partir de dados.js
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const mockupRota = `
  <div class="mockup" aria-hidden="true">
    <div class="celular">
      <div class="celular-tela">
        <div class="mapa">
          <svg viewBox="0 0 200 260" preserveAspectRatio="none">
            <path class="ruas" d="M0 60h200M0 140h200M0 210h200M50 0v260M120 0v260M170 0v260"/>
            <path class="rota" d="M30 230 L50 210 L50 140 L120 140 L120 60 L170 60 L170 25"/>
            <circle class="parada" cx="50" cy="140" r="7"/>
            <circle class="parada" cx="120" cy="60" r="7"/>
            <circle class="origem" cx="30" cy="230" r="8"/>
            <circle class="destino" cx="170" cy="25" r="9"/>
          </svg>
        </div>
        <div class="painel">
          <strong>12 entregas</strong>
          <span>Rota otimizada · 18,4 km</span>
          <div class="barra"><i></i></div>
        </div>
      </div>
    </div>
  </div>`;

function renderProjetos() {
  const alvo = document.getElementById("listaProjetos");
  alvo.innerHTML = PROJETOS.map((p) => {
    const temMidia = p.video || p.galeria?.length;
    const cabecalho = `
      <div class="projeto-cabecalho">
        ${p.icone ? `<img class="projeto-icone" src="${esc(p.icone)}" alt="" width="56" height="56">` : ""}
        <div>
          <p class="cartao-rotulo">${esc(p.tipo)}</p>
          <h3>${esc(p.nome)}</h3>
        </div>
      </div>
      ${p.status ? `<p class="status"><span class="ponto"></span>${esc(p.status)}</p>` : ""}`;

    const info = `
      <p class="projeto-resumo">${esc(p.resumo)}</p>
      ${p.papel ? `<p class="projeto-papel"><strong>Meu papel:</strong> ${esc(p.papel)}</p>` : ""}
      ${p.funcionalidades?.length ? `<ul class="funcionalidades">${p.funcionalidades.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
      <ul class="tags">${p.tecnologias.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      ${p.links?.length ? `<div class="projeto-links">${p.links.map((l) => `<a class="btn ${l.primario ? "btn-primario" : "btn-secundario"}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.rotulo)} ↗</a>`).join("")}</div>` : ""}`;

    const video = p.video ? `
      <figure class="projeto-video">
        <video controls playsinline preload="none" poster="${esc(p.video.poster || "")}">
          <source src="${esc(p.video.src)}" type="video/mp4">
          Seu navegador não reproduz vídeos.
        </video>
        <figcaption>Vídeo de divulgação do ${esc(p.nome)}</figcaption>
      </figure>` : "";

    const paisagem = p.galeriaFormato === "paisagem";
    const [gw, gh] = paisagem ? [1280, 800] : [540, 960];
    const galeria = p.galeria?.length ? `
      <div class="galeria ${paisagem ? "galeria-paisagem" : ""}" role="list" aria-label="Telas do ${esc(p.nome)}">
        ${p.galeria.map((g) => `<img role="listitem" src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" width="${gw}" height="${gh}">`).join("")}
      </div>` : "";

    if (temMidia && paisagem) {
      return `
        <article class="projeto projeto-completo revelar">
          ${cabecalho}
          ${galeria}
          <div class="projeto-info">${info}</div>
        </article>`;
    }
    if (temMidia) {
      return `
        <article class="projeto projeto-completo revelar">
          ${cabecalho}
          ${video}
          <div class="projeto-corpo">
            <div class="projeto-info">${info}</div>
            ${galeria}
          </div>
        </article>`;
    }
    return `
      <article class="projeto ${p.destaque ? "projeto-destaque" : ""} revelar">
        <div class="projeto-info">${cabecalho}${info}</div>
        ${p.imagem ? `<img class="projeto-img" src="${esc(p.imagem)}" alt="Tela do projeto ${esc(p.nome)}" loading="lazy">` : p.destaque ? mockupRota : ""}
      </article>`;
  }).join("");
}

function renderExperiencias() {
  const alvo = document.getElementById("listaExperiencias");
  alvo.innerHTML = EXPERIENCIAS.map((e) => `
    <li class="revelar">
      ${e.periodo ? `<p class="periodo">${esc(e.periodo)}</p>` : ""}
      <h3>${esc(e.titulo)}</h3>
      <p class="cartao-rotulo">${esc(e.papel)}</p>
      <p>${esc(e.descricao)}</p>
    </li>`).join("");
}

function iniciarTema() {
  const btn = document.getElementById("temaBtn");
  btn.addEventListener("click", () => {
    const atual = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const novo = atual === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });
}

function iniciarRevelar() {
  const itens = document.querySelectorAll(".revelar");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    itens.forEach((el) => el.classList.add("visivel"));
    return;
  }
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  itens.forEach((el) => obs.observe(el));
}

renderProjetos();
renderExperiencias();
iniciarTema();
iniciarRevelar();
document.getElementById("ano").textContent = new Date().getFullYear();
