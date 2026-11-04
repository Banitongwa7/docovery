/**
 * Single source of truth for company-wide facts.
 * Every value here is carried over from the previous version of the site.
 */

export const siteConfig = {
  name: "Docovery",
  tagline: "Développement web, mobile et cloud à Kinshasa",
  motto: "Construire des solutions, façonner l'avenir",
  description:
    "Applications web et mobiles, cloud et IA sur mesure pour startups fintech, éditeurs SaaS et institutions financières. Studio logiciel basé à Kinshasa, RD Congo.",
  url: "https://www.docovery.net",
  locale: "fr_FR",
  author: "David BANITONGWA",
} as const;

export const contact = {
  email: "contact@docovery.net",
  phone: {
    label: "+243 81 072 6861",
    value: "+243810726861",
  },
  office: {
    city: "Kinshasa",
    country: "RD Congo",
    label: "Kinshasa, RD Congo",
    full: "Kinshasa, République Démocratique du Congo",
    timezone: "GMT+1 (Afrique centrale)",
  },
  hours: {
    weekdays: "Lun – Ven : 9h – 18h",
    weekend: "Sam & Dim : fermé",
    responseTime: "Réponse sous 24h",
  },
} as const;

export const links = {
  meeting:
    "https://outlook.office.com/book/RendezvousaveclquipeDocovery@docovery.net/s/uZU__XDEa0qnbcmwokDrZg2?ismsaljsauthenabled",
} as const;

export type SocialLink = {
  label: string;
  href: string;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Banitongwa7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-banitongwa/" },
  { label: "X", href: "https://twitter.com/BanitongwaDavid" },
];

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Réalisations" },
  { href: "/about", label: "À Propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Entreprise",
    items: [
      { href: "/about", label: "À Propos" },
      { href: "/case-studies", label: "Réalisations" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Expertise",
    items: [
      { href: "/services#developpement-web", label: "Développement Web" },
      { href: "/services#applications-mobiles", label: "Applications Mobiles" },
      { href: "/services#solutions-cloud", label: "Solutions Cloud" },
      { href: "/services#ia-machine-learning", label: "IA & Machine Learning" },
      { href: "/services#securite-conformite", label: "Sécurité & Conformité" },
    ],
  },
  {
    title: "Légal",
    items: [
      { href: "/privacy-policy", label: "Politique de Confidentialité" },
      { href: "/terms-of-service", label: "Conditions d'Utilisation" },
    ],
  },
];

/** Audiences the agency is positioned for. */
export const audiences = [
  "Startups fintech",
  "Plateformes SaaS",
  "Entreprises en transformation digitale",
  "Institutions financières",
] as const;

export type FooterCta = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Closing call-to-action rendered inside the green footer band (V2).
 * Matched by longest route prefix; `null` keeps the footer compact
 * (pages that already are a form or a legal document).
 */
export const footerCtas: { prefix: string; cta: FooterCta | null }[] = [
  {
    prefix: "/services",
    cta: {
      eyebrow: "Un besoin précis ?",
      title: "Décrivez-nous votre contexte.",
      description:
        "Nous revenons vers vous sous 24h ouvrées avec une première lecture technique de votre projet et une estimation de charge.",
    },
  },
  {
    prefix: "/case-studies/",
    cta: {
      eyebrow: "Projet similaire ?",
      title: "Discutons de votre contexte.",
      description:
        "Nous commençons toujours par comprendre votre métier avant de proposer une architecture.",
    },
  },
  {
    prefix: "/case-studies",
    cta: {
      eyebrow: "Votre projet",
      title: "Le prochain dossier peut être le vôtre.",
      description:
        "Décrivez-nous votre contexte : nous vous dirons honnêtement si nous sommes la bonne équipe pour le construire.",
    },
  },
  {
    prefix: "/about",
    cta: {
      eyebrow: "Travaillons ensemble",
      title: "Envie d'en savoir plus sur notre façon de travailler ?",
      description:
        "Prenez rendez-vous : nous vous montrerons concrètement comment nous cadrons un projet avant d'écrire la première ligne de code.",
    },
  },
  {
    prefix: "/blog",
    cta: {
      eyebrow: "Parlons-en",
      title: "Vous avez un projet en tête ?",
      description:
        "Notre équipe est prête à transformer vos idées en solutions digitales performantes et innovantes.",
    },
  },
  { prefix: "/contact", cta: null },
  { prefix: "/privacy-policy", cta: null },
  { prefix: "/terms-of-service", cta: null },
  {
    prefix: "/",
    cta: {
      eyebrow: "Passons à l'action",
      title: "Prêt à transformer votre entreprise ?",
      description:
        "Rejoignez les entreprises qui nous font confiance pour leurs projets digitaux. Commençons ensemble votre transformation digitale dès aujourd'hui.",
    },
  },
];
