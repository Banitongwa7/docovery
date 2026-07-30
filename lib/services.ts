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
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
