export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  logo: string;
  featured?: boolean;
  highlight?: string;
};

export const products: Product[] = [
  {
    id: 'meu-garcom',
    name: 'Meu Garçom',
    tagline: 'Cardápio digital e operação do restaurante',
    description:
      'Cardápio com QR Code, pedidos em tempo real, monitor de cozinha, impressão térmica e multi-tenant — cada restaurante no seu subdomínio.',
    url: 'https://meugarcom.app',
    category: 'Gastronomia · SaaS',
    logo: '/images/products/meu-garcom.png',
  },
  {
    id: 'minha-fila',
    name: 'Minha Fila',
    tagline: 'Fila virtual em tempo real',
    description:
      'Elimina senhas de papel: o público acompanha a posição no celular via QR Code ou link, com atualização ao vivo. Multi-empresa, sem hardware extra.',
    url: 'https://minha-fila.meugarcom.app',
    category: 'Gastronomia · SaaS',
    logo: '/images/products/minha-fila.png',
  },
  {
    id: 'gastronomia-local',
    name: 'Gastronomia Local',
    tagline: 'Hub gastronômico da sua região',
    description:
      'Descubra restaurantes e cardápios locais. Marketplace que conecta o público à gastronomia da cidade, integrado ao ecossistema Meu Garçom.',
    url: 'https://gastronomialocal.com.br',
    category: 'Marketplace',
    logo: '/images/products/gastronomia-local.png',
  },
  {
    id: 'prompt-bi',
    name: 'Prompt BI',
    tagline: 'Ask your data in plain English',
    description:
      'Metrics, rankings and reports in natural language. No maze of filters — talk to your business numbers and get visual answers instantly.',
    url: 'https://www.promptbi.com.br',
    category: 'BI · AI',
    logo: '/images/products/prompt-bi.png',
  },
  {
    id: 'bot-bigworks',
    name: 'BOT BigWorks',
    tagline: 'WhatsApp operacional com IA',
    description:
      'Pedidos, vendas e ordens de serviço pelo WhatsApp em linguagem natural. A IA entende o que você quer — não um menu infinito de opções numeradas.',
    url: 'https://bot.bigworks.com.br',
    category: 'WhatsApp · IA',
    logo: '/images/products/bot-bigworks.png',
    featured: true,
    highlight: 'Linguagem natural — não labirinto de opções',
  },
  {
    id: 'avalie-ai',
    name: 'Avalie Aí',
    tagline: 'NPS e feedback para varejo',
    description:
      'Plataforma multi-tenant de Net Promoter Score: dashboard operacional, FalaE, Google Avaliações, análise de concorrência e insights com IA.',
    url: 'https://avalieai.com.br',
    category: 'NPS · Feedback',
    logo: '/images/products/avalie-ai.png',
  },
  {
    id: 'minha-foto',
    name: 'Minha Foto',
    tagline: 'Álbuns e vendas para fotógrafos',
    description:
      'Crie álbuns online, compartilhe via link ou QR Code e venda fotos individuais. SaaS pensado para fotografia escolar e eventos.',
    url: 'https://minhafoto.bigworks.com.br',
    category: 'Fotografia · SaaS',
    logo: '/images/products/minha-foto.png',
  },
  {
    id: 'upcontroller',
    name: 'UpController',
    tagline: 'Gestão para oficinas mecânicas',
    description:
      'Ordens de serviço, clientes, veículos, financeiro e documentos via Google Drive. Focado em prestadores automotivos.',
    url: 'https://upcontroller.app',
    category: 'Automotivo · SaaS',
    logo: '/images/products/upcontroller.jpg',
  },
  {
    id: 'elo',
    name: 'Elo',
    tagline: 'Links, redes e programa ao vivo',
    description:
      'Página de links feita para o Brasil. Bloco ao vivo com contador que vira "no ar" sozinho, cliques rastreados e abre rápido no celular.',
    url: 'https://elo.bigworks.com.br',
    category: 'Link in bio',
    logo: '/images/products/elo.svg',
  },
  {
    id: 'app-marcenaria',
    name: 'App Marcenaria',
    tagline: 'Projeto 3D e pedido de corte',
    description:
      'Monte painéis em 3D, marque fita de borda, magnetize peças e exporte o pedido por WhatsApp ou CSV — com área, metragem de fita e quantidade. Funciona no celular.',
    url: 'https://marcenaria.morla.com.br',
    category: 'Marcenaria · Web App',
    logo: '/images/products/app-marcenaria.svg',
  },
];
