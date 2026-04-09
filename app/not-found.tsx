import React from 'react';
import Link from 'next/link';

// NOTE: Using a typography-focused layout to simplify the structure 
// and maintain brand consistency without relying on an external image.

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white p-6 sm:p-8 overflow-hidden">
      
      {/* Synck Aesthetic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-float-slow delay-1000" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold tracking-tighter leading-none mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">404</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
          Page Non Trouvée
        </h2>

        <p className="max-w-lg mx-auto text-lg text-gray-400 mb-12">
          {"Désolé, nous n'avons pas pu trouver la page que vous recherchez. Elle a peut-être été déplacée ou n'existe plus."}
        </p>

        <Link href="/" passHref>
          <button
            type="button"
            className="group relative inline-flex items-center px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {"Retourner à l'Accueil"}
          </button>
        </Link>
      </div>
    </div>
  );
}