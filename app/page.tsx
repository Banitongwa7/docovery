"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  LuMenu,
  LuX,
  LuCloudUpload,
  LuCpu,
  LuSmartphone,
  LuShieldCheck,
  LuTerminal,
  LuRocket,
} from "react-icons/lu";

import {
  FaChartBar,
  FaArrowDown,
  FaProjectDiagram,
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaCloud,
  FaMicrochip,
  FaDatabase,
  FaShieldAlt,
  FaBolt,
  FaChevronDown,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaChartLine,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStar,
  FaQuoteLeft,
  FaBriefcase,
  FaSmile,
  FaRocket,
  FaClock,
  FaHeadset,
  FaAward,
  FaHandshake,
  FaPlay,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa";

import avatar from "./../public/male-avatar.png";
import socialTeam from "@/utils/socialTeam";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Modern Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Image
                    src={"/docovery_logo.svg"}
                    height={60}
                    width={60}
                    alt="Docovery Logo"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <span
                  className={`text-2xl font-bold ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Docovery
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "#home", label: "Accueil" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "À Propos" },
                { href: "#team", label: "Notre Équipe" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Prendre Rendez-vous
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? (
                  <LuX className="h-6 w-6" />
                ) : (
                  <LuMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-lg border-b border-gray-100`}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { href: "#home", label: "Accueil" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "À Propos" },
              { href: "#team", label: "Notre Équipe" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium mt-4 text-center block"
            >
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8 animate-fade-in-up">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-2" />
                <span className="text-sm text-white/80 font-medium">
                  {"🚀 Innovation Aujourd'hui, Réussite Demain"}
                </span>
              </div>

              {/* Main Heading with Typing Animation */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block animate-fade-in-up">Transformez</span>
                <span className="block animate-fade-in-up delay-200">
                  Votre Entreprise
                </span>
                <span className="block animate-fade-in-up delay-400">
                  Avec{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    {"l'Innovation Digitale"}
                  </span>
                </span>
              </h1>

              {/* Animated Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-600">
                {
                  "Nous créons des solutions de pointe en développement, analyse de données et transformation digitale pour propulser votre entreprise vers l'avenir."
                }
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-800">
                <a
                  href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center">
                    Démarrer un Projet
                    <FaRocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                <a
                  href="#services"
                  className="group border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center hover:border-white/50 backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    Voir Nos Services
                    <FaArrowDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>

              {/* Animated Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-1000">
                {[
                  {
                    number: "5+",
                    label: "Projets Réalisés",
                    color: "from-blue-400 to-cyan-400",
                    icon: <FaProjectDiagram className="h-6 w-6 mx-auto mb-2" />,
                  },
                  {
                    number: "98%",
                    label: "Taux de Réussite",
                    color: "from-green-400 to-emerald-400",
                    icon: <FaChartLine className="h-6 w-6 mx-auto mb-2" />,
                  },
                  {
                    number: "24/7",
                    label: "Support Client",
                    color: "from-purple-400 to-pink-400",
                    icon: <FaHeadset className="h-6 w-6 mx-auto mb-2" />,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image/Animation */}
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float-slow" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float-slow delay-1000" />

              {/* Main Hero Visual */}
              <div className="relative">
                {/* Glass Morphism Container */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Animated Code Preview */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
                    <FaCode className="inline mr-1 h-4 w-4" />
                    Code Live
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-6 mb-6">
                    {[
                      {
                        icon: <FaReact className="h-8 w-8 text-cyan-400" />,
                        name: "React",
                      },
                      {
                        icon: <FaNodeJs className="h-8 w-8 text-green-500" />,
                        name: "Node.js",
                      },
                      {
                        icon: <FaMobileAlt className="h-8 w-8 text-blue-400" />,
                        name: "Mobile",
                      },
                      {
                        icon: <FaCloud className="h-8 w-8 text-purple-400" />,
                        name: "Cloud",
                      },
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="hover:scale-125 transition-transform duration-300 animate-bounce"
                        style={{ animationDelay: `${index * 200}ms` }}
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  {/* Central Hero Image/Animation */}
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 aspect-video flex items-center justify-center">
                    {/* Animated Circles */}
                    <div className="absolute w-32 h-32 border-2 border-blue-400/30 rounded-full animate-ping-slow" />
                    <div className="absolute w-40 h-40 border-2 border-purple-400/20 rounded-full animate-ping-slow delay-500" />

                    {/* Central Icon */}
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
                      <FaMicrochip className="h-16 w-16 text-white animate-pulse" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-green-400/20 rounded-full animate-bounce">
                      <FaDatabase className="h-4 w-4 text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-400/20 rounded-full animate-bounce delay-300">
                      <FaShieldAlt className="h-3 w-3 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute top-4 right-4 w-4 h-4 bg-red-400/20 rounded-full animate-bounce delay-700">
                      <FaBolt className="h-2 w-2 text-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-5 h-5 bg-cyan-400/20 rounded-full animate-bounce delay-1000">
                      <FaRocket className="h-2.5 w-2.5 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Feature Dots */}
                  <div className="flex justify-center space-x-3 mt-6">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/60 transition-colors duration-300 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10 animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Découvrir</span>
            <FaChevronDown className="w-6 h-6" />
          </div>
        </div>

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
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
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
          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%,
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions digitales complètes pour faire avancer votre
              entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LuTerminal className="h-8 w-8" />,
                title: "Développement Sur Mesure",
                description:
                  "Des solutions logicielles adaptées construites avec des technologies de pointe pour répondre à vos besoins spécifiques.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <FaChartBar className="h-8 w-8" />,
                title: "Données & Analytique",
                description:
                  "Transformez vos données en insights actionnables avec des outils d'analyse et de visualisation avancés.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <LuCloudUpload className="h-8 w-8" />,
                title: "Transformation Digitale",
                description:
                  "Modernisez vos opérations et adoptez l'innovation digitale pour une croissance durable.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <LuSmartphone className="h-8 w-8" />,
                title: "Solutions Mobiles",
                description:
                  "Engagez vos clients avec des applications mobiles intuitives sur toutes les plateformes.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <LuShieldCheck className="h-8 w-8" />,
                title: "Cybersécurité",
                description:
                  "Protégez vos actifs digitaux avec des solutions de sécurité robustes et les meilleures pratiques.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: <LuCpu className="h-8 w-8" />,
                title: "IA & Machine Learning",
                description:
                  "Tirez parti de l'intelligence artificielle pour automatiser les processus et gagner un avantage concurrentiel.",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2" />
                <div className="relative p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modern Redesign */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="relative">
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
                <FaRocket className="mr-2 h-4 w-4" />À Propos de Nous
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Propulser{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {"l'Innovation"}
                </span>{" "}
                {"Vers l'Avenir"}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {
                  "Chez Docovery, nous combinons l'expertise technique avec une vision créative pour livrer des solutions qui transforment les entreprises et créent un impact durable dans le paysage digital."
                }
              </p>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: FaLightbulb,
                    title: "Innovation Continue",
                    description:
                      "Repousser les limites avec une technologie de pointe et des solutions avant-gardistes.",
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    icon: FaAward,
                    title: "Excellence Technique",
                    description:
                      "Livrer de la qualité et des performances optimales dans chaque projet.",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: FaHandshake,
                    title: "Partenariat Durable",
                    description:
                      "Construire des relations de confiance et des collaborations à long terme.",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: FaUsers,
                    title: "Équipe Passionnée",
                    description:
                      "Des experts dévoués à la réussite de vos projets digitaux.",
                    color: "from-purple-500 to-pink-500",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <FaPlay className="mr-2 h-4 w-4" />
                  Découvrir Nos Services
                </a>
                <a
                  href="#team"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <FaUsers className="mr-2 h-4 w-4" />
                  {"Rencontrer l'Équipe"}
                </a>
              </div>
            </div>

            {/* Stats & Visual Side */}
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <FaChartLine className="h-12 w-12 text-white/80 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Notre Impact</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {
                      "Des résultats concrets qui démontrent notre engagement envers l'excellence et l'innovation."
                    }
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      number: "5+",
                      label: "Projets Livrés",
                      icon: FaRocket,
                      description: "Solutions sur mesure déployées avec succès",
                    },
                    {
                      number: "98%",
                      label: "Satisfaction Client",
                      icon: FaSmile,
                      description: "Taux de recommandation exceptionnel",
                    },
                    {
                      number: "4+",
                      label: "Années d'Expertise",
                      icon: FaCalendarAlt,
                      description: "Expérience accumulée dans le digital",
                    },
                    {
                      number: "100%",
                      label: "Engagement Qualité",
                      icon: FaShieldAlt,
                      description: "Standards de qualité maintenus",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold mb-1">
                        {stat.number}
                      </div>
                      <div className="text-blue-100 font-semibold text-sm mb-1">
                        {stat.label}
                      </div>
                      <div className="text-blue-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 rounded-2xl blur-xl animate-float-slow" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-400/10 rounded-2xl blur-xl animate-float-slow delay-1000" />

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
                  <FaGlobe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">
                    Expertise Internationale
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
                  <FaClock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Support 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Testimonial Section - Modern Redesign */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
              <FaStar className="mr-2 h-4 w-4" />
              Témoignages Clients
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ils nous{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                font confiance
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez pourquoi nos clients recommandent nos services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Main Testimonial */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Quote Icon */}
                <div className="text-6xl text-blue-600/10 mb-4">
                  <FaQuoteLeft />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    5.0/5
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {
                    "Je suis absolument ravi de l'application développée par Docovery ! C'est exactement ce que je cherchais. L'interface est conviviale et intuitive, rendant l'utilisation de l'application simple et agréable. L'équipe a su comprendre parfaitement nos besoins et a livré un produit de qualité supérieure."
                  }
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={avatar}
                      alt="John Doe"
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-blue-500"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      John Doe
                    </div>
                    <div className="text-gray-600 flex items-center">
                      <FaBriefcase className="mr-2 h-3 w-3" />
                      CEO @ Amani
                    </div>
                  </div>
                </div>

                {/* Company Logo/Badge */}
                <div className="absolute top-6 right-6 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Projet Réussi
                </div>
              </div>
            </div>

            {/* Additional Testimonials Grid */}
            <div className="grid gap-6">
              {[
                {
                  name: "Sarah Chen",
                  role: "Directrice Marketing @ TechCorp",
                  text: "Le site web développé par Docovery a considérablement amélioré notre présence en ligne. Le design est moderne et les performances sont exceptionnelles.",
                  rating: 5,
                  project: "Site E-commerce",
                },
                {
                  name: "Pierre Martin",
                  role: "Founder @ StartupInnov",
                  text: "Un partenariat exceptionnel. L'équipe a su être réactive et proposer des solutions innovantes à chaque défi.",
                  rating: 5,
                  project: "Application Mobile",
                },
                {
                  name: "Marie Laurent",
                  role: "CTO @ DataSystems",
                  text: "Expertise technique remarquable. Ils ont su optimiser nos processus et améliorer nos performances techniques.",
                  rating: 4,
                  project: "Optimisation SaaS",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {testimonial.text}
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "Clients Satisfaits", icon: FaSmile },
                { number: "5+", label: "Projets Livrés", icon: FaRocket },
                { number: "100%", label: "Délais Respectés", icon: FaClock },
                { number: "24/7", label: "Support Client", icon: FaHeadset },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Redesign */}
      <section
        id="team"
        className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              <FaUsers className="mr-2 h-4 w-4" />
              Notre Équipe
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Rencontrez les{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Esprits Créatifs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés qui transforment vos idées en réalité
              digitale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team Stats Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white h-full shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Notre ADN</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {
                      "Innovation, collaboration et excellence technique sont au cœur de notre philosophie. Nous combinons expertise et créativité pour livrer des solutions d'exception."
                    }
                  </p>
                </div>

                {/* Team Stats */}
                <div className="space-y-6">
                  {[
                    {
                      icon: FaLightbulb,
                      label: "Innovation Continue",
                      value: "100%",
                      color: "text-yellow-300",
                    },
                    {
                      icon: FaCode,
                      label: "Projets Livrés",
                      value: "5+",
                      color: "text-green-300",
                    },
                    {
                      icon: FaChartLine,
                      label: "Satisfaction Client",
                      value: "98%",
                      color: "text-blue-300",
                    },
                    {
                      icon: FaClock,
                      label: "Support Réactif",
                      value: "24/7",
                      color: "text-purple-300",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                    >
                      <div
                        className={`p-3 rounded-xl bg-white/20 ${stat.color}`}
                      >
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-blue-100 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  name: "David BANITONGWA",
                  role: "Software Engineer & Co-fondateur",
                  image: "/david.png",
                  social: socialTeam.david,
                  expertise: [
                    "Développement Full-Stack",
                    "Architecture Cloud",
                    "DevOps",
                  ],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Omari KAYUMBA",
                  role: "Software Engineer & Co-fondateur",
                  image: "/omari.jpg",
                  social: socialTeam.omari,
                  expertise: ["AI/ML", "Data Science", "Backend Development"],
                  color: "from-purple-500 to-pink-500",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Member Photo */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={140}
                          height={140}
                          className="rounded-2xl border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Status Indicator */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 border-2 border-white rounded-full" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 mb-4 flex items-center">
                            <FaBriefcase className="mr-2 h-4 w-4 text-blue-500" />
                            {member.role}
                          </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3 mb-4 lg:mb-0">
                          {Object.entries(member.social).map(
                            ([platform, url]) => (
                              <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                              >
                                {platform === "github" && (
                                  <FaGithub className="h-5 w-5" />
                                )}
                                {platform === "linkedin" && (
                                  <FaLinkedin className="h-5 w-5" />
                                )}
                                {platform === "twitter" && (
                                  <FaTwitter className="h-5 w-5" />
                                )}
                              </a>
                            )
                          )}
                        </div>
                      </div>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de la façon dont notre expertise peut faire avancer votre
            parcours de transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Démarrer un Projet
            </a>
            <a
              href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              Planifier un Appel
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <LuRocket className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Docovery</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transformer les entreprises grâce à des solutions digitales
                innovantes et des technologies de pointe.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Développement Sur Mesure",
                  "Analyse de Données",
                  "Transformation Digitale",
                  "Solutions Mobiles",
                  "Cybersécurité",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
              <ul className="space-y-3 text-gray-400">
                {["À Propos", "Équipe", "Carrières", "Contact", "Blog"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace("à", "a")}`}
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+216 54482172</li>
                <li>davidbanitongwa@gmail.com</li>
                <li>Tunis, Tunisie</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Docovery. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
