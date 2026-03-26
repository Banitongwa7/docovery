"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    FaClock,
    FaUser,
    FaArrowLeft,
    FaTag,
    FaCalendar,
    FaShareAlt,
    FaRocket,
} from "react-icons/fa";

// Same blog posts data — in production, this would come from a CMS/API
const blogPosts = [
    {
        id: 1,
        title: "Les Tendances du Développement Web en 2025",
        excerpt: "Découvrez les technologies et les pratiques qui façonnent l'avenir du développement web.",
        content: `Le développement web évolue rapidement, et 2025 apporte son lot de nouvelles tendances passionnantes. 
        
Des frameworks comme Next.js et Remix continuent de gagner en popularité, offrant des performances exceptionnelles grâce au rendu côté serveur (SSR) et à la génération de sites statiques (SSG).

L'intelligence artificielle s'intègre de plus en plus dans le flux de développement, avec des outils d'aide au codage, des tests automatisés et des optimisations de performance pilotées par l'IA.

Les Progressive Web Apps (PWA) continuent de combler le fossé entre les applications web et natives, offrant des expériences hors ligne et des notifications push.

Le WebAssembly (WASM) permet d'exécuter du code haute performance directement dans le navigateur, ouvrant de nouvelles possibilités pour les applications web complexes.

Enfin, l'accessibilité web n'est plus une option mais une obligation, avec des réglementations de plus en plus strictes et une prise de conscience croissante de l'importance d'un web inclusif.`,
        author: "David BANITONGWA",
        date: "15 Novembre 2025",
        readTime: "5 min",
        category: "Développement Web",
        image: "/office.png",
        tags: ["Web", "Tech", "Innovation"],
    },
    {
        id: 2,
        title: "Comment Choisir la Stack Technologique Idéale",
        excerpt: "Un guide complet pour vous aider à sélectionner les meilleures technologies pour votre projet.",
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
        readTime: "7 min",
        category: "Conseils Tech",
        image: "/working-girl.png",
        tags: ["Stack", "Guide", "Conseils"],
    },
    {
        id: 3,
        title: "L'Intelligence Artificielle au Service des Entreprises",
        excerpt: "Comment l'IA transforme les processus métiers et améliore la productivité.",
        content: `L'intelligence artificielle n'est plus une technologie futuriste — elle est déjà en train de transformer fondamentalement la façon dont les entreprises opèrent.

**Automatisation des processus** — L'IA permet d'automatiser des tâches répétitives, libérant ainsi les employés pour des activités à plus forte valeur ajoutée. Du traitement des factures à la gestion des emails, les possibilités sont infinies.

**Analyse prédictive** — Les algorithmes de machine learning peuvent analyser d'énormes volumes de données pour identifier des tendances et faire des prédictions précises, aidant les entreprises à prendre des décisions éclairées.

**Service client intelligent** — Les chatbots et assistants virtuels alimentés par l'IA offrent un support client 24/7, améliorant la satisfaction client tout en réduisant les coûts.

**Personnalisation** — L'IA permet de personnaliser l'expérience utilisateur à grande échelle, que ce soit dans le e-commerce, le marketing ou la formation.

Chez Docovery, nous aidons les entreprises à intégrer l'IA dans leurs processus de manière pragmatique et efficace, en commençant par les cas d'usage les plus impactants.`,
        author: "David BANITONGWA",
        date: "5 Novembre 2025",
        readTime: "6 min",
        category: "Intelligence Artificielle",
        image: "/test.png",
        tags: ["IA", "Entreprise", "Innovation"],
    },
    {
        id: 4,
        title: "Sécurité Web: Les Meilleures Pratiques en 2025",
        excerpt: "Protégez vos applications web contre les menaces avec ces stratégies essentielles.",
        content: `La sécurité web est plus critique que jamais. Avec l'augmentation des cyberattaques, chaque entreprise doit adopter une approche proactive de la sécurité.

**HTTPS partout** — Assurez-vous que toutes vos pages utilisent HTTPS. C'est non seulement essentiel pour la sécurité, mais aussi pour le SEO.

**Validation des entrées** — Ne faites jamais confiance aux données utilisateur. Validez et assainissez toutes les entrées côté serveur.

**Authentification robuste** — Implémentez l'authentification multi-facteur (MFA) et utilisez des standards comme OAuth 2.0 et OpenID Connect.

**Protection contre les attaques courantes** — SQL injection, XSS, CSRF : connaissez les attaques les plus courantes et mettez en place les protections appropriées.

**Mises à jour régulières** — Gardez vos dépendances à jour pour bénéficier des derniers correctifs de sécurité.

**Monitoring et alertes** — Mettez en place une surveillance continue de vos applications pour détecter rapidement toute activité suspecte.`,
        author: "David BANITONGWA",
        date: "1 Novembre 2025",
        readTime: "8 min",
        category: "Sécurité",
        image: "/newsletter.png",
        tags: ["Sécurité", "Web", "Best Practices"],
    },
    {
        id: 5,
        title: "Architecture Microservices: Guide Pratique",
        excerpt: "Apprenez à concevoir et implémenter une architecture microservices scalable.",
        content: `L'architecture microservices est devenue la norme pour les applications à grande échelle. Mais la transition d'un monolithe vers des microservices nécessite une planification minutieuse.

**Quand adopter les microservices ?** — Les microservices sont idéaux pour les applications complexes avec plusieurs équipes de développement. Pour les petits projets, un monolithe bien structuré peut être plus approprié.

**Principes fondamentaux** — Chaque microservice doit être autonome, avoir sa propre base de données, et communiquer via des APIs bien définies.

**Communication inter-services** — Utilisez des patterns comme REST, gRPC, ou la messagerie asynchrone (RabbitMQ, Kafka) selon vos besoins.

**Orchestration et déploiement** — Kubernetes et Docker sont vos alliés pour gérer le déploiement et la scalabilité de vos microservices.

**Observabilité** — Le monitoring, le logging distribué et le tracing sont essentiels pour comprendre le comportement de votre système.`,
        author: "David BANITONGWA",
        date: "28 Octobre 2025",
        readTime: "10 min",
        category: "Architecture",
        image: "/office.png",
        tags: ["Microservices", "Architecture", "Backend"],
    },
    {
        id: 6,
        title: "Mobile-First: Concevoir pour les Appareils Mobiles",
        excerpt: "Pourquoi et comment adopter une approche mobile-first dans vos projets.",
        content: `Avec plus de 60% du trafic web provenant des appareils mobiles, l'approche mobile-first n'est plus une option — c'est une nécessité.

**Qu'est-ce que le mobile-first ?** — C'est une approche de conception qui consiste à concevoir d'abord pour les petits écrans, puis à adapter progressivement pour les écrans plus grands.

**Les avantages** — Meilleure performance, expérience utilisateur optimisée, et un meilleur référencement (Google privilégie les sites mobile-friendly).

**Bonnes pratiques** — Utilisez des grilles flexibles, des images responsives, et des breakpoints bien pensés. Priorisez le contenu essentiel et éliminez les éléments superflus sur mobile.

**Tests** — Testez sur de vrais appareils, pas seulement sur des émulateurs. Utilisez des outils comme Lighthouse pour mesurer les performances mobiles.

**PWA** — Les Progressive Web Apps offrent le meilleur des deux mondes : la portée du web et l'expérience d'une application native.`,
        author: "David BANITONGWA",
        date: "20 Octobre 2025",
        readTime: "5 min",
        category: "Mobile",
        image: "/working-girl.png",
        tags: ["Mobile", "UX", "Design"],
    },
];

