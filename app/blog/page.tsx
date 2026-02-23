"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
    FaClock,
    FaUser,
    FaArrowRight,
    FaSearch,
    FaTag,
    FaRocket,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Les Tendances du Développement Web en 2025",
        excerpt: "Découvrez les technologies et les pratiques qui façonnent l'avenir du développement web.",
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
        author: "David BANITONGWA",
        date: "20 Octobre 2025",
        readTime: "5 min",
        category: "Mobile",
        image: "/working-girl.png",
        tags: ["Mobile", "UX", "Design"],
    },
];

const categories = ["Tous", "Développement Web", "Conseils Tech", "Intelligence Artificielle", "Sécurité", "Architecture", "Mobile"];

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-32 pb-20">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6">
                        <FaRocket className="mr-2 h-4 w-4 text-blue-400" />
                        <span className="text-sm text-white/80 font-medium">Blog & Insights</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Actualités &{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Innovations Tech
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Découvrez nos articles, conseils et analyses sur les dernières tendances
                        du développement digital et de l&apos;innovation technologique.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <FaSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Rechercher un article..."
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600">
                                Aucun article trouvé pour &quot;{searchTerm}&quot; dans la catégorie &quot;{selectedCategory}&quot;.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
                                                >
                                                    <FaTag className="mr-1 h-3 w-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-4">
                                                <span className="flex items-center">
                                                    <FaUser className="mr-1.5 h-3.5 w-3.5" />
                                                    {post.author.split(" ")[0]}
                                                </span>
                                                <span className="flex items-center">
                                                    <FaClock className="mr-1.5 h-3.5 w-3.5" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/blog/${post.id}`}
                                                className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                                            >
                                                Lire
                                                <FaArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Vous avez un Projet en Tête?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
