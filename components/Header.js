"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sunscreen", label: "Sunscreen" },
    { href: "/skincare", label: "Skincare" },
    { href: "/haircare", label: "Haircare" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-teal-600 cursor-pointer">
                MamaEarth
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search & Menu Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-teal-600">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-3 rounded-lg transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto p-4 border-t">
            <p className="text-sm text-gray-500 text-center">
              © 2024 MamaEarth
            </p>
          </div>
        </div>
      </div>

      {/* Overlay - Click karke menu close ho jayega */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
}
