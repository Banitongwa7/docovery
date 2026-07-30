import {
  Lightbulb,
  Award,
  Handshake,
  Users,
  Globe,
  Headphones,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Metrics — carried over verbatim from the previous site             */
/* ------------------------------------------------------------------ */

export type Metric = {
  value: string;
  label: string;
  caption: string;
};

export const metrics: Metric[] = [
  {
    value: "5+",
    label: "Projets Livrés",
    caption: "Plateformes web, mobiles et cloud mises en production.",
  },
  {
    value: "98%",
    label: "Satisfaction Client",
    caption: "Mesurée à la clôture de chaque mission.",
  },
  {
    value: "4+",
    label: "Années d'Expérience",
    caption: "Sur des systèmes critiques et régulés.",
  },
  {
    value: "100%",
    label: "Qualité Garantie",
    caption: "Période de garantie contractuelle après livraison.",
  },
];

export const capabilities = [
  { icon: Globe, label: "Expertise Internationale" },
  { icon: Headphones, label: "Support 24/7" },
] satisfies { icon: LucideIcon; label: string }[];

/* ------------------------------------------------------------------ */
/*  Values                                                             */
/* ------------------------------------------------------------------ */

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description:
      "Repousser les limites avec une technologie de pointe, en gardant le pragmatisme d'une équipe qui livre.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Livrer de la qualité dans chaque projet : code revu, testé, documenté et transmissible.",
  },
  {
    icon: Handshake,
    title: "Partenariat Durable",
    description:
      "Construire des relations solides. La majorité de nos clients nous reconfient un second chantier.",
  },
  {
    icon: Users,
    title: "Équipe Passionnée",
    description:
      "Des experts dévoués à votre réussite, impliqués sur votre métier autant que sur votre stack.",
  },
];

/* ------------------------------------------------------------------ */
/*  Process — "Notre processus, clair et transparent."                 */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Cadrage",
    description:
      "Nous partons de votre objectif métier, pas d'une liste de fonctionnalités. Périmètre, contraintes réglementaires et critères de succès sont posés par écrit.",
    duration: "1 à 2 semaines",
  },
  {
    index: "02",
    title: "Conception",
    description:
      "Architecture technique, modèle de données et parcours utilisateurs. Vous validez des maquettes cliquables avant la première ligne de code.",
    duration: "2 à 3 semaines",
  },
  {
    index: "03",
    title: "Développement",
    description:
      "Itérations courtes avec démonstration à chaque fin de cycle. Vous voyez le produit avancer en continu, sans effet tunnel.",
    duration: "Sprints de 2 semaines",
  },
  {
    index: "04",
    title: "Mise en production",
    description:
      "Déploiement automatisé, tests de charge, revue de sécurité et documentation d'exploitation remise à vos équipes.",
    duration: "1 semaine",
  },
  {
    index: "05",
    title: "Accompagnement",
    description:
      "Garantie contractuelle, supervision et évolutions planifiées. Vous gardez l'équipe qui connaît déjà votre système.",
    duration: "En continu",
  },
];

/* ------------------------------------------------------------------ */
/*  Team                                                               */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  name: string;
  position: string;
  bio: string;
  photo: string;
  social: { label: "LinkedIn" | "GitHub" | "X"; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "Omari Kayumba",
    position: "CEO & Co-Founder",
    bio: "Visionnaire technologique passionné par l'innovation et le développement de solutions digitales transformantes.",
    photo: "/omari.jpg",
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/omari-kayumba-2973a420b/",
      },
      { label: "GitHub", href: "https://github.com/Rimao416" },
      { label: "X", href: "https://twitter.com/rimao416" },
    ],
  },
  {
    name: "David Banitongwa",
    position: "CTO & Co-Founder",
    bio: "Expert en développement fullstack avec une passion pour l'architecture cloud et les technologies émergentes.",
    photo: "/david.png",
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/david-banitongwa/",
      },
      { label: "GitHub", href: "https://github.com/Banitongwa7" },
      { label: "X", href: "https://twitter.com/BanitongwaDavid" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials — preserved verbatim                                  */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  name: string;
  position: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marie Kabongo",
    position: "CEO, TechStart",
    rating: 5,
    text: "Docovery a transformé notre vision en une application mobile exceptionnelle. Leur expertise et leur professionnalisme sont sans pareil.",
  },
  {
    name: "Jean Mukendi",
    position: "CTO, FinanceApp",
    rating: 5,
    text: "Une équipe réactive et compétente qui a su comprendre nos besoins et livrer une solution dépassant nos attentes.",
  },
  {
    name: "Sarah Nzuzi",
    position: "Founder, EduTech",
    rating: 5,
    text: "Grâce à Docovery, nous avons pu lancer notre plateforme en un temps record avec une qualité irréprochable.",
  },
];

/** Returns "MK" for "Marie Kabongo" — used by the monogram avatars. */
export const initialsOf = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
