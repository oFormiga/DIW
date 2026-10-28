const dados = {
  "eventos": [
    {
      "id": 1,
      "nome": "Scharlé 67 Anos",
      "descricao": "Festa de aniversário do clube com música ao vivo e barracas de comida.",
      "conteudo": "O aniversário do clube mais tradicional de Minas Gerais reúne sócios e comunidade em um dia inteiro de atrações: shows, barracas, atividades para crianças e muita confraternização.",
      "categoria": "Aniversário",
      "data": "2026-09-27",
      "horario": "10h às 22h",
      "local": "Salão principal e área externa",
      "valor": "Gratuito para sócios",
      "destaque": true,
      "imagemPrincipal": "assets/images/evento.jpg"
    },
    {
      "id": 2,
      "nome": "Festa de Dia das Crianças",
      "descricao": "Tarde especial para a criançada, com muita diversão, brincadeiras e momentos inesquecíveis em família.",
      "conteudo": "Comemaração do dia das crianças no clube, com muita diversão, brincadeiras, comida boa, atrações e muito mais.",
      "categoria": "Comemoração",
      "data": "2026-10-18",
      "horario": "12h às 17h",
      "local": "Área externa",
      "valor": "Gratuito",
      "destaque": true,
      "imagemPrincipal": "assets/images/festa-criancas.jpg"
    },
    {
      "id": 3,
      "nome": "Yoga Scharlé",
      "descricao": "Momento de equilíbrio, movimento e bem-estar.",
      "conteudo": "Está libearda a próxima data para reservar um momento de bem-estar nas dependências do clube.",
      "categoria": "Bem-Estar",
      "data": "2026-10-04",
      "horario": "9h às 10h",
      "local": "Área Comum de Lazer",
      "valor": "Gratuito (Levar material e retirar convite)",
      "destaque": true,
      "imagemPrincipal": "assets/images/yoga.jpg"
    },
    {
      "id": 4,
      "nome": "Torneio de Beach Tenis Misto",
      "descricao": "Prepare sua dupla para um dia de diversão, competitividade e energia.",
      "conteudo": "Participe das disputas no torneio de Beach Tenis Misto Scharle e se diverta jogando com amigos e familia nas quadras do clube.",
      "categoria": "Esporte",
      "data": "2026-11-15",
      "horario": "10h às 18h",
      "local": "Quadras de Areia",
      "valor": "Gratuito (se inscrever no formulário até 12/11/2026)",
      "destaque": false,
      "imagemPrincipal": "assets/images/beach-tenis.jpg"
    },
    {
      "id": 5,
      "nome": "Torneio de Vôlei de Areia Misto",
      "descricao": "Prepare-se para um dia de esporte, integração e muita disputa nas areias do clube.",
      "conteudo": "Participe de mais um campeonato de vôlei de areia misto nas quadras do clube e se divirta com essa competitividade e energia.",
      "categoria": "Esporte",
      "data": "2026-10-18",
      "horario": "10h à 18h",
      "local": "Quadras de Areia",
      "valor": "Gratuito (se inscrever no formulário até 15/10/2026)",
      "destaque": false,
      "imagemPrincipal": "assets/images/volei.jpg"
    },
    {
      "id": 6,
      "nome": "Campeonato de Futebol e Pagode",
      "descricao": "Assista a rodada do Cameponato de Futebol Scharlé e curta uma tarde no pagodinho.",
      "conteudo": "Partida do campeonato as 8h e logo após, as 13h Pagode do Minduka .",
      "categoria": "Esporte e Lazer",
      "data": "2026-09-20",
      "horario": "8h às 20h",
      "local": "Campo de Futebol e Bar do Campo",
      "valor": "Gratuito",
      "destaque": false,
      "imagemPrincipal": "assets/images/futebol1.jpeg"
    },
    {
      "id": 7,
      "nome": "Independência ou Samba",
      "descricao": "Chame a família, reúna os amigos e venha viver esse feriado no ritmo do samba!",
      "conteudo": "Venha curtir uma tarde nesse feriado com o grupo Na Aba do Samba, com a participação especial de Aninha Felipe, garantindo aquele samba gostoso para curtir com a família e os amigos.",
      "categoria": "Lazer",
      "data": "2026-09-07",
      "horario": "12h às 19h",
      "local": "Restaurante do Clube",
      "valor": "Gratuito para sócios",
      "destaque": false,
      "imagemPrincipal": "assets/images/samba.jpg"
    },
    {
      "id": 8,
      "nome": "Degustação de Chopp",
      "descricao": "Sábado é dia de chopp gelado, música boa e muita diversão no Clube Albert Scharlé!",
      "conteudo": "Venha curtir o sábado com um chopp gelado, e o clima perfeito para aproveitar bons momentos com os amigos.",
      "categoria": "Social",
      "data": "2026-08-29",
      "horario": "12h às 17h",
      "local": "Área das Piscinas",
      "valor": "Gartuito e apenas para maiores de 18 anos",
      "destaque": false,
      "imagemPrincipal": "assets/images/chopp.jpg"
    }
  ],

  "fotos": [
    { "id": 1,  "eventoId": 1, "titulo": "Curtindo o show da banda blitz",      "imagem": "assets/images/fotos/aniversario1.png" },
    { "id": 2,  "eventoId": 1, "titulo": "Scharlé é tradição",                  "imagem": "assets/images/fotos/aniversario2.png" },
    { "id": 3,  "eventoId": 1, "titulo": "Show de Abertura",                    "imagem": "assets/images/fotos/aniversario3.png" },

    { "id": 4,  "eventoId": 2, "titulo": "Piscina",                             "imagem": "assets/images/fotos/criancas1.jpg" },
    { "id": 5,  "eventoId": 2, "titulo": "Divesão para todas as idades",        "imagem": "assets/images/fotos/criancas2.jpg" },
    { "id": 6,  "eventoId": 2, "titulo": "Comidas típicas",                     "imagem": "assets/images/fotos/criancas3.jpg" },

    { "id": 7,  "eventoId": 3, "titulo": "Bem-Estar",                           "imagem": "assets/images/fotos/yoga1.jpg" },
    { "id": 8,  "eventoId": 3, "titulo": "Para todas as idasdes",               "imagem": "assets/images/fotos/yoga2.jpg" },
    { "id": 9,  "eventoId": 3, "titulo": "Professores qualificados",            "imagem": "assets/images/fotos/yoga3.jpg" },

    { "id": 10, "eventoId": 4, "titulo": "Competitividade",                     "imagem": "assets/images/fotos/beach-tenis1.jpg" },
    { "id": 11, "eventoId": 4, "titulo": "Energia",                             "imagem": "assets/images/fotos/beach-tenis2.jpg" },
    { "id": 12, "eventoId": 4, "titulo": "Amizade",                             "imagem": "assets/images/fotos/beach-tenis3.jpg" },

    { "id": 13, "eventoId": 5, "titulo": "Lazer",                               "imagem": "assets/images/fotos/volei1.jpeg" },
    { "id": 14, "eventoId": 5, "titulo": "Competitividade",                     "imagem": "assets/images/fotos/volei2.jpg" },
    { "id": 15, "eventoId": 5, "titulo": "Família e Amigos",                    "imagem": "assets/images/fotos/volei3.jpg" },

    { "id": 16, "eventoId": 6, "titulo": "Jogos da Rodada",                     "imagem": "assets/images/fotos/futebol1.png" },
    { "id": 17, "eventoId": 6, "titulo": "Estrutura",                           "imagem": "assets/images/fotos/futebol2.jpg" },
    { "id": 18, "eventoId": 6, "titulo": "PAgode e Lazer",                      "imagem": "assets/images/fotos/futebol3.jpg" },

    { "id": 19, "eventoId": 7, "titulo": "Na Aba do Samba",                     "imagem": "assets/images/fotos/samba1.jpg" },
    { "id": 20, "eventoId": 7, "titulo": "Estrutura",                           "imagem": "assets/images/fotos/samba2.jpg" },
    { "id": 21, "eventoId": 7, "titulo": "Aninha Felipe",                       "imagem": "assets/images/fotos/samba3.jpg" },

    { "id": 22, "eventoId": 8, "titulo": "Chopp",                               "imagem": "assets/images/fotos/chopp1.jpg" },
    { "id": 23, "eventoId": 8, "titulo": "Música",                              "imagem": "assets/images/fotos/chopp2.jpg" },
    { "id": 24, "eventoId": 8, "titulo": "Diversão garantida",                  "imagem": "assets/images/fotos/chopp3.jpeg" }
  ]
};

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

