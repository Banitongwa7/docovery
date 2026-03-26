"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaLock, FaUserShield, FaCookie } from "react-icons/fa";
import { contactDocovery } from "@/utils/socialTeam";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[30vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6">
                        <FaShieldAlt className="mr-2 h-4 w-4 text-blue-400" />
                        <span className="text-sm text-white/80 font-medium">Confidentialité</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Politique de Confidentialité
                    </h1>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none mb-12">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Chez Docovery, nous accordons une grande importance à la protection de vos données personnelles.
                            Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons
                            vos informations lorsque vous utilisez nos services.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaUserShield className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">1. Informations Collectées</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>Nous collectons les types d&apos;informations suivants:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Informations d&apos;identification:</strong> nom, adresse email, numéro de téléphone</li>
                                    <li><strong>Informations professionnelles:</strong> entreprise, poste, secteur d&apos;activité</li>
                                    <li><strong>Données de navigation:</strong> adresse IP, type de navigateur, pages visitées</li>
                                    <li><strong>Communications:</strong> messages envoyés via nos formulaires de contact</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaLock className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">2. Utilisation des Données</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>Nous utilisons vos données pour:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Répondre à vos demandes de contact et de devis</li>
                                    <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                                    <li>Améliorer nos services et votre expérience utilisateur</li>
                                    <li>Analyser l&apos;utilisation de notre site web</li>
                                    <li>Respecter nos obligations légales</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaCookie className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">3. Cookies et Technologies Similaires</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>Nous utilisons des cookies pour:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Mémoriser vos préférences</li>
                                    <li>Analyser le trafic du site</li>
                                    <li>Améliorer la performance du site</li>
                                </ul>
                                <p>Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités.</p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-l-4 border-blue-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partage des Données</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Nos prestataires de services (hébergement, analytics)</li>
                                    <li>Les autorités légales si requis par la loi</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-l-4 border-green-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sécurité des Données</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées
                                    pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-l-4 border-purple-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos Droits</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Conformément au RGPD et aux lois locales, vous avez le droit de:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Accéder à vos données personnelles</li>
                                    <li>Rectifier vos données</li>
                                    <li>Supprimer vos données</li>
                                    <li>Vous opposer au traitement</li>
                                    <li>Retirer votre consentement</li>
                                    <li>Demander la portabilité de vos données</li>
                                </ul>
                                <p className="mt-4">
                                    Pour exercer vos droits, contactez-nous à: <a href={`mailto:${contactDocovery.email}`} className="text-blue-600 hover:underline">{contactDocovery.email}</a>
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-l-4 border-orange-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de Conservation</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Nous conservons vos données uniquement pendant la durée nécessaire aux finalités pour lesquelles
                                    elles ont été collectées, ou conformément aux obligations légales.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="border-l-4 border-red-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications de cette Politique</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                                    Les modifications seront publiées sur cette page avec une date de mise à jour.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Des Questions?</h3>
                        <p className="text-blue-100 mb-6">
                            Si vous avez des questions concernant notre politique de confidentialité, n&apos;hésitez pas à nous contacter.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                        >
                            Nous Contacter
                        </a>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    );
}
