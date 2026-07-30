/**
 * Single source of truth for company-wide facts.
 * Every value here is carried over from the previous version of the site.
 */

export const siteConfig = {
  name: "Docovery",
  tagline: "Solutions Digitales Sur Mesure — Développement Web & Mobile",
  motto: "Construire des solutions, façonner l'avenir",
  description:
    "Docovery transforme vos idées en solutions digitales performantes. Développement web, applications mobiles, solutions cloud et IA à Kinshasa, RD Congo.",
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
