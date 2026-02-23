"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";
import { Links } from "@/utils/socialTeam";

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: "/", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "À Propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
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
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex-shrink-0 flex items-center">
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
                                className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${isScrolled ? "" : "text-white"
                                    }`}
                            >
                                Docovery
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${isScrolled ? "text-gray-700" : "text-white"
                                    }`}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href={Links.meeting}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
                        >
                            Prendre Rendez-vous
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
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
                className={`md:hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100/20`}
            >
                <div className="px-4 py-6 space-y-4">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 border-b border-gray-100 last:border-b-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href={Links.meeting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium mt-4 text-center block hover:shadow-lg transition-all duration-300"
                    >
                        Prendre Rendez-vous
                    </Link>
                </div>
            </div>
        </nav>
    );
}
