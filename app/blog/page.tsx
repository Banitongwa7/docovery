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
            <section className="relative min-h-[50vh] bg-slate-50 overflow-hidden pt-40 pb-20">
                {/* Synck Aesthetic Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
                        <FaRocket className="mr-2 h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-700 font-medium">Blog & Insights</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tighter">
                        Actualités &{" "}
                        <span className="text-blue-600 block sm:inline">
                            Innovations Tech.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
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
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-blue-600 shadow-sm transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[80px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500 font-medium">
                                Aucun article trouvé pour "{searchTerm}" dans la catégorie "{selectedCategory}".
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center text-gray-500 text-xs font-medium uppercase tracking-wider"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-100 mt-auto">
                                            <div className="flex items-center space-x-3">
                                                <span className="flex items-center">
                                                    <FaUser className="mr-1.5 h-3.5 w-3.5 text-blue-600" />
                                                    <span className="font-medium text-gray-900">{post.author.split(" ")[0]}</span>
                                                </span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span className="flex items-center">
                                                    <FaClock className="mr-1.5 h-3.5 w-3.5 text-gray-400" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/blog/${post.id}`}
                                                className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
                                            >
                                                Lire
                                                <FaArrowRight className="ml-1.5 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-24 relative bg-blue-600 overflow-hidden rounded-[2.5rem] p-12 lg:p-20 text-center text-white shadow-2xl group border border-blue-500">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[80px]" />
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <span className="text-blue-200 font-semibold tracking-wider text-sm uppercase mb-4 block">Let's talk</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                                Vous avez un Projet en Tête?
                            </h2>
                            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed">
                                Parlons-en! Notre équipe est prête à transformer vos idées en solutions digitales performantes et innovantes.
                            </p>
                            <Link
                                href="/contact"
                                className="group/btn relative inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Démarrer un Projet
                                <FaArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
