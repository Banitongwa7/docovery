import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  /** Anchor used on /services and in the footer. */
  slug: string;
  index: string;
  title: string;
  /** Short line reused on the homepage grid — preserved from the original site. */
  description: string;
  /** Longer positioning copy used on the services page. */
  detail: string;
  deliverables: string[];
  stack: string[];
  icon: LucideIcon;
  /** V2 photo (no people) — see public/media/CREDITS.md. */
  image: string;
};

export const services: Service[] = [
  {
    slug: "developpement-web",
    index: "01",
    title: "Développement Web",
    description:
      "Créez des applications web performantes, évolutives et sécurisées avec les dernières technologies.",
    detail:
      "Portails clients, back-offices métier et plateformes SaaS conçus pour tenir la charge. Nous travaillons en architecture typée de bout en bout, avec un rendu serveur pour la performance et un design system pour que vos équipes puissent construire dessus sans nous.",
    deliverables: [
      "Applications SaaS multi-tenant",
      "Portails clients & espaces sécurisés",
      "Design system et bibliothèque de composants",
      "API REST / GraphQL documentées",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    icon: Code2,
    image: "/media/v2/code-react.jpg",
  },
  {
    slug: "applications-mobiles",
    index: "02",
    title: "Applications Mobiles",
    description:
      "Développement d'applications natives et cross-platform pour iOS et Android.",
    detail:
      "Une base de code, deux stores, zéro compromis sur l'expérience. Nous couvrons le cycle complet : conception produit, développement, publication App Store et Play Store, puis suivi des versions et du crash-rate.",
    deliverables: [
      "Applications iOS & Android cross-platform",
      "Modules natifs sur mesure",
      "Mode hors-ligne et synchronisation",
      "Publication et gestion des releases",
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin"],
    icon: Smartphone,
    image: "/media/v2/iphone-maquette.jpg",
  },
  {
    slug: "solutions-cloud",
    index: "03",
    title: "Solutions Cloud",
    description:
      "Optimisez vos infrastructures avec des solutions cloud scalables et rentables.",
    detail:
      "Migration, conteneurisation et industrialisation du déploiement. L'objectif est simple : des mises en production sans stress, une facture cloud lisible et une infrastructure décrite dans le code plutôt que dans la tête d'une seule personne.",
    deliverables: [
      "Migration et modernisation d'infrastructure",
      "Pipelines CI/CD automatisés",
      "Infrastructure as Code",
      "Observabilité et maîtrise des coûts",
    ],
    stack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    icon: Cloud,
    image: "/media/v2/serveurs-voyants.jpg",
  },
  {
    slug: "bases-de-donnees",
    index: "04",
    title: "Bases de Données",
    description:
      "Conception et gestion de bases de données performantes pour vos applications critiques.",
    detail:
      "Modélisation, indexation et optimisation des requêtes pour les charges transactionnelles exigeantes. Nous intervenons aussi bien sur la conception initiale que sur le sauvetage de bases devenues lentes avec la croissance.",
    deliverables: [
      "Modélisation et normalisation",
      "Optimisation des requêtes et index",
      "Stratégie de sauvegarde et restauration",
      "Migration sans interruption de service",
    ],
    stack: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    icon: Database,
    image: "/media/v2/salle-serveurs.jpg",
  },
  {
    slug: "securite-conformite",
    index: "05",
    title: "Sécurité & Conformité",
    description:
      "Protégez vos actifs digitaux avec des solutions robustes et conformes.",
    detail:
      "Un secteur régulé impose des preuves, pas des intentions. Nous intégrons l'authentification forte, le chiffrement, la journalisation d'audit et la gestion des accès dès la conception, puis nous documentons le tout pour vos audits.",
    deliverables: [
      "Audit de sécurité applicative",
      "Authentification forte et MFA",
      "Chiffrement et journalisation d'audit",
      "Mise en conformité RGPD",
    ],
    stack: ["OAuth 2.0", "OpenID Connect", "OWASP", "RGPD"],
    icon: ShieldCheck,
    image: "/media/v2/code-sql.jpg",
  },
  {
    slug: "ia-machine-learning",
    index: "06",
    title: "IA & Machine Learning",
    description:
      "Tirez parti de l'IA pour automatiser et optimiser vos processus logiciels.",
    detail:
      "Nous commençons par les cas d'usage réellement rentables — scoring, extraction documentaire, détection d'anomalies, assistance client — puis nous les mettons en production avec des garde-fous et des métriques de qualité mesurables.",
    deliverables: [
      "Scoring et analyse prédictive",
      "Extraction documentaire automatisée",
      "Détection d'anomalies et de fraude",
      "Assistants conversationnels métier",
    ],
    stack: ["Python", "PyTorch", "LLM APIs", "Vector DB"],
    icon: Cpu,
    image: "/media/v2/vague-particules.jpg",
  },
  {
    slug: "formation-it",
    index: "07",
    title: "Formation IT",
    description:
      "Programmes de formation pour développer les compétences de vos équipes.",
    detail:
      "Un projet livré n'a de valeur que si vos équipes savent le faire vivre. Nos sessions se construisent sur votre propre code et vos propres cas, pas sur des exemples génériques.",
    deliverables: [
      "Programmes sur mesure par niveau",
      "Ateliers pratiques sur votre code",
      "Revue d'architecture accompagnée",
      "Documentation et transfert de compétences",
    ],
    stack: ["React", "TypeScript", "Cloud", "DevOps"],
    icon: GraduationCap,
    image: "/media/v2/bureau-macbook-clavier.jpg",
  },
  {
    slug: "maintenance",
    index: "08",
    title: "Maintenance",
    description:
      "Support technique et maintenance évolutive de vos systèmes critiques.",
    detail:
      "Supervision, correctifs de sécurité et évolutions continues sous engagement de délai. Vous gardez une équipe qui connaît déjà votre système, au lieu de repartir de zéro à chaque incident.",
    deliverables: [
      "Supervision et alerting 24/7",
      "Correctifs de sécurité continus",
      "Évolutions fonctionnelles planifiées",
      "Engagement de délai de réponse",
    ],
    stack: ["Monitoring", "Sentry", "Grafana", "On-call"],
    icon: Wrench,
    image: "/media/v2/datacenter-blanc.jpg",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

/* ------------------------------------------------------------------ */
/*  Engagement models (V2 — /services#modeles-engagement)              */
/* ------------------------------------------------------------------ */

export type EngagementModel = {
  moment: string;
  title: string;
  description: string;
  /**
   * Public price line. Kept on "Sur devis" until the team validates its
   * rates — replace with the real figure (cadrage, sprint, monthly fee).
   */
  price: string;
  unit: string;
  includes: string[];
  cta: string;
  /** Service pre-selected in the project dialog. */
  service?: string;
  featured?: boolean;
};

export const engagementModels: EngagementModel[] = [
  {
    moment: "Avant de vous engager",
    title: "Cadrage au forfait",
    description:
      "Pour clarifier le projet avant d'investir dans le développement.",
    price: "Sur devis",
    unit: "Forfait, 1 à 2 semaines",
    includes: [
      "Objectif métier et périmètre posés par écrit",
      "Contraintes réglementaires identifiées",
      "Critères de succès mesurables",
      "Estimation de charge pour la suite",
    ],
    cta: "Demander un cadrage",
  },
  {
    moment: "Pour construire",
    title: "Équipe dédiée",
    description:
      "Une équipe produit qui conçoit, développe et livre votre plateforme par itérations.",
    price: "Sur devis",
    unit: "Par sprint de 2 semaines",
    includes: [
      "Architecture et maquettes validées avant le code",
      "Démonstration à chaque fin de sprint",
      "Déploiement automatisé et revue de sécurité",
      "Documentation remise à vos équipes",
    ],
    cta: "Constituer mon équipe",
    featured: true,
  },
  {
    moment: "Après la mise en ligne",
    title: "Maintenance",
    description:
      "Supervision, correctifs et évolutions de votre système en production, avec l'équipe qui le connaît déjà.",
    price: "Sur devis",
    unit: "Abonnement mensuel, en continu",
    includes: [
      "Supervision et alerting 24/7",
      "Correctifs de sécurité continus",
      "Évolutions fonctionnelles planifiées",
      "Engagement de délai de réponse",
    ],
    cta: "Parler maintenance",
    service: "Maintenance & Support",
  },
];

export const engagementIncluded = [
  "Code revu, testé et documenté",
  "Livrables validés par écrit",
  "Réponse sous 24h ouvrées",
  "Équipe à Kinshasa, fuseau GMT+1",
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const servicesFaq: { question: string; answer: string }[] = [
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "Le cadrage prend 1 à 2 semaines et la conception 2 à 3 semaines. Le développement avance par sprints de deux semaines selon le périmètre, puis la mise en production prend environ une semaine.",
  },
  {
    question: "Travaillez-vous avec des clients hors de la RD Congo ?",
    answer:
      "Oui. Nous recevons sur rendez-vous à Kinshasa et travaillons à distance. Notre fuseau, GMT+1, recouvre les heures ouvrées européennes et africaines.",
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer:
      "Chaque projet inclut une période de garantie contractuelle. Nous assurons ensuite la supervision, les correctifs de sécurité et les évolutions planifiées.",
  },
  {
    question: "Comment démarrer ?",
    answer:
      "Décrivez votre projet en deux minutes ou réservez un appel de 30 minutes. Nous revenons vers vous sous 24h ouvrées avec une première lecture technique.",
  },
];
