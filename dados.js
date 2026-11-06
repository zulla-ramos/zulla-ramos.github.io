/*
  ===================================================================
  DADOS DO PORTFÓLIO
  Para adicionar ou editar projetos/experiências, mexa só neste arquivo.

  Campos opcionais de um projeto:
    video:    { src, poster }        -> vídeo de apresentação
    galeria:  [ { src, alt }, ... ]  -> prints do app/site
    papel:    "texto"                -> seu papel quando for projeto em equipe
    links:    [ { rotulo, url } ]
  ===================================================================
*/

const PROJETOS = [
  {
    nome: "Rotly",
    icone: "midia/rotly/icone.png",
    tipo: "App mobile SaaS · Projeto independente",
    status: "Publicado na Google Play Store",
    destaque: true,
    resumo:
      "App Android para entregadores de marketplaces como Shopee e Mercado Livre. O entregador fotografa a etiqueta, o app lê o endereço e calcula a ordem mais rápida entre as paradas. Criei o Rotly sozinho, do zero, a partir da minha experiência como entregador.",
    video: {
      src: "midia/rotly/rotly-anuncio.mp4",
      poster: "midia/rotly/poster.webp",
    },
    galeria: [
      { src: "midia/rotly/01-rota.webp", alt: "Tela de rota otimizada com paradas numeradas no mapa" },
      { src: "midia/rotly/02-etiqueta.webp", alt: "Leitura da etiqueta do pacote pela câmera" },
      { src: "midia/rotly/03-entrega.webp", alt: "Modo de entrega parada a parada" },
      { src: "midia/rotly/04-estatisticas.webp", alt: "Tela de estatísticas de entregas" },
      { src: "midia/rotly/05-concluida.webp", alt: "Rota concluída" },
    ],
    funcionalidades: [
      "Leitura automática de etiquetas via OCR (Google ML Kit)",
      "Otimização de rotas de entrega com OpenRouteService",
      "Backend em Supabase: autenticação, PostgreSQL, Edge Functions em Deno e políticas RLS",
      "Assinaturas com Google Play Billing e verificação de compras no servidor",
      "Login com Google (OAuth), notificações push (FCM) e Crashlytics",
      "Overlay flutuante nativo em Kotlin (WindowManager via MethodChannel)",
      "Mapas com flutter_map e agrupamento de pacotes por endereço",
      "Prevenção de abuso de período de teste por device ID",
    ],
    tecnologias: [
      "Flutter", "Dart", "Kotlin", "Supabase", "PostgreSQL",
      "Google Play Billing", "Firebase", "ML Kit", "OpenRouteService",
    ],
    links: [
      { rotulo: "Baixar na Play Store", url: "https://play.google.com/store/apps/details?id=com.rotly.app&referrer=utm_source%3Dportfolio%26utm_medium%3Dbotao%26utm_campaign%3Dportfolio", primario: true },
      { rotulo: "Site do Rotly", url: "https://rotly.web.app" },
    ],
  },
  {
    nome: "AutoParts",
    tipo: "Loja virtual de peças · Disciplina de Programação Web (UFMS)",
    galeriaFormato: "paisagem",
    galeria: [
      { src: "midia/autoparts/01-home.webp", alt: "Página inicial da AutoParts com busca e categorias" },
      { src: "midia/autoparts/02-catalogo.webp", alt: "Catálogo de peças com filtros por categoria, marca e preço" },
      { src: "midia/autoparts/04-painel-admin.webp", alt: "Painel administrativo com peças, pedidos, clientes e faturamento" },
      { src: "midia/autoparts/05-relatorios.webp", alt: "Relatórios de vendas por mês e por categoria, com exportação em CSV" },
      { src: "midia/autoparts/03-login.webp", alt: "Tela de login com opção de entrar com Google" },
    ],
    papel: "Projeto em equipe de 6 pessoas. Fui o integrante com mais commits: montei a arquitetura inicial, a autenticação e o painel administrativo.",
    resumo:
      "Loja on-line de compra e venda de peças automotivas, com catálogo por categoria, carrinho, pedidos e painel administrativo com relatórios.",
    funcionalidades: [
      "Arquitetura em camadas: controllers, services, repositories, entidades JPA e DTOs",
      "CRUD completo de peças com controle de acesso por papel (ADMIN/USER)",
      "Autenticação com Spring Security, tela de login própria e login com Google (OAuth2)",
      "Cadastro de clientes com DTO para proteção contra mass assignment",
      "Painel admin com tela de clientes e exportação de relatórios em CSV",
      "Envio de nota fiscal por e-mail e testes automatizados com banco H2 em memória",
    ],
    tecnologias: [
      "Java 17", "Spring Boot", "Spring Security", "OAuth2", "Spring Data JPA",
      "Thymeleaf", "H2", "HTML", "CSS", "JavaScript",
    ],
    links: [
      { rotulo: "Código no GitHub", url: "https://github.com/CaioMgn/SitePecasCarro" },
    ],
  },
];

const EXPERIENCIAS = [
  {
    titulo: "Bolsista PET-Saúde Digital",
    papel: "Programa de Educação pelo Trabalho para a Saúde · Meio período · Presencial",
    periodo: "ago. 2025 – atual",
    descricao:
      "Bolsista em um grupo de pesquisa e extensão focado na aplicação de Inteligência Artificial na Odontologia. Desenvolvo atividades interdisciplinares voltadas à transformação digital e à inovação no Sistema Único de Saúde (SUS).",
  },
  {
    titulo: "Melhor Trabalho · Curso Introdutório de Arduino",
    papel: "Prêmio · PET Sistemas da UFMS",
    periodo: "2026",
    descricao:
      "Minha equipe, ASSEMBLYANOS, recebeu o prêmio de Melhor Trabalho no curso de Arduino para calouros. Foi uma oportunidade de aprofundar eletrônica e automação e de trabalhar em equipe na resolução de problemas.",
  },
  {
    titulo: "Seletiva da Mega Júnior",
    papel: "Processo seletivo · Empresa júnior de computação da UFMS",
    descricao:
      "Participação no processo seletivo com foco em desenvolvimento de software e práticas colaborativas em equipe.",
  },
];
