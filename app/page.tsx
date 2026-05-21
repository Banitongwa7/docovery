"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";
import {
  LuCpu,
  LuTerminal,
  LuCloudUpload,
  LuShieldCheck,
  LuSmartphone,
  LuGraduationCap,
} from "react-icons/lu";
import {
  FaArrowRight,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaStar,
  FaQuoteLeft,
  FaRocket,
  FaHeadset,
  FaAward,
  FaHandshake,
  FaBriefcase,
  FaPlay,
  FaGlobe,
} from "react-icons/fa";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <Navigation />

      {/* Premium Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] bg-slate-50 overflow-hidden pt-32 lg:pt-40"
      >
        {/* Minimalist Background Element */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Text Content */}
            <div className="text-center lg:text-left">
              {/* Enhanced Animated Badge */}
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-gray-200 mb-8 shadow-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-2" />
                <span className="text-sm text-gray-700 font-medium">
                  Services IT & logiciels
                </span>
              </div>

              {/* Premium Main Heading */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold text-gray-900 mb-6 leading-[1.05] tracking-tighter">
                <span className="block">Transformez</span>
                <span className="block">Votre Vision</span>
                <span className="block">En <span className="text-blue-600">Réalité.</span></span>
              </h1>

              {/* Enhanced Description */}
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nous concevons des solutions digitales sur mesure qui transforment vos idées en applications performantes, propulsant votre entreprise vers l&apos;avenir.
              </p>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] flex items-center justify-center group"
                >
                  Démarrer un Projet
                  <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="px-8 py-4 rounded-full font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-center shadow-sm"
                >
                  Explorer les services
                </a>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative hidden md:block">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <div className="w-full relative aspect-video bg-gray-100 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/hero.jpg"
                      alt="Docovery Platform Dashboard"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      priority
                    />
                </div>
                
                {/* Floating stat card */}
                <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-4 animate-float-slow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">
                    <FaChartLine className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Innovation</p>
                    <p className="text-gray-500 text-sm">Garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière sombre "Notre méthode" */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111827] rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                <div className="relative z-10 lg:w-1/2">
                  <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">NOTRE MÉTHODE</span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8 tracking-tight leading-tight">
                    Notre processus, clair et transparent.
                  </h2>
                  <a href="#services" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
                    En savoir plus <FaArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                {/* Decorative Flowchart/Stats inside the dark block */}
                <div className="relative z-10 lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-4 lg:w-1/3">
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
                         <FaChartLine className="h-8 w-8 text-blue-400 mb-4" />
                         <div className="text-3xl font-bold text-white mb-1">98%</div>
                         <div className="text-gray-400 text-sm">Satisfaction Client</div>
                     </div>
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
                         <FaBriefcase className="h-8 w-8 text-purple-400 mb-4" />
                         <div className="text-3xl font-bold text-white mb-1">5+</div>
                         <div className="text-gray-400 text-sm">Projets Livrés</div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        id="services"
        className="py-24 bg-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
             <div>
                <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">SERVICES INFORMATIQUES</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 tracking-tight">
                  Nous proposons une gamme complète de services informatiques professionnels.
                </h2>
             </div>
             <p className="text-gray-500 max-w-sm mt-6 md:mt-0">
               Des solutions complètes adaptées aux exigences techniques et opérationnelles de votre entreprise.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <LuTerminal className="h-6 w-6 text-blue-600" />,
                title: "Développement Web",
                description: "Créez des applications web performantes, évolutives et sécurisées avec les dernières technologies.",
              },
              {
                icon: <LuSmartphone className="h-6 w-6 text-blue-600" />,
                title: "Applications Mobiles",
                description: "Développement d'applications natives et cross-platform pour iOS et Android.",
              },
              {
                icon: <LuCloudUpload className="h-6 w-6 text-blue-600" />,
                title: "Solutions Cloud",
                description: "Optimisez vos infrastructures avec des solutions cloud scalables et rentables.",
              },
              {
                icon: <FaDatabase className="h-6 w-6 text-blue-600" />,
                title: "Bases de Données",
                description: "Conception et gestion de bases de données performantes pour vos applications critiques.",
              },
              {
                icon: <LuShieldCheck className="h-6 w-6 text-blue-600" />,
                title: "Sécurité & Conformité",
                description: "Protégez vos actifs digitaux avec des solutions robustes et conformes.",
              },
              {
                icon: <LuCpu className="h-6 w-6 text-blue-600" />,
                title: "IA & Machine Learning",
                description: "Tirez parti de l'IA pour automatiser et optimiser vos processus logiciels.",
              },
              {
                icon: <LuGraduationCap className="h-6 w-6 text-blue-600" />,
                title: "Formation IT",
                description: "Programmes de formation pour développer les compétences de vos équipes.",
              },
              {
                icon: <FaShieldAlt className="h-6 w-6 text-blue-600" />,
                title: "Maintenance",
                description: "Support technique et maintenance évolutive de vos systèmes critiques.",
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-600 transition-colors duration-300 hover:shadow-xl group flex flex-col items-start text-left cursor-pointer">
                 <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 [&>svg]:group-hover:text-white transition-colors duration-300">
                    {service.icon}
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                 <span className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Détails <FaArrowRight className="ml-2 h-3 w-3" />
                 </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modern Redesign */}
      <section
        id="about"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-200/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="relative">
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 text-blue-600 font-medium text-sm mb-6 shadow-sm">
                <FaRocket className="mr-2 h-4 w-4" />À Propos de Nous
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Propulser{" "}
                <span className="text-blue-600">
                  l&apos;Innovation
                </span>{" "}
                Vers l&apos;Avenir
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chez Docovery, nous combinons l&apos;expertise technique avec une
                vision créative pour livrer des solutions qui transforment les
                entreprises et créent un impact durable dans le paysage digital.
              </p>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: FaLightbulb,
                    title: "Innovation Continue",
                    description: "Repousser les limites avec une technologie de pointe.",
                  },
                  {
                    icon: FaAward,
                    title: "Excellence",
                    description: "Livrer de la qualité dans chaque projet.",
                  },
                  {
                    icon: FaHandshake,
                    title: "Partenariat Durable",
                    description: "Construire des relations solides.",
                  },
                  {
                    icon: FaUsers,
                    title: "Équipe Passionnée",
                    description: "Des experts dévoués à votre réussite.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all duration-300 flex items-center justify-center"
                >
                  <FaPlay className="mr-2 h-4 w-4" />
                  Découvrir Nos Services
                </a>
                <a
                  href="#team"
                  className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center shadow-sm"
                >
                  Rencontrer l&apos;Équipe
                </a>
              </div>
              
            </div>

            {/* Stats & Visual Side */}
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-[#111827] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                
                <div className="relative z-10 text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6">
                     <FaChartLine className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Notre Impact</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Des résultats concrets qui démontrent notre engagement envers l&apos;excellence et l&apos;innovation.
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  {[
                    {
                      number: "5+",
                      label: "Projets Livrés",
                    },
                    {
                      number: "98%",
                      label: "Satisfaction",
                    },
                    {
                      number: "4+",
                      label: "Années d'Expérience",
                    },
                    {
                      number: "100%",
                      label: "Qualité Garantie",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-4xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <FaGlobe className="h-8 w-8 text-blue-600 mb-3" />
                  <div className="text-sm font-semibold text-gray-900 border-b border-transparent">
                    Expertise Internationale
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <FaHeadset className="h-8 w-8 text-blue-600 mb-3" />
                  <div className="text-sm font-semibold text-gray-900">
                    Support 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Minimalist Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[80px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-blue-600 font-medium text-sm mb-6 shadow-sm">
              <FaStar className="mr-2 h-4 w-4" />
              Témoignages
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Ce Que Disent{" "}
              <span className="text-blue-600">
                Nos Clients
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La satisfaction de nos clients est notre plus grande récompense.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
              {
                name: "Marie Kabongo",
                position: "CEO, TechStart",
                rating: 5,
                text: "Docovery a transformé notre vision en une application mobile exceptionnelle. Leur expertise et leur professionnalisme sont sans pareil.",
                avatar: "/male-avatar.png",
              },
              {
                name: "Jean Mukendi",
                position: "CTO, FinanceApp",
                rating: 5,
                text: "Une équipe réactive et compétente qui a su comprendre nos besoins et livrer une solution dépassant nos attentes.",
                avatar: "/male-avatar.png",
              },
              {
                name: "Sarah Nzuzi",
                position: "Founder, EduTech",
                rating: 5,
                text: "Grâce à Docovery, nous avons pu lancer notre plateforme en un temps record avec une qualité irréprochable.",
                avatar: "/male-avatar.png",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <FaQuoteLeft className="h-8 w-8 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-sm border border-white">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        {/* Animated Background Details */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
            Prêt à Transformer{" "}
            <span className="block text-blue-200">Votre Entreprise?</span>
          </h2>

          <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les entreprises qui nous font confiance pour leurs
            projets digitaux. Commençons ensemble votre transformation digitale
            dès aujourd&apos;hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <FaRocket className="mr-2 h-5 w-5" />
              Démarrer un Projet
            </button>
            <a
              href="/contact"
              className="bg-blue-700/50 text-white border border-blue-500/50 px-8 py-5 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <FaHeadset className="mr-2 h-5 w-5" />
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }
        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow.reverse {
          animation-direction: reverse;
        }
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </>
  );
}
