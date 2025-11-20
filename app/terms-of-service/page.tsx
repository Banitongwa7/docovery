"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaFileContract, FaCheckCircle, FaBan, FaExclamationTriangle } from "react-icons/fa";

export default function TermsOfServicePage() {
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
                        <FaFileContract className="mr-2 h-4 w-4 text-blue-400" />
                        <span className="text-sm text-white/80 font-medium">Conditions Légales</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Conditions d'Utilisation
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
                            Bienvenue sur le site web de Docovery. En accédant et en utilisant ce site, vous acceptez d'être lié
                            par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas
                            utiliser ce site.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaCheckCircle className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">1. Acceptation des Conditions</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>
                                    En utilisant nos services, vous reconnaissez avoir lu, compris et accepté d'être lié par ces
                                    conditions d'utilisation ainsi que par notre politique de confidentialité.
                                </p>
                                <p>
                                    Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications
                                    entreront en vigueur immédiatement après leur publication sur le site.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-l-4 border-blue-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description des Services</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Docovery fournit les services suivants:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Développement d'applications web et mobiles sur mesure</li>
                                    <li>Conseil en architecture logicielle</li>
                                    <li>Intégration de solutions cloud</li>
                                    <li>Services de maintenance et support technique</li>
                                    <li>Formation et accompagnement</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-l-4 border-green-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Obligations de l'Utilisateur</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>En utilisant nos services, vous vous engagez à:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Fournir des informations exactes et à jour</li>
                                    <li>Maintenir la confidentialité de vos identifiants de connexion</li>
                                    <li>Utiliser les services de manière légale et éthique</li>
                                    <li>Ne pas tenter d'accéder de manière non autorisée à nos systèmes</li>
                                    <li>Respecter les droits de propriété intellectuelle</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaBan className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">4. Utilisations Interdites</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>Vous vous engagez à ne pas:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Violer les lois ou réglementations applicables</li>
                                    <li>Transmettre du contenu illégal, nuisible ou offensant</li>
                                    <li>Utiliser nos services pour du spam ou du phishing</li>
                                    <li>Tenter de décompiler ou de reverse-engineer nos applications</li>
                                    <li>Interférer avec le fonctionnement de nos services</li>
                                    <li>Collecter des informations sur d'autres utilisateurs sans consentement</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-l-4 border-purple-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété Intellectuelle</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Tous les contenus présents sur ce site (textes, images, logos, code source, etc.) sont la
                                    propriété exclusive de Docovery ou de ses partenaires et sont protégés par les lois sur la
                                    propriété intellectuelle.
                                </p>
                                <p>
                                    Toute reproduction, distribution ou utilisation non autorisée de ces contenus est strictement interdite.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-l-4 border-yellow-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tarification et Paiement</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Les prix de nos services sont indiqués en devise locale et sont sujets à modification sans préavis.
                                    Les devis sont valables pour une durée limitée spécifiée.
                                </p>
                                <p>Les modalités de paiement seront définies dans les contrats individuels:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Paiement par virement bancaire</li>
                                    <li>Modalités d'acompte et de paiement final selon le projet</li>
                                    <li>Facturation selon le calendrier convenu</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                    <FaExclamationTriangle className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">7. Limitation de Responsabilité</h2>
                            </div>
                            <div className="ml-16 space-y-4 text-gray-700">
                                <p>
                                    Docovery s'efforce de fournir des services de qualité mais ne peut garantir:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Un fonctionnement ininterrompu des services</li>
                                    <li>L'absence totale d'erreurs ou de bugs</li>
                                    <li>L'exactitude complète des informations fournies</li>
                                </ul>
                                <p className="mt-4">
                                    En aucun cas, Docovery ne sera responsable des dommages indirects, consécutifs ou spéciaux
                                    résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="border-l-4 border-indigo-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Garanties</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Pour les projets de développement, nous offrons une période de garantie définie dans le contrat
                                    pour corriger les bugs et dysfonctionnements. Cette garantie ne couvre pas:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Les modifications demandées après livraison</li>
                                    <li>Les problèmes causés par des modifications tierces</li>
                                    <li>L'utilisation non conforme du logiciel</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div className="border-l-4 border-pink-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Résiliation</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Nous nous réservons le droit de suspendre ou de résilier votre accès à nos services
                                    en cas de violation de ces conditions d'utilisation.
                                </p>
                                <p>
                                    Les clients peuvent résilier leurs contrats de service selon les modalités définies
                                    dans les accords individuels.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div className="border-l-4 border-teal-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit Applicable et Juridiction</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Ces conditions d'utilisation sont régies par les lois de la République Démocratique du Congo.
                                    Tout litige sera soumis à la juridiction exclusive des tribunaux de Kinshasa.
                                </p>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div className="border-l-4 border-cyan-600 pl-6 py-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Email: <a href="mailto:legal@docovery.com" className="text-blue-600 hover:underline">legal@docovery.com</a></li>
                                    <li>Téléphone: +243 123 456 789</li>
                                    <li>Adresse: Kinshasa, RD Congo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Besoin de Clarifications?</h3>
                        <p className="text-blue-100 mb-6">
                            Notre équipe juridique est disponible pour répondre à toutes vos questions.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                        >
                            Nous Contacter
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
