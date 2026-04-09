import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-900 p-6 sm:p-8 overflow-hidden">
      
      {/* Synck Aesthetic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold tracking-tighter leading-none mb-4">
          <span className="text-blue-600">404</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 tracking-tight text-gray-900">
          Page Non Trouvée
        </h2>

        <p className="max-w-lg mx-auto text-lg text-gray-600 mb-12">
          {"Désolé, nous n'avons pas pu trouver la page que vous recherchez. Elle a peut-être été déplacée ou n'existe plus."}
        </p>

        <Link href="/" passHref>
          <button
            type="button"
            className="group relative inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {"Retourner à l'Accueil"}
          </button>
        </Link>
      </div>
    </div>
  );
}