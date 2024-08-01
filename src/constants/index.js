import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import logo from "../assets/benefits/portalB1soft.png"
import sapb1 from "../assets/sapb1.teste.png";
import addon from "../assets/CNPJImporter.jpeg";
import integration from "../assets/integration.png";
import salesforce from "../assets/salesforce.png";
import infracomerce from "../assets/infracommerce.jpg";
import magento from "../assets/magento.png";
import shopify from "../assets/shopify.png";
import mercadoLivre from "../assets/MercadoLivre.png";
import oracle from "../assets/Oracle.png";
import bling from "../assets/blingLogo.png";
import any from "../assets/anymarket.png"


export const navigation = [
  {
    id: "0",
    title: "Inicio",
    url: "#hero",
  },
  {
    id: "1",
    title: "Módulos",
    url: "#features",
  },
  {
    id: "2",
    title: "Integração",
    url: "#colab",
  },
  {
    id: "3",
    title: "Serviços",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contato",
    url: "#ContactForm",
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Consultoria Funcional",
    text: "Na B1Soft, oferecemos consultoria funcional especializada para todos os módulos do SAP Business One. Nossa missão é ajudar sua empresa a maximizar o uso do SAP B1, aumentando a eficiência e produtividade.",
    status: "done",
    imageUrl: sapb1,
    colorful: true,
  },
  {
    id: "1",
    title: "Addons Personalizados",
    text: "oferecemos desenvolvimento personalizado de addons para o SAP Business One, adaptando a solução às necessidades específicas do seu negócio. Nossa expertise em criar funcionalidades adicionais permite que sua empresa aproveite ao máximo o SAP B1, tornando seus processos mais eficientes e alinhados com suas demandas.",
    date: "May 2023",
    status: "progress",
    imageUrl: addon,
  },
  {
    id: "2",
    title: "Integração Personalizada",
    text: "Na B1Soft, oferecemos soluções de integração personalizadas para conectar sua empresa com as mais diversas plataformas, garantindo um fluxo de trabalho contínuo e eficiente. Nosso objetivo é facilitar a comunicação entre diferentes sistemas e otimizar seus processos de negócios, proporcionando maior agilidade e produtividade.",
    date: "May 2023",
    status: "done",
    imageUrl: integration,
  },
  {
    id: "3",
    title: "Portal de Integração UI5",
    text: " Portais de integração utilizando a tecnologia SAP UI5, que oferecem soluções robustas para a criação de consultas e recebimento de informações de diversas fontes. Um dos principais usos desses portais é a integração com sistemas de envio de faturas (send_Invoice), automação de faturamento (auto invoice), rastreamento de pedidos (order tracking) e gerenciamento de picking. Esses portais são projetados para facilitar a visualização de dados, melhorar a eficiência operacional e proporcionar uma experiência de usuário intuitiva e eficiente. Com isso, é possível otimizar processos empresariais críticos e garantir uma gestão mais precisa e eficaz das operações.",
    date: "May 2023",
    status: "progress",
    imageUrl: logo,
  },
];

export const collabText =
  "Com automação inteligente e segurança de alto nível, é a solução perfeita para equipes que buscam trabalhar de maneira mais inteligente.";

export const collabContent = [
  {
    id: "0",
    title: "Integração Perfeita",
    text: collabText,
  },
  {
    id: "1",
    title: "Automação Inteligente",
  },
  {
    id: "2",
    title: "Dados Seguros",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Magento",
    icon: magento,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "SalesForce",
    icon: salesforce,
    width: 84,
    height: 36,
  },
  {
    id: "2",
    title: "Oracle",
    icon: oracle,
    width: 46,
    height: 28,
  },
  {
    id: "3",
    title: "Infra",
    icon: infracomerce,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Shopify",
    icon: shopify,
    width: 44,
    height: 34,
  },
  {
    id: "5",
    title: "Merado",
    icon: mercadoLivre,
    width: 44,
    height: 34,
  },
  {
    id: "6",
    title: "Bling",
    icon: bling,
    width: 46,
    height: 34,
  },
  {
    id: "7",
    title: "AnyMarket",
    icon: any,
    width: 38,
    height: 32,
  },
];


export const benefits = [
  {
    id: "0",
    title: "Agronegócio",
    text: "impulsione a eficiência e a produtividade no agronegócio, integrando processos, otimizando operações e fornecendo insights valiosos para uma gestão sustentável e lucrativa.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Distribuição e Logística",
    text: "Explore como o SAP Business One otimiza a distribuição e logística, oferecendo soluções integradas que aumentam a eficiência operacional, reduzem custos e proporcionam visibilidade em tempo real para uma cadeia de suprimentos ágil e responsiva.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Energia",
    text: "Transforme sua empresa de energia com o SAP Business One, aproveitando soluções avançadas para melhorar a eficiência, gerenciar recursos de forma inteligente e impulsionar o crescimento em um setor em constante evolução.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Indústrias e Manufatura",
    text: "Otimize sua produção e operações industriais com o SAP Business One. Integre processos, melhore a eficiência e impulsione o crescimento em sua indústria ou manufatura.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Prestação de Serviços",
    text: "Potencialize a qualidade dos serviços da sua empresa com o SAP Business One. Simplifique a gestão, melhore a eficiência e entregue resultados superiores aos seus clientes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Varejo, E-commerce e Marketplace",
    text: "Alinhe e harmonize todos os procedimentos, desde a aquisição de produtos e gestão de estoque até as transações comerciais, logística, controle financeiro e experiência do cliente, garantindo uma operação eficiente e satisfatória em todos os aspectos do seu negócio.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
