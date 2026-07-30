/**
 * Articles du blog.
 * Le contenu rédactionnel est repris intégralement de la version précédente du
 * site. `id` est conservé pour que les anciennes URL /blog/1 restent valides.
 */

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  /** ISO 8601, pour <time> et le tri. */
  datetime: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "tendances-developpement-web-2025",
    title: "Les Tendances du Développement Web en 2025",
    excerpt:
      "Découvrez les technologies et les pratiques qui façonnent l'avenir du développement web.",
    content: `Le développement web évolue rapidement, et 2025 apporte son lot de nouvelles tendances passionnantes.

Des frameworks comme Next.js et Remix continuent de gagner en popularité, offrant des performances exceptionnelles grâce au rendu côté serveur (SSR) et à la génération de sites statiques (SSG).

L'intelligence artificielle s'intègre de plus en plus dans le flux de développement, avec des outils d'aide au codage, des tests automatisés et des optimisations de performance pilotées par l'IA.

Les Progressive Web Apps (PWA) continuent de combler le fossé entre les applications web et natives, offrant des expériences hors ligne et des notifications push.

Le WebAssembly (WASM) permet d'exécuter du code haute performance directement dans le navigateur, ouvrant de nouvelles possibilités pour les applications web complexes.

Enfin, l'accessibilité web n'est plus une option mais une obligation, avec des réglementations de plus en plus strictes et une prise de conscience croissante de l'importance d'un web inclusif.`,
    author: "David BANITONGWA",
    date: "15 Novembre 2025",
    datetime: "2025-11-15",
    readTime: "5 min",
    category: "Développement Web",
    image: "/media/blog-web-trends.jpg",
    tags: ["Web", "Tech", "Innovation"],
  },
  {
    id: 2,
    slug: "choisir-stack-technologique",
    title: "Comment Choisir la Stack Technologique Idéale",
    excerpt:
      "Un guide complet pour vous aider à sélectionner les meilleures technologies pour votre projet.",
    content: `Le choix de la stack technologique est l'une des décisions les plus importantes dans tout projet de développement. Une mauvaise décision peut entraîner des coûts supplémentaires, des retards et des problèmes de maintenance à long terme.

Voici les facteurs clés à considérer :

**1. Les besoins du projet** — Analysez les exigences fonctionnelles et non-fonctionnelles. Une application e-commerce n'a pas les mêmes besoins qu'une plateforme de streaming vidéo.

**2. L'écosystème et la communauté** — Privilégiez les technologies avec une communauté active et un écosystème riche en bibliothèques et outils.

**3. La scalabilité** — Anticipez la croissance de votre application. Choisissez des technologies qui peuvent évoluer avec vos besoins.

**4. Les compétences de l'équipe** — Il est souvent plus efficace de travailler avec des technologies que votre équipe maîtrise déjà.

**5. Le time-to-market** — Certaines technologies permettent un développement plus rapide grâce à des outils et des conventions bien établis.

Chez Docovery, nous recommandons souvent des stacks modernes comme React/Next.js pour le frontend, Node.js ou Python pour le backend, et des solutions cloud comme AWS ou Azure pour l'infrastructure.`,
    author: "David BANITONGWA",
    date: "10 Novembre 2025",
    datetime: "2025-11-10",
    readTime: "7 min",
    category: "Conseils Tech",
    image: "/media/blog-stack.jpg",
    tags: ["Stack", "Guide", "Conseils"],
  },
  {
    id: 3,
    slug: "intelligence-artificielle-entreprises",
    title: "L'Intelligence Artificielle au Service des Entreprises",
    excerpt:
      "Comment l'IA transforme les processus métiers et améliore la productivité.",
    content: `L'intelligence artificielle n'est plus une technologie futuriste — elle est déjà en train de transformer fondamentalement la façon dont les entreprises opèrent.

**Automatisation des processus** — L'IA permet d'automatiser des tâches répétitives, libérant ainsi les employés pour des activités à plus forte valeur ajoutée. Du traitement des factures à la gestion des emails, les possibilités sont infinies.

**Analyse prédictive** — Les algorithmes de machine learning peuvent analyser d'énormes volumes de données pour identifier des tendances et faire des prédictions précises, aidant les entreprises à prendre des décisions éclairées.

**Service client intelligent** — Les chatbots et assistants virtuels alimentés par l'IA offrent un support client 24/7, améliorant la satisfaction client tout en réduisant les coûts.

**Personnalisation** — L'IA permet de personnaliser l'expérience utilisateur à grande échelle, que ce soit dans le e-commerce, le marketing ou la formation.

Chez Docovery, nous aidons les entreprises à intégrer l'IA dans leurs processus de manière pragmatique et efficace, en commençant par les cas d'usage les plus impactants.`,
    author: "David BANITONGWA",
    date: "5 Novembre 2025",
    datetime: "2025-11-05",
    readTime: "6 min",
    category: "Intelligence Artificielle",
    image: "/media/blog-ai.jpg",
    tags: ["IA", "Entreprise", "Innovation"],
  },
  {
    id: 4,
    slug: "securite-web-meilleures-pratiques",
    title: "Sécurité Web: Les Meilleures Pratiques en 2025",
    excerpt:
      "Protégez vos applications web contre les menaces avec ces stratégies essentielles.",
    content: `La sécurité web est plus critique que jamais. Avec l'augmentation des cyberattaques, chaque entreprise doit adopter une approche proactive de la sécurité.

**HTTPS partout** — Assurez-vous que toutes vos pages utilisent HTTPS. C'est non seulement essentiel pour la sécurité, mais aussi pour le SEO.

**Validation des entrées** — Ne faites jamais confiance aux données utilisateur. Validez et assainissez toutes les entrées côté serveur.

**Authentification robuste** — Implémentez l'authentification multi-facteur (MFA) et utilisez des standards comme OAuth 2.0 et OpenID Connect.

**Protection contre les attaques courantes** — SQL injection, XSS, CSRF : connaissez les attaques les plus courantes et mettez en place les protections appropriées.

**Mises à jour régulières** — Gardez vos dépendances à jour pour bénéficier des derniers correctifs de sécurité.

**Monitoring et alertes** — Mettez en place une surveillance continue de vos applications pour détecter rapidement toute activité suspecte.`,
    author: "David BANITONGWA",
    date: "1 Novembre 2025",
    datetime: "2025-11-01",
    readTime: "8 min",
    category: "Sécurité",
    image: "/media/blog-security.jpg",
    tags: ["Sécurité", "Web", "Best Practices"],
  },
  {
    id: 5,
    slug: "architecture-microservices-guide",
    title: "Architecture Microservices: Guide Pratique",
    excerpt:
      "Apprenez à concevoir et implémenter une architecture microservices scalable.",
    content: `L'architecture microservices est devenue la norme pour les applications à grande échelle. Mais la transition d'un monolithe vers des microservices nécessite une planification minutieuse.

**Quand adopter les microservices ?** — Les microservices sont idéaux pour les applications complexes avec plusieurs équipes de développement. Pour les petits projets, un monolithe bien structuré peut être plus approprié.

**Principes fondamentaux** — Chaque microservice doit être autonome, avoir sa propre base de données, et communiquer via des APIs bien définies.

**Communication inter-services** — Utilisez des patterns comme REST, gRPC, ou la messagerie asynchrone (RabbitMQ, Kafka) selon vos besoins.

**Orchestration et déploiement** — Kubernetes et Docker sont vos alliés pour gérer le déploiement et la scalabilité de vos microservices.

**Observabilité** — Le monitoring, le logging distribué et le tracing sont essentiels pour comprendre le comportement de votre système.`,
    author: "David BANITONGWA",
    date: "28 Octobre 2025",
    datetime: "2025-10-28",
    readTime: "10 min",
    category: "Architecture",
    image: "/media/blog-microservices.jpg",
    tags: ["Microservices", "Architecture", "Backend"],
  },
  {
    id: 6,
    slug: "mobile-first-conception",
    title: "Mobile-First: Concevoir pour les Appareils Mobiles",
    excerpt:
      "Pourquoi et comment adopter une approche mobile-first dans vos projets.",
    content: `Avec plus de 60% du trafic web provenant des appareils mobiles, l'approche mobile-first n'est plus une option — c'est une nécessité.

**Qu'est-ce que le mobile-first ?** — C'est une approche de conception qui consiste à concevoir d'abord pour les petits écrans, puis à adapter progressivement pour les écrans plus grands.

**Les avantages** — Meilleure performance, expérience utilisateur optimisée, et un meilleur référencement (Google privilégie les sites mobile-friendly).

**Bonnes pratiques** — Utilisez des grilles flexibles, des images responsives, et des breakpoints bien pensés. Priorisez le contenu essentiel et éliminez les éléments superflus sur mobile.

**Tests** — Testez sur de vrais appareils, pas seulement sur des émulateurs. Utilisez des outils comme Lighthouse pour mesurer les performances mobiles.

**PWA** — Les Progressive Web Apps offrent le meilleur des deux mondes : la portée du web et l'expérience d'une application native.`,
    author: "David BANITONGWA",
    date: "20 Octobre 2025",
    datetime: "2025-10-20",
    readTime: "5 min",
    category: "Mobile",
    image: "/media/blog-mobile.jpg",
    tags: ["Mobile", "UX", "Design"],
  },
];

export const postCategories = [
  "Tous",
  ...Array.from(new Set(posts.map((post) => post.category))),
];

/** Résout un article par son slug, ou par son ancien identifiant numérique. */
export const getPost = (param: string): Post | undefined => {
  const bySlug = posts.find((post) => post.slug === param);
  if (bySlug) return bySlug;

  const id = Number(param);
  return Number.isInteger(id) ? posts.find((post) => post.id === id) : undefined;
};

export const getRelatedPosts = (post: Post, limit = 3) =>
  posts
    .filter((item) => item.id !== post.id)
    .sort((a, b) => {
      const score = (candidate: Post) =>
        (candidate.category === post.category ? 2 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, limit);
