"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaRocket,
    FaPaperPlane,
    FaUser,
    FaComment,
} from "react-icons/fa";
import { contactDocovery } from "@/utils/socialTeam";

export default function ContactPage() {
    const [sentData, setSentData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");


        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sentData),
            });

            const data = await response.json();


            if (data.success) {
                setResponseMessage("✅ " + data.message);
                setSentData({ name: "", email: "", phone: "", message: "" });
            } else {
                setResponseMessage("❌ " + data.error);
            }
        } catch {
            setResponseMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setResponseMessage(""), 5000);
        }
    };

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-32 pb-20">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6">
                        <FaRocket className="mr-2 h-4 w-4 text-blue-400" />
                        <span className="text-sm text-white/80 font-medium">Contactez-nous</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Donnons Vie À{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Votre Projet
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Notre équipe est là pour vous accompagner dans votre transformation digitale.
                        Parlons ensemble de vos besoins et de vos objectifs.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: FaEnvelope,
                                    title: "Email",
                                    content: contactDocovery.email,
                                    subtext: "Réponse sous 24h",
                                    color: "from-blue-500 to-cyan-500",
                                    href: `mailto:${contactDocovery.email}`,
                                },
                                {
                                    icon: FaPhone,
                                    title: "Téléphone",
                                    content: contactDocovery.phone.label,
                                    subtext: "Lun - Ven, 9h - 18h",
                                    color: "from-green-500 to-emerald-500",
                                    href: `tel:${contactDocovery.phone.value}`,
                                },
                                {
                                    icon: FaMapMarkerAlt,
                                    title: "Adresse",
                                    content: "Kinshasa, RD Congo",
                                    subtext: "",
                                    color: "from-purple-500 to-pink-500",
                                },
                                {
                                    icon: FaClock,
                                    title: "Horaires",
                                    content: "Lun - Ven: 9h - 18h",
                                    subtext: "Sam et Dim: Fermé",
                                    color: "from-orange-500 to-red-500",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                >
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <item.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium block mb-1"
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-700 font-medium mb-1">{item.content}</p>
                                    )}
                                    <p className="text-sm text-gray-500">{item.subtext}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                        Envoyez-nous un Message
                                    </h2>
                                    <p className="text-gray-600">
                                        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nom complet <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <FaUser className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={sentData.name}
                                                onChange={(e) => setSentData({ ...sentData, name: e.target.value })}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Jean Dupont"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <FaEnvelope className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={sentData.email}
                                                onChange={(e) => setSentData({ ...sentData, email: e.target.value })}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="jean.dupont@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Téléphone
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <FaPhone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={sentData.phone}
                                                onChange={(e) => setSentData({ ...sentData, phone: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="+243 123 456 789"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-4 pointer-events-none">
                                                <FaComment className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={sentData.message}
                                                onChange={(e) => setSentData({ ...sentData, message: e.target.value })}
                                                required
                                                rows={6}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Parlez-nous de votre projet..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            "Envoi en cours..."
                                        ) : (
                                            <>
                                                <FaPaperPlane className="mr-2 h-5 w-5" />
                                                Envoyer le Message
                                            </>
                                        )}
                                    </button>
                                </form>

                                {responseMessage && (
                                    <div
                                        className={`mt-6 p-4 rounded-xl ${responseMessage.startsWith("✅")
                                            ? "bg-green-50 text-green-700 border border-green-200"
                                            : "bg-red-50 text-red-700 border border-red-200"
                                            }`}
                                    >
                                        {responseMessage}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
