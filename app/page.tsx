"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  PencilIcon,
  CodeBracketIcon,
  HomeIcon,
  WrenchIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import avatar from "./../public/male-avatar.png";
import socialTeam from "@/utils/socialTeam";
import devAnimation from "@/public/lottie/dev-animation.json";
import office from "@/public/lottie/office.json";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("@/components/lottieanimation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  ),
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/docovery_white.png"
                  alt="logo"
                  className="h-15 md:h-20 w-auto hover:opacity-90 transition-opacity"
                  width={180}
                  height={45}
                  priority
                />
              </motion.div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {[
                { href: "#homepage", label: "Accueil" },
                { href: "#about", label: "A propos" },
                { href: "#services", label: "Nos Services" },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="#footer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Nous Contacter
              </motion.a>
            </div>

            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-800`}
        >
          <div className="px-4 py-3 space-y-2">
            {[
              { href: "#homepage", label: "Accueil" },
              { href: "#about", label: "A propos" },
              { href: "#services", label: "Nos Services" },
              { href: "#footer", label: "Nous Contacter" },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-28 lg:pt-32 bg-gray-900 min-h-screen overflow-hidden"
        id="homepage"
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Nous créons la</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  solution
                </span>{" "}
                <span className="text-white">qui répond à vos besoins</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                {
                  "Transformez votre vision en réalité avec notre expertise en développement. Des solutions innovantes pour propulser votre entreprise vers l'avenir."
                }
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#footer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Nous contacter
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-colors duration-300"
                >
                  Découvrir nos services
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
              <div className="relative">
                <LottieAnimation
                  animationData={devAnimation}
                  className="w-full h-auto"
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { number: "5+", label: "Projets Réalisés" },
              { number: "3+", label: "Clients Satisfaits" },
              { number: "24/7", label: "Support Client" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 bg-gray-50 overflow-hidden"
        id="about"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-black/[0.03] bg-[size:60px_60px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >
              À propos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Docovery
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Docovery est une entreprise innovante spécialisée dans le
              développement de solutions numériques sur mesure.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                {
                  title: "Notre Mission",
                  description:
                    "Transformer vos idées en solutions technologiques innovantes qui propulsent votre entreprise vers l'avenir.",
                },
                {
                  title: "Notre Vision",
                  description:
                    "Être le partenaire technologique de référence pour les entreprises qui souhaitent se développer dans l'ère numérique.",
                },
                {
                  title: "Nos Valeurs",
                  description:
                    "Innovation, excellence, engagement client et amélioration continue guident chacune de nos actions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="p-8">
                  <LottieAnimation
                    animationData={office}
                    className="w-full h-auto mb-8"
                    style={{ maxWidth: "600px", margin: "0 auto" }}
                  />
                  <h4 className="text-2xl font-semibold mb-4">
                    Notre Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Projets", value: "5+" },
                      { label: "Clients", value: "3+" },
                      { label: "Années", value: "4+" },
                      { label: "Support", value: "24/7" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        id="services"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Des solutions sur mesure pour répondre à tous vos besoins
              numériques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserIcon className="h-8 w-8" />,
                title: "Accompagnement",
                description:
                  "Nous vous accompagnons dans la clarification de votre idée pour mieux appréhender le cœur de votre projet.",
                color: "from-blue-500/20 to-blue-600/20",
              },
              {
                icon: <PencilIcon className="h-8 w-8" />,
                title: "Conception",
                description:
                  "Représenter son projet est une méthode efficace pour sa construction. Docovery se charge de vous aider à mieux conceptualiser votre projet.",
                color: "from-purple-500/20 to-purple-600/20",
              },
              {
                icon: <CodeBracketIcon className="h-8 w-8" />,
                title: "Développement",
                description:
                  "L'équipe talentueuse de Docovery crée des solutions sur mesure pour votre projet.",
                color: "from-indigo-500/20 to-indigo-600/20",
              },
              {
                icon: <HomeIcon className="h-8 w-8" />,
                title: "Service après vente",
                description:
                  "Un support continu est assuré par le service après-vente dédié, résolvant rapidement toute question ou préoccupation.",
                color: "from-cyan-500/20 to-cyan-600/20",
              },
              {
                icon: <WrenchIcon className="h-8 w-8" />,
                title: "Maintenance",
                description:
                  "Un service de maintenance proactif effectue des contrôles réguliers et applique les mises à jour nécessaires.",
                color: "from-teal-500/20 to-teal-600/20",
              },
              {
                icon: <BookOpenIcon className="h-8 w-8" />,
                title: "Formation",
                description:
                  "Des formations personnalisées adaptées à vos besoins spécifiques vous permettent de maîtriser pleinement vos outils technologiques.",
                color: "from-sky-500/20 to-sky-600/20",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl transition-all duration-300 group-hover:scale-105`}
                />
                <div className="relative h-auto md:h-[300px] bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <a
              href="#footer"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Démarrer un projet
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ce que disent nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                clients
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              {"Découvrez les retours d'expérience de nos clients satisfaits"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transition-all duration-300 group-hover:scale-105" />
              <div className="relative">
                <Image
                  src={avatar}
                  alt="Client"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="pl-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <svg
                    className="h-12 w-12 text-blue-500 mb-6 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    {
                      "Je suis absolument ravi de l'application développée par Docovery ! C'est exactement ce que je cherchais. L'interface est conviviale et intuitive, rendant l'utilisation de l'application simple et agréable."
                    }
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        John Doe
                      </div>
                      <div className="text-gray-600">CEO @ Amani</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support Client" },
              { number: "3+", label: "Années d'expérience" },
              { number: "100%", label: "Engagement" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              {"L'équipe "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Docovery
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              {"Des experts passionnés par l'innovation et le développement"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "David BANITONGWA",
                role: "Software Engineer & Co-founder Docovery",
                image: "/david.png",
                social: socialTeam.david,
                color: "from-blue-500/20 to-blue-600/20",
              },
              {
                name: "Omari KAYUMBA",
                role: "Software Engineer & Co-founder Docovery",
                image: "/omari.jpg",
                social: socialTeam.omari,
                color: "from-purple-500/20 to-purple-600/20",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl transition-all duration-300 group-hover:scale-105`}
                />
                <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-md opacity-50" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="relative rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                      <div className="flex justify-center md:justify-start space-x-4">
                        {[
                          {
                            href: member.social.github,
                            icon: (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                            ),
                          },
                          {
                            href: member.social.linkedin,
                            icon: (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            ),
                          },
                          {
                            href: member.social.twitter,
                            icon: (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            ),
                          },
                        ].map((social, socialIndex) => (
                          <motion.a
                            key={socialIndex}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className="relative bg-gray-900 text-white pt-20 pb-12 overflow-hidden"
        id="footer"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <Image
                src="/docovery_white.png"
                alt="Docovery"
                width={160}
                height={40}
                className="h-15 md:h-20 w-auto"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Building innovative solutions to empower businesses in the
                digital age.
              </p>
              <motion.div className="flex space-x-4">
                {[
                  {
                    href: socialTeam.docovery.linkedin,
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: socialTeam.docovery.facebook,
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    href: socialTeam.docovery.instagram,
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    ),
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nous Contacter
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+216 54482172</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:davidbanitongwa@gmail.com">
                    davidbanitongwa@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Tunis, Tunisie</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Liens Rapides
              </h4>
              <ul className="space-y-4">
                {["Accueil", "À propos", "Services", "Équipe"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-4 text-sm">
                Restez informé de nos dernières actualités et mises à jour.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2.5 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {"S'abonner"}
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative pt-8 mt-16 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Docovery. Tous droits
                réservés.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {"Conditions d'utilisation"}
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
