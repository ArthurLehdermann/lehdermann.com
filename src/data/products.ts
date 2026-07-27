export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  accent: string;
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
    url: 'https://painel.meugarcom.app',
    category: 'Gastronomia · SaaS',
    icon: 'mdi-silverware-fork-knife',
    accent: 'from-orange-500 to-amber-500',
  },
  {
    id: 'gastronomia-local',
    name: 'Gastronomia Local',
    tagline: 'Hub gastronômico da sua região',
    description:
      'Descubra restaurantes e cardápios locais. Marketplace que conecta o público à gastronomia da cidade, integrado ao ecossistema Meu Garçom.',
    url: 'https://gastronomialocal.com.br',
    category: 'Marketplace',
    icon: 'mdi-store-marker',
    accent: 'from-rose-500 to-pink-500',
  },
  {
    id: 'prompt-bi',
    name: 'Prompt BI',
    tagline: 'Pergunte aos seus dados',
    description:
      'Indicadores, rankings e relatórios em linguagem natural. Sem labirinto de filtros — você conversa com os números do negócio.',
    url: 'https://www.promptbi.com.br',
    category: 'BI · IA',
    icon: 'mdi-chart-timeline-variant',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    id: 'bot-bigworks',
    name: 'BOT BigWorks',
    tagline: 'WhatsApp operacional com IA',
    description:
      'Pedidos, vendas e ordens de serviço pelo WhatsApp em linguagem natural. A IA entende o que você quer — não um menu infinito de opções numeradas.',
    url: 'https://bot.bigworks.com.br',
    category: 'WhatsApp · IA',
    icon: 'mdi-robot-happy',
    accent: 'from-indigo-500 to-blue-600',
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
    icon: 'mdi-thumb-up',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'minha-foto',
    name: 'Minha Foto',
    tagline: 'Álbuns e vendas para fotógrafos',
    description:
      'Crie álbuns online, compartilhe via link ou QR Code e venda fotos individuais. SaaS pensado para fotografia escolar e eventos.',
    url: 'https://minhafoto.bigworks.com.br',
    category: 'Fotografia · SaaS',
    icon: 'mdi-camera',
    accent: 'from-sky-500 to-cyan-500',
  },
];