export default function BlogPostPage() {
    const params = useParams();
    const postId = Number(params.id);
    const post = blogPosts.find((p) => p.id === postId);

    if (!post) {
        return (
            <>
                <Navigation />
                <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-32 pb-20">
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold text-white mb-6">Article non trouvé</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            L&apos;article que vous recherchez n&apos;existe pas ou a été déplacé.
                        </p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                        >
                            <FaArrowLeft className="mr-2 h-5 w-5" />
                            Retour au Blog
                        </Link>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
                    >
                        <FaArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au Blog
                    </Link>

                    <div className="mb-6">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-300">
                        <span className="flex items-center">
                            <FaUser className="mr-2 h-4 w-4" />
                            {post.author}
                        </span>
                        <span className="flex items-center">
                            <FaCalendar className="mr-2 h-4 w-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center">
                            <FaClock className="mr-2 h-4 w-4" />
                            {post.readTime} de lecture
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl -mt-20">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none mb-12">
                        {post.content.split("\n\n").map((paragraph, index) => {
                            if (paragraph.startsWith("**") && paragraph.includes("**")) {
                                const parts = paragraph.split("**");
                                return (
                                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                        {parts.map((part, i) =>
                                            i % 2 === 1 ? (
                                                <strong key={i} className="text-gray-900">{part}</strong>
                                            ) : (
                                                <span key={i}>{part}</span>
                                            )
                                        )}
                                    </p>
                                );
                            }
                            return (
                                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                    {paragraph.trim()}
                                </p>
                            );
                        })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-gray-200">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <FaTag className="mr-2 h-3 w-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Section */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center text-gray-600">
                            <FaShareAlt className="mr-2 h-5 w-5" />
                            <span className="font-medium">Partager cet article</span>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Vous avez un Projet en Tête?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Parlons-en! Notre équipe est prête à transformer vos idées en solutions digitales performantes.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <FaRocket className="mr-2 h-5 w-5" />
                            Démarrer un Projet
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
