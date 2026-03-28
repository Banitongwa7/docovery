"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { contactDocovery } from "@/utils/socialTeam";
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage("✅ " + data.message);
                setEmail("");
            } else {
                setMessage("❌ " + data.error);
            }
        } catch {
            setMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(""), 5000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0B0F19] text-white relative overflow-hidden border-t border-white/5">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Company Info - Spans 4 columns */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                                <Image
                                    src="/docovery_logo_white.svg"
                                    height={100}
                                    width={100}
                                    alt="logo"
                                    aria-hidden="true"
                                    className="h-10 w-10 sm:h-10 sm:w-10"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Building solutions, Shaping the future. Nous transformons vos idées les plus ambitieuses en réalité digitale performante et scalable.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {[
                                { icon: FaGithub, href: "https://github.com/Banitongwa7", label: "GitHub" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/david-banitongwa/", label: "LinkedIn" },
                                { icon: FaTwitter, href: "https://twitter.com/BanitongwaDavid", label: "Twitter" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - Spans 2 columns */}
                    <div className="lg:col-span-2 lg:pl-8">
                        <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { href: "/", label: "Accueil" },
                                { href: "/#services", label: "Services" },
                                { href: "/#about", label: "À Propos" },
                                { href: "/blog", label: "Blog" },
                                { href: "/contact", label: "Contact" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-medium"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Spans 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-4 group">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <FaEnvelope className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Email</p>
                                    <a href={`mailto:${contactDocovery.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                                        {contactDocovery.email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <FaPhone className="h-4 w-4 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Téléphone</p>
                                    <a href={`tel:${contactDocovery.phone.value}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                                        {contactDocovery.phone.label}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                                    <FaMapMarkerAlt className="h-4 w-4 text-pink-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Bureau</p>
                                    <span className="text-gray-300 text-sm">Kinshasa, RD Congo</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter - Spans 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Rejoignez notre communauté pour recevoir nos dernières actualités et conseils tech.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre adresse email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                            >
                                {isSubmitting ? "Inscription..." : "S'abonner"}
                            </button>
                        </form>
                        {message && (
                            <div className={`mt-3 p-3 rounded-lg text-xs font-medium ${message.startsWith("✅") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/5 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Docovery. Tous droits réservés.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                                Politique de Confidentialité
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
                                Conditions d&apos;Utilisation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 z-40 group ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                    }`}
                aria-label="Haut de page"
            >
                <FaArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
        </footer>
    );
}
