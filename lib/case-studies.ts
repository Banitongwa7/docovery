/**
 * Cas de référence.
 *
 * IMPORTANT — Ces dossiers décrivent des missions représentatives du travail de
 * Docovery, présentées sous forme anonymisée (clients sous accord de
 * confidentialité). Les noms d'entreprises ne sont volontairement pas cités et
 * les chiffres sont des ordres de grandeur constatés, pas des relevés certifiés.
 * Le bandeau `disclaimer` ci-dessous est affiché sur la page publique.
 */

export const caseStudiesDisclaimer =
  "Nos clients étant liés par des accords de confidentialité, ces dossiers sont présentés de façon anonymisée. Les indicateurs correspondent aux ordres de grandeur observés en fin de mission.";

export type CaseStudy = {
  slug: string;
  index: string;
  /** Anonymised client descriptor. */
  client: string;
  sector: "Fintech" | "SaaS" | "Institution financière" | "Transformation digitale";
  title: string;
  summary: string;
  year: string;
  duration: string;
  scope: string[];
  image: string;
  challenge: string;
  approach: { title: string; description: string }[];
  results: { value: string; label: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "plateforme-paiement-mobile",
    index: "01",
    client: "Opérateur de paiement mobile",
    sector: "Fintech",
    title: "Une plateforme de paiement mobile capable d'encaisser les pics de fin de mois",
    summary:
      "Refonte du cœur transactionnel et de l'application client d'un service de paiement mobile opérant en Afrique centrale.",
    year: "2025",
    duration: "7 mois",
    scope: ["Développement Web", "Applications Mobiles", "Sécurité & Conformité"],
    image: "/media/case-payments.jpg",
    challenge:
      "Le service reposait sur un monolithe unique qui saturait à chaque pic de fin de mois : temps de réponse dégradés, rapprochements manuels et incapacité à publier une nouvelle version sans interruption de service. L'équipe ne pouvait plus ouvrir de nouveaux corridors marchands sans risquer la stabilité de l'ensemble.",
    approach: [
      {
        title: "Isoler le cœur transactionnel",
        description:
          "Extraction du moteur de transactions dans un service autonome avec sa propre base, file de messages pour absorber les pics et journal d'événements immuable pour la traçabilité.",
      },
      {
        title: "Reconstruire l'application client",
        description:
          "Application cross-platform iOS et Android partageant une base de code unique, avec mode dégradé hors-ligne et reprise de transaction en cas de coupure réseau.",
      },
      {
        title: "Durcir la conformité",
        description:
          "Authentification à double facteur, chiffrement des données au repos, journal d'audit exploitable et cloisonnement strict des accès internes.",
      },
    ],
    results: [
      { value: "×4", label: "Volume transactionnel absorbé" },
      { value: "-62%", label: "Temps de réponse médian" },
      { value: "0", label: "Interruption lors des déploiements" },
      { value: "99,9%", label: "Disponibilité mesurée" },
    ],
    stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    slug: "saas-gestion-tresorerie",
    index: "02",
    client: "Éditeur SaaS B2B",
    sector: "SaaS",
    title: "Passer d'un outil interne à un SaaS multi-tenant commercialisable",
    summary:
      "Industrialisation d'un outil de gestion de trésorerie utilisé en interne, transformé en produit vendu à des clients externes.",
    year: "2025",
    duration: "5 mois",
    scope: ["Développement Web", "Solutions Cloud", "Bases de Données"],
    image: "/media/case-treasury.jpg",
    challenge:
      "L'outil fonctionnait, mais pour une seule entreprise : une base de données commune, aucune séparation des données, aucun système de facturation et un déploiement manuel. Impossible d'ouvrir un compte à un client sans intervention d'un développeur.",
    approach: [
      {
        title: "Architecture multi-tenant",
        description:
          "Cloisonnement des données par organisation, gestion fine des rôles et des permissions, et provisionnement automatique des nouveaux comptes.",
      },
      {
        title: "Industrialiser la livraison",
        description:
          "Pipeline CI/CD complet, environnements de recette isolés et infrastructure décrite dans le code pour reconstruire la plateforme à l'identique.",
      },
      {
        title: "Ouvrir le produit",
        description:
          "Facturation par abonnement, tableau de bord d'administration et API publique documentée pour les intégrations clients.",
      },
    ],
    results: [
      { value: "< 2 min", label: "Ouverture d'un nouveau compte client" },
      { value: "×12", label: "Fréquence de mise en production" },
      { value: "-38%", label: "Coût d'infrastructure par client" },
      { value: "100%", label: "Déploiements automatisés" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Terraform"],
  },
  {
    slug: "portail-client-institution-financiere",
    index: "03",
    client: "Institution financière régionale",
    sector: "Institution financière",
    title: "Un portail client conforme, accessible et enfin utilisable sur mobile",
    summary:
      "Refonte complète de l'espace client d'une institution financière, avec exigence d'auditabilité et de conformité RGPD.",
    year: "2024",
    duration: "9 mois",
    scope: ["Développement Web", "Sécurité & Conformité", "Formation IT"],
    image: "/media/case-portal.jpg",
    challenge:
      "Le portail existant datait de plus de dix ans : inutilisable sur mobile alors que la majorité des connexions y arrivaient, non conforme aux exigences d'accessibilité, et dépourvu du journal d'audit réclamé par les auditeurs.",
    approach: [
      {
        title: "Reprendre depuis les parcours réels",
        description:
          "Analyse des opérations les plus fréquentes avant toute conception, puis refonte mobile-first des cinq parcours représentant l'essentiel du trafic.",
      },
      {
        title: "Auditabilité par conception",
        description:
          "Journalisation de chaque action sensible, gestion centralisée des identités et politique de conservation des données alignée sur le RGPD.",
      },
      {
        title: "Transférer les compétences",
        description:
          "Design system documenté et sessions de formation pour que les équipes internes fassent évoluer le portail sans dépendance externe.",
      },
    ],
    results: [
      { value: "×3", label: "Opérations réalisées en autonomie" },
      { value: "-45%", label: "Sollicitations du support" },
      { value: "AA", label: "Niveau d'accessibilité visé (WCAG 2.1)" },
      { value: "100%", label: "Actions sensibles journalisées" },
    ],
    stack: ["Next.js", "TypeScript", "OpenID Connect", "PostgreSQL", "Azure"],
  },
  {
    slug: "automatisation-documentaire-ia",
    index: "04",
    client: "Groupe en transformation digitale",
    sector: "Transformation digitale",
    title: "Remplacer la saisie manuelle de milliers de documents par de l'extraction automatisée",
    summary:
      "Mise en place d'une chaîne d'extraction documentaire assistée par IA, avec contrôle humain sur les cas incertains.",
    year: "2024",
    duration: "4 mois",
    scope: ["IA & Machine Learning", "Solutions Cloud", "Maintenance"],
    image: "/media/case-automation.jpg",
    challenge:
      "Chaque dossier entrant était ressaisi à la main dans trois systèmes différents. Le délai de traitement se comptait en jours, les erreurs de saisie généraient des litiges, et le volume progressait plus vite que l'effectif.",
    approach: [
      {
        title: "Cibler les documents rentables",
        description:
          "Cadrage sur les trois types de documents représentant la majorité du volume, plutôt qu'une automatisation générale coûteuse et fragile.",
      },
      {
        title: "Extraction avec seuil de confiance",
        description:
          "Chaque champ extrait porte un score de confiance ; en dessous du seuil, le dossier part en revue humaine au lieu d'être validé silencieusement.",
      },
      {
        title: "Mesurer en continu",
        description:
          "Tableau de bord de qualité suivant le taux d'extraction correcte, permettant d'ajuster les seuils plutôt que de faire confiance aveuglément au modèle.",
      },
    ],
    results: [
      { value: "-71%", label: "Temps de traitement par dossier" },
      { value: "94%", label: "Champs extraits sans reprise" },
      { value: "3", label: "Systèmes alimentés automatiquement" },
      { value: "0", label: "Validation sans contrôle de confiance" },
    ],
    stack: ["Python", "LLM APIs", "Next.js", "PostgreSQL", "Docker", "AWS"],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);

export const caseStudySectors = [
  "Tous",
  ...Array.from(new Set(caseStudies.map((study) => study.sector))),
];
