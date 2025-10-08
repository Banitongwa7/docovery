import React from 'react';
import Link from 'next/link';

// NOTE: Using a typography-focused layout to simplify the structure 
// and maintain brand consistency without relying on an external image.

export default function NotFound() {
  return (
    // FIX: Centered layout, consistent white background, using min-h-screen
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6 sm:p-8">
      
      {/* FIX: Primary focus is the massive 404 number with the brand's gradient */}
      <h1 className="text-9xl md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">404</span>
      </h1>

      {/* FIX: Clearer, properly sized heading and French localization */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 text-center">
        Page Non Trouvée
      </h2>

      {/* FIX: Clear descriptive text */}
      <p className="max-w-lg text-lg text-gray-600 text-center mb-10">
        {"Désolé, nous n'avons pas pu trouver la page que vous recherchez. Elle a peut-être été déplacée ou supprimée."}
      </p>

      {/* FIX: Uses Next.js Link and button style matching the main landing page */}
      <Link href="/" passHref>
        <button
          type="button"
          className="inline-flex items-center px-10 py-3 rounded-full 
                     bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium 
                     hover:from-blue-700 hover:to-blue-600 transition-all duration-300 
                     shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        >
          {"Retourner à l'Accueil"}
        </button>
      </Link>
      
    </div>
  );
}