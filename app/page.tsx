"use client";

import React, { useState, useEffect } from "react";
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
  LuCode,
} from "react-icons/lu";
import {
  FaArrowRight,
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
  FaChartLine,
  FaStar,
  FaQuoteLeft,
  FaRocket,
  FaHeadset,
  FaAward,
  FaHandshake,
  FaSmile,
  FaBriefcase,
  FaPlay,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";

import avatar from "./../public/male-avatar.png";
import { socialTeam } from "@/utils/socialTeam";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <Navigation />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-20"
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
              className="absolute text-2xl opacity-20 animate-float-slow hidden md:block"
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
                  🚀 Innovation Aujourd&apos;hui, Réussite Demain
                </span>
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span
                  className={`block animate-fade-in-up ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  Transformez
                </span>
                <span
                  className={`block animate-fade-in-up delay-200 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  Votre Vision
                </span>
                <span
                  className={`block animate-fade-in-up delay-400 ${isVisible
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
                Nous concevons des solutions digitales sur mesure qui
                transforment vos idées en applications performantes, propulsant
                votre entreprise vers l&apos;avenir.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-800">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center">
                    Démarrer un Projet
                    <FaRocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <a
                  href="#services"
                  className="group border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-center hover:border-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="flex items-center justify-center">
                    Explorer Nos Solutions
                    <FaChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
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
            <div className="relative hidden lg:block">
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
                    <LuCode className="inline mr-1 h-4 w-4" />
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
          <a
            href="#services"
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <span className="text-sm mb-2 font-medium">Explorer</span>
            <div className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/60 transition-colors duration-300">
              <FaChevronDown className="w-3 h-3" />
            </div>
          </a>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
              <FaBolt className="mr-2 h-4 w-4" />
              Nos Services
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digitales
              </span>{" "}
              Sur Mesure
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous transformons vos défis en opportunités avec nos services
              innovants adaptés à vos besoins spécifiques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LuTerminal className="h-8 w-8" />,
                title: "Développement Web",
                description:
                  "Créez des applications web performantes, évolutives et sécurisées avec les dernières technologies.",
                features: [
                  "React/Next.js",
                  "API RESTful",
                  "Architecture Microservices",
                ],
                color: "from-blue-500 to-blue-600",
                delay: "0ms",
              },
              {
                icon: <LuSmartphone className="h-8 w-8" />,
                title: "Applications Mobiles",
                description:
                  "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
                features: [
                  "React Native",
                  "Flutter",
                  "Design Mobile-First",
                ],
                color: "from-green-500 to-green-600",
                delay: "100ms",
              },
              {
                icon: <LuCloudUpload className="h-8 w-8" />,
                title: "Solutions Cloud",
                description:
                  "Optimisez vos infrastructures avec des solutions cloud scalables et rentables.",
                features: [
                  "AWS/Azure/GCP",
                  "DevOps CI/CD",
                  "Infrastructure as Code",
                ],
                color: "from-purple-500 to-purple-600",
                delay: "200ms",
              },
              {
                icon: <FaDatabase className="h-8 w-8" />,
                title: "Bases de Données",
                description:
                  "Conception et gestion de bases de données performantes pour vos applications critiques.",
                features: [
                  "SQL & NoSQL",
                  "Optimisation",
                  "Migration de Données",
                ],
                color: "from-yellow-500 to-yellow-600",
                delay: "300ms",
              },
              {
                icon: <LuShieldCheck className="h-8 w-8" />,
                title: "Sécurité & Conformité",
                description:
                  "Protégez vos actifs digitaux avec des solutions de sécurité robustes et conformes.",
                features: [
                  "Audit Sécurité",
                  "RGPD",
                  "Cybersécurité",
                ],
                color: "from-red-500 to-red-600",
                delay: "400ms",
              },
              {
                icon: <LuCpu className="h-8 w-8" />,
                title: "IA & Machine Learning",
                description:
                  "Tirez parti de l'intelligence artificielle pour automatiser et optimiser vos processus.",
                features: [
                  "IA Personnalisée",
                  "Automatisation",
                  "Analytics Avancés",
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
                        <FaCheckCircle
                          className={`mr-3 h-4 w-4 text-gradient-to-r ${service.color}`}
                          style={{
                            background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                    >
                      Demander une démo
                      <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
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
                    description:
                      "Repousser les limites avec une technologie de pointe.",
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    icon: FaAward,
                    title: "Excellence Technique",
                    description:
                      "Livrer de la qualité dans chaque projet.",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: FaHandshake,
                    title: "Partenariat Durable",
                    description:
                      "Construire des relations de confiance.",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: FaUsers,
                    title: "Équipe Passionnée",
                    description:
                      "Des experts dévoués à votre réussite.",
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
                  Rencontrer l&apos;Équipe
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
                    Des résultats concrets qui démontrent notre engagement
                    envers l&apos;excellence et l&apos;innovation.
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      number: "5+",
                      label: "Projets Livrés",
                      icon: FaRocket,
                      description: "Solutions déployées avec succès",
                    },
                    {
                      number: "98%",
                      label: "Satisfaction Client",
                      icon: FaSmile,
                      description: "Taux de recommandation",
                    },
                    {
                      number: "4+",
                      label: "Années d'Expertise",
                      icon: FaBriefcase,
                      description: "Expérience accumulée",
                    },
                    {
                      number: "100%",
                      label: "Engagement Qualité",
                      icon: FaShieldAlt,
                      description: "Standards maintenus",
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
                  <FaHeadset className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Support 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-6">
              <FaUsers className="mr-2 h-4 w-4" />
              Notre Équipe
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rencontrez{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Les Experts
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une équipe passionnée de professionnels dévoués à transformer vos
              idées en réalité digitale.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialTeam.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center">
                  {/* Avatar */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transform">
                      <Image
                        src={member.photo || avatar}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    {/* Online Status */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white" />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.social.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                      >
                        <social.icon className="h-5 w-5 text-gray-600 group-hover/social:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-6">
              <FaStar className="mr-2 h-4 w-4" />
              Témoignages
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ce Que Disent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <FaQuoteLeft className="h-8 w-8 text-blue-600/20" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
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
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-slow delay-1000" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à Transformer{" "}
            <span className="text-yellow-300">Votre Entreprise?</span>
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les entreprises qui nous font confiance pour leurs
            projets digitaux. Commençons ensemble votre transformation digitale
            dès aujourd&apos;hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <FaRocket className="mr-2 h-5 w-5" />
              Démarrer un Projet
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
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