function renderCarrossel() {
  const container = document.getElementById("carrossel");
  if (!container) return;

  const destaques = dados.eventos.filter(e => e.destaque);

  const indicadores = destaques
    .map((e, i) => `
      <button type="button" data-bs-target="#carrosselEventos" data-bs-slide-to="${i}"
        class="${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`)
    .join("");

  const slides = destaques
    .map((e, i) => `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="evento-corpo">
          <a href="detalhes.html?id=${e.id}">
            <img class="evento" src="${e.imagemPrincipal}" alt="${e.nome}">
          </a>
          <div class="evento-texto">
            <h3><a href="detalhes.html?id=${e.id}">${e.nome}</a></h3>
            <p class="descricao-evento">${e.descricao}</p>
            <a class="saiba-mais" href="detalhes.html?id=${e.id}">Saiba Mais</a>
          </div>
        </div>
      </div>`)
    .join("");

  container.innerHTML = `
    <div id="carrosselEventos" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">${indicadores}</div>
      <div class="carousel-inner">${slides}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carrosselEventos" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carrosselEventos" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>`;
}
function renderCards() {
  const container = document.getElementById("cards");
  if (!container) return;

  container.innerHTML = dados.eventos
    .map(e => `
      <div class="col">
        <div class="card card-evento h-100">
          <a href="detalhes.html?id=${e.id}">
            <img src="${e.imagemPrincipal}" class="card-img-top" alt="${e.nome}">
          </a>
          <div class="card-body">
            <h3 class="card-title h5">
              <a href="detalhes.html?id=${e.id}">${e.nome}</a>
            </h3>
            <p class="card-text">${e.descricao}</p>
          </div>
          <div class="card-footer">
            <small>${formatarData(e.data)} &middot; ${e.local}</small>
          </div>
        </div>
      </div>`)
    .join("");
}

