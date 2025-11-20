"use client";

import React, { useState } from "react";
import { FaRocket, FaTimes, FaCheck } from "react-icons/fa";

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    preSelectedService?: string;
}

const services = [
    "Développement Web sur mesure",
    "Application Mobile Native",
    "Solution Cloud",
    "Conseil en Architecture",
    "API & Intégrations",
    "Maintenance & Support",
    "Autre",
];

export default function DemoRequestModal({
    isOpen,
    onClose,
    preSelectedService = "",
}: DemoRequestModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: preSelectedService,
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");

        try {
            const response = await fetch("/api/demo-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setResponseMessage("✅ " + data.message);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    service: "",
                    message: "",
                });
                setTimeout(() => {
                    onClose();
                    setResponseMessage("");
                }, 3000);
            } else {
                setResponseMessage("❌ " + data.error);
            }
        } catch (error) {
            setResponseMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label="Close"
                >
                    <FaTimes className="h-5 w-5 text-gray-600" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-t-3xl text-white">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                            <FaRocket className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold">Demander une Démo</h2>
                    </div>
                    <p className="text-blue-100">
                        Découvrez comment nos solutions peuvent transformer votre entreprise
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="modal-name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="modal-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Jean Dupont"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="modal-email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="modal-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="jean.dupont@example.com"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label
                            htmlFor="modal-company"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Entreprise
                        </label>
                        <input
                            type="text"
                            id="modal-company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Nom de votre entreprise"
                        />
                    </div>

                    {/* Service */}
                    <div>
                        <label
                            htmlFor="modal-service"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Service souhaité <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="modal-service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        >
                            <option value="">Sélectionnez un service</option>
                            {services.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="modal-message"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="modal-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Parlez-nous de votre projet..."
                        />
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
                                <FaCheck className="mr-2 h-5 w-5" />
                                Demander une Démo
                            </>
                        )}
                    </button>
                </form>

                {responseMessage && (
                    <div className="px-8 pb-8">
                        <div
                            className={`p-4 rounded-xl ${responseMessage.startsWith("✅")
                                    ? "bg-green-50 text-green-700 border border-green-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                                }`}
                        >
                            {responseMessage}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
