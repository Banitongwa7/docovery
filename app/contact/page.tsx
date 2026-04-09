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
            <section className="relative min-h-[50vh] bg-slate-50 overflow-hidden pt-40 pb-20">
                {/* Synck Aesthetic Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
                        <FaRocket className="mr-2 h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-700 font-medium">Contactez-nous</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tighter">
                        Donnons Vie À{" "}
                        <span className="text-blue-600 block sm:inline">
                            Votre Projet.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Notre équipe est là pour vous accompagner dans votre transformation digitale.
                        Parlons ensemble de vos besoins et de vos objectifs.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 bg-white relative overflow-hidden">

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
                                    href: `mailto:${contactDocovery.email}`,
                                },
                                {
                                    icon: FaPhone,
                                    title: "Téléphone",
                                    content: contactDocovery.phone.label,
                                    subtext: "Lun - Ven, 9h - 18h",
                                    href: `tel:${contactDocovery.phone.value}`,
                                },
                                {
                                    icon: FaMapMarkerAlt,
                                    title: "Adresse",
                                    content: "Kinshasa, RD Congo",
                                    subtext: "",
                                },
                                {
                                    icon: FaClock,
                                    title: "Horaires",
                                    content: "Lun - Ven: 9h - 18h",
                                    subtext: "Sam et Dim: Fermé",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
                                >
                                    <div
                                        className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
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
                                        className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:-translate-y-0.5"
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