function renderDetalhes() {
  const infoEl = document.getElementById("info-evento");
  const fotosEl = document.getElementById("fotos-evento");
  if (!infoEl || !fotosEl) return;

  // Lê o id da URL (detalhes.html?id=3) e procura o evento no JSON
  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const evento = dados.eventos.find(e => e.id === id);

  if (!evento) {
    infoEl.innerHTML = `
      <div class="container">
        <div class="alert alert-warning mb-0">
          Evento não encontrado. <a href="index.html#eventos">Voltar para os eventos</a>.
        </div>
      </div>`;
    fotosEl.innerHTML = "";
    return;
  }

  document.title = `${evento.nome} - Clube Albert Scharlé`;

  infoEl.innerHTML = `
    <img class="detalhe-fundo" src="${evento.imagemPrincipal}" alt="" aria-hidden="true" $>
    <div class="container detalhe-conteudo">
      <h2 class="titulo-secao titulo-claro">Informações Gerais</h2>
      <div class="row g-4 align-items-center">
        <div class="col-12 col-md-5">
          <img class="detalhe-foto" src="${evento.imagemPrincipal}" alt="${evento.nome}">
        </div>
        <div class="col-12 col-md-7">
          <div class="detalhe-card">
            <span class="detalhe-categoria">${evento.categoria}</span>
            <h1 class="detalhe-titulo">${evento.nome}</h1>
            <p class="detalhe-texto">${evento.conteudo}</p>
            <div class="row row-cols-2 g-3 detalhe-dados">
              <div class="col"><div class="dado"><span>Data</span><strong>${formatarData(evento.data)}</strong></div></div>
              <div class="col"><div class="dado"><span>Horário</span><strong>${evento.horario}</strong></div></div>
              <div class="col"><div class="dado"><span>Local</span><strong>${evento.local}</strong></div></div>
              <div class="col"><div class="dado"><span>Valor</span><strong>${evento.valor}</strong></div></div>
            </div>
            <a class="saiba-mais" href="index.html#eventos">&larr; Voltar aos eventos</a>
          </div>
        </div>
      </div>
    </div>`;

  const fotos = dados.fotos.filter(f => f.eventoId === evento.id);

  if (fotos.length === 0) {
    fotosEl.innerHTML = `<div class="col-12"><p class="sem-fotos">Nenhuma foto cadastrada para este evento.</p></div>`;
    return;
  }

  fotosEl.innerHTML = fotos
    .map(f => `
      <div class="col">
        <figure class="foto-item">
          <img src="${f.imagem}" alt="${f.titulo}">
          <figcaption>${f.titulo}</figcaption>
        </figure>
      </div>`)
    .join("");
}
renderCarrossel();
renderCards();
renderDetalhes();