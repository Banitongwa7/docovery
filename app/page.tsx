"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  LuMenu,
  LuX,
  LuCpu,
  LuTerminal,
  LuCloudUpload,
  LuShieldCheck,
  LuSmartphone,
} from "react-icons/lu";

import {
  FaArrowDown,
  FaProjectDiagram,
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaCloud,
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
  FaChartBar,
  FaPlay,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa";

import avatar from "./../public/male-avatar.png";
import socialTeam from "@/utils/socialTeam";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger animations after component mount
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Modern Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <Image
                    src={"/docovery_logo_white.svg"}
                    height={60}
                    width={60}
                    alt="Docovery Logo"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <span
                  className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                    isScrolled ? "" : "text-white"
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
                  className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
              >
                Prendre Rendez-vous
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-xl transition-all duration-300 ${
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
          className={`md:hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100/20`}
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
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium mt-4 text-center block hover:shadow-lg transition-all duration-300"
            >
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-slow delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow delay-500" />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float-slow delay-1500" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid-flow" />

        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          {[
            {
              icon: FaReact,
              color: "text-cyan-400",
              delay: "0s",
              top: "20%",
              left: "10%",
            },
            {
              icon: FaNodeJs,
              color: "text-green-500",
              delay: "2s",
              top: "70%",
              left: "85%",
            },
            {
              icon: FaDatabase,
              color: "text-blue-400",
              delay: "4s",
              top: "30%",
              left: "90%",
            },
            {
              icon: FaCloud,
              color: "text-purple-400",
              delay: "1s",
              top: "80%",
              left: "15%",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 animate-float-slow"
              style={{
                animationDelay: tech.delay,
                top: tech.top,
                left: tech.left,
              }}
            >
              <tech.icon className={tech.color} />
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Text Content */}
            <div className="text-center lg:text-left">
              {/* Enhanced Animated Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8 animate-fade-in-up hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-2" />
                <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">
                  {"🚀 Innovation Aujourd'hui, Réussite Demain"}
                </span>
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span
                  className={`block animate-fade-in-up ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Transformez
                </span>
                <span
                  className={`block animate-fade-in-up delay-200 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Votre Vision
                </span>
                <span
                  className={`block animate-fade-in-up delay-400 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  En{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Réalité Digitale
                  </span>
                </span>
              </h1>

              {/* Enhanced Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-600">
                {
                  "Nous concevons des solutions digitales sur mesure qui transforment vos idées en applications performantes, propulsant votre entreprise vers l'avenir."
                }
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-800">
                <a
                  href="https://outlook.office365.com/owa/calendar/Docovery@docovery.vercel.app/bookings/"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center">
                    Démarrer un Projet
                    <FaRocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                <a
                  href="#services"
                  className="group border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-center hover:border-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="flex items-center justify-center">
                    Explorer Nos Solutions
                    <FaArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>

              {/* Enhanced Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-1000">
                {[
                  {
                    number: "5+",
                    label: "Projets Innovants",
                    color: "from-blue-400 to-cyan-400",
                    icon: <FaProjectDiagram className="h-6 w-6 mx-auto mb-2" />,
                  },
                  {
                    number: "100%",
                    label: "Satisfaction Client",
                    color: "from-green-400 to-emerald-400",
                    icon: <FaChartLine className="h-6 w-6 mx-auto mb-2" />,
                  },
                  {
                    number: "24/7",
                    label: "Support Expert",
                    color: "from-purple-400 to-pink-400",
                    icon: <FaHeadset className="h-6 w-6 mx-auto mb-2" />,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
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

            {/* Enhanced Hero Visual */}
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-float-slow" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-float-slow delay-1000" />
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-float-slow delay-500" />

              {/* Main Hero Visual */}
              <div className="relative">
                {/* Glass Morphism Container */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                  {/* Animated Code Preview */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow shadow-lg">
                    <FaCode className="inline mr-1 h-4 w-4" />
                    Code Live
                  </div>

                  {/* Tech Stack Icons Grid */}
                  <div className="flex justify-center space-x-6 mb-6">
                    {[
                      {
                        icon: (
                          <FaReact className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        ),
                        name: "React",
                      },
                      {
                        icon: (
                          <FaNodeJs className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                        ),
                        name: "Node.js",
                      },
                      {
                        icon: (
                          <FaMobileAlt className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        ),
                        name: "Mobile",
                      },
                      {
                        icon: (
                          <FaCloud className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        ),
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

                  {/* Central Interactive Element */}
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 aspect-video flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500">
                    {/* Animated Orbit System */}
                    <div className="absolute w-48 h-48 border border-blue-400/20 rounded-full animate-spin-slow" />
                    <div className="absolute w-40 h-40 border border-purple-400/30 rounded-full animate-spin-slow reverse" />

                    {/* Central AI Brain */}
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                      <LuCpu className="h-16 w-16 text-white animate-pulse" />
                    </div>

                    {/* Orbiting Elements */}
                    {[
                      {
                        icon: FaDatabase,
                        color: "text-green-400",
                        delay: "0s",
                      },
                      {
                        icon: FaShieldAlt,
                        color: "text-yellow-400",
                        delay: "1s",
                      },
                      { icon: FaBolt, color: "text-red-400", delay: "2s" },
                      { icon: FaRocket, color: "text-cyan-400", delay: "3s" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`absolute w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-orbit ${item.color}`}
                        style={{ animationDelay: item.delay }}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>
                    ))}
                  </div>

                  {/* Interactive Dots */}
                  <div className="flex justify-center space-x-3 mt-6">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/60 transition-all duration-300 cursor-pointer hover:scale-125"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow group-hover:opacity-80 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="text-sm mb-2 font-medium">Explorer</span>
            <div className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/60 transition-colors duration-300">
              <FaChevronDown className="w-3 h-3" />
            </div>
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
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-20px) rotate(120deg);
            }
            66% {
              transform: translateY(-10px) rotate(240deg);
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
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 4s ease infinite;
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
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
        `}</style>
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

      {/* Services Section - Enhanced */}
      <section
        id="services"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <FaRocket className="mr-2 h-4 w-4" />
              {"Nos Domaines d'Expertise"}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {
                "Des solutions digitales complètes et innovantes pour propulser votre entreprise vers l'avenir et maximiser votre impact numérique."
              }
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LuTerminal className="h-8 w-8" />,
                title: "Développement Sur Mesure",
                description:
                  "Des solutions logicielles adaptées construites avec des technologies de pointe pour répondre à vos besoins spécifiques.",
                features: [
                  "Applications Web",
                  "Solutions SaaS",
                  "Architecture Cloud",
                ],
                color: "from-blue-500 to-blue-600",
                delay: "0ms",
              },
              {
                icon: <FaChartBar className="h-8 w-8" />,
                title: "Données & Analytique",
                description:
                  "Transformez vos données en insights actionnables avec des outils d'analyse et de visualisation avancés.",
                features: [
                  "Tableaux de Bord",
                  "Machine Learning",
                  "Business Intelligence",
                ],
                color: "from-green-500 to-green-600",
                delay: "100ms",
              },
              {
                icon: <LuCloudUpload className="h-8 w-8" />,
                title: "Transformation Digitale",
                description:
                  "Modernisez vos opérations et adoptez l'innovation digitale pour une croissance durable.",
                features: [
                  "Stratégie Digitale",
                  "Automatisation",
                  "Optimisation",
                ],
                color: "from-purple-500 to-purple-600",
                delay: "200ms",
              },
              {
                icon: <LuSmartphone className="h-8 w-8" />,
                title: "Solutions Mobiles",
                description:
                  "Engagez vos clients avec des applications mobiles intuitives sur toutes les plateformes.",
                features: ["iOS & Android", "Apps Hybrides", "UI/UX Mobile"],
                color: "from-orange-500 to-orange-600",
                delay: "300ms",
              },
              {
                icon: <LuShieldCheck className="h-8 w-8" />,
                title: "Cybersécurité",
                description:
                  "Protégez vos actifs digitaux avec des solutions de sécurité robustes et les meilleures pratiques.",
                features: [
                  "Audit Sécurité",
                  "Protection Données",
                  "Conformité",
                ],
                color: "from-red-500 to-red-600",
                delay: "400ms",
              },
              {
                icon: <LuCpu className="h-8 w-8" />,
                title: "IA & Machine Learning",
                description:
                  "Tirez parti de l'intelligence artificielle pour automatiser les processus et gagner un avantage concurrentiel.",
                features: [
                  "IA Personnalisée",
                  "Automatisation",
                  "Algorithmes Intelligents",
                ],
                color: "from-indigo-500 to-indigo-600",
                delay: "500ms",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                {/* Hover Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border border-gray-100 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      En savoir plus
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-10 rounded-tr-2xl transition-opacity duration-500`}
                />
              </div>
            ))}
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
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
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

        
        </div>
      </section>

      {/* Team Section - Modern Card Layout */}
      <section
        id="team"
        className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-semibold text-sm mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <FaUsers className="mr-2 h-4 w-4" />
              {"Équipe d'Experts"}
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Rencontrez Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Architectes Digitaux
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {
                "Une équipe passionnée d'experts dédiés à transformer vos idées les plus ambitieuses en réalité digitale"
              }
            </p>
          </div>

          {/* Team Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                number: "5+",
                label: "Projets Innovants",
                icon: FaRocket,
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "100%",
                label: "Satisfaction Client",
                icon: FaSmile,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "24/7",
                label: "Support Expert",
                icon: FaHeadset,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "4+",
                label: "Années d'Expérience",
                icon: FaAward,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Team Members Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                name: "David BANITONGWA",
                role: "Software Engineer & Co-fondateur",
                image: "/david.png",
                social: socialTeam.david,
                expertise: [
                  "Architecture Cloud Native",
                  "Développement Full-Stack",
                  "DevOps & Scalabilité",
                  "React & Next.js",
                ],
                color: "from-blue-500 to-cyan-500",
                description:
                  "Expert en conception de systèmes évolutifs et architectures cloud modernes avec 4+ années d'expérience dans le développement d'applications performantes.",
                projects: "projets livrés",
                availability: "Disponible pour nouveaux projets",
              },
              {
                name: "Omari KAYUMBA",
                role: "Software Engineer & Co-fondateur",
                image: "/omari.jpg",
                social: socialTeam.omari,
                expertise: [
                  "Intelligence Artificielle",
                  "Data Science & Analytics",
                  "Backend Engineering",
                  "Machine Learning",
                ],
                color: "from-purple-500 to-pink-500",
                description:
                  "Spécialiste en IA et analyse de données pour des solutions intelligentes et innovantes. Passionné par la résolution de problèmes complexes.",
                projects: "projets IA",
                availability: "Expertise en IA/ML",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100/50 overflow-hidden"
              >
                {/* Header with Photo and Basic Info */}
                <div className="relative p-8 pb-6">
                  <div className="flex items-start gap-6">
                    {/* Enhanced Member Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="rounded-2xl border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Enhanced Status Indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                        </div>
                      </div>
                    </div>

                    {/* Member Basic Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-3 flex items-center text-lg">
                        <FaBriefcase className="mr-2 h-4 w-4 text-blue-500" />
                        {member.role}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {member.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <FaRocket className="mr-1 h-3 w-3 text-green-500" />
                          {member.projects}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-1 h-3 w-3 text-blue-500" />
                          {member.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expertise Section */}
                <div className="px-8 pb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaCode className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">
                      Expertises
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 rounded-xl text-sm font-medium border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 group/skill relative overflow-hidden"
                      >
                        <span className="relative flex items-center">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Social Links and CTA */}
                <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-200"
                        >
                          {platform === "github" && (
                            <FaGithub className="h-4 w-4" />
                          )}
                          {platform === "linkedin" && (
                            <FaLinkedin className="h-4 w-4" />
                          )}
                          {platform === "twitter" && (
                            <FaTwitter className="h-4 w-4" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${member.color} opacity-5 rounded-tr-3xl`}
                />
              </div>
            ))}
          </div>

          {/* Team Philosophy Card */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaUsers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Notre Philosophie Collective
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {
                    "Nous croyons en la puissance de la collaboration et de l'innovation continue. Chaque projet est une opportunité de repousser les limites du possible et de créer des solutions qui ont un impact réel."
                  }
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: FaLightbulb, text: "Innovation Continue" },
                    { icon: FaHandshake, text: "Collaboration" },
                    { icon: FaAward, text: "Excellence Technique" },
                    { icon: FaRocket, text: "Impact Mesurable" },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm"
                    >
                      <value.icon className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: "100%",
                    label: "Engagement Qualité",
                    icon: FaAward,
                  },
                  { number: "24h", label: "Temps de Réponse", icon: FaClock },
                  {
                    number: "10+",
                    label: "Technologies Maîtrisées",
                    icon: FaCode,
                  },
                  {
                    number: "∞",
                    label: "Solutions Innovantes",
                    icon: FaLightbulb,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
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
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
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
                  <Image
                    src={"/docovery_logo_white.svg"}
                    height={60}
                    width={60}
                    alt="Docovery Logo"
                    className="h-6 w-6 text-white"
                  />
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
