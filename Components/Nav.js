"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import { MapPin, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Roofs", path: "/vitrectomy-rentals" },
  { name: "Pricing", path: "/price" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact-us" },
];

const serviceAreas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Milton",
  "Ajax",
  "Pickering",
  "Oshawa",
  "Whitby",
  "Scarborough",
  "North York",
  "Etobicoke",
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentArea, setCurrentArea] = useState(0);
  const router = useRouter();

  const menuRef = useRef();
  const toggleRef = useRef();

  const currentAreas = useMemo(
    () => ({
      tablet: `${serviceAreas[currentArea]}, ${serviceAreas[currentArea + 1]}`,
      desktop: `${serviceAreas[currentArea]}, ${
        serviceAreas[currentArea + 1]
      }, ${serviceAreas[currentArea + 2]}`,
    }),
    [currentArea]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArea((prev) => (prev + 1) % serviceAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Close menu when clicking outside (excluding toggle button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed w-full z-50">
      {/* Banner */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span>🇨🇦 Your Roofing Experts</span>
              <span className="hidden sm:inline md:hidden font-bold">
                {currentAreas.tablet}
              </span>
              <div className="hidden md:flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Serving Across</span>
                </div>
                <span className="font-bold">{currentAreas.desktop}</span>
                <span className="hidden lg:inline text-sm">
                  and more...
                </span>
              </div>
            </div>
            <a
              href="tel:+1-2896339933"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>289-633-9933</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white shadow-sm transition-shadow ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/roof-icons.png" alt="Roof Icon" width={30} height={30} />
              <span className="text-xl font-semibold text-blue-900">
                Blue Roofs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className={`text-sm font-medium transition-colors ${
                    router.pathname === link.path
                      ? "text-blue-900"
                      : "text-gray-600 hover:text-blue-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="hidden lg:flex items-center px-6 py-2 bg-blue-900 text-white 
                rounded-full font-medium hover:bg-blue-800 transition-colors"
            >
              Book Free Evaluation
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={toggleRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className={`block px-4 py-2 text-sm font-medium ${
                    router.pathname === link.path
                      ? "text-blue-900 bg-blue-50"
                      : "text-gray-600 hover:text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+1-2896339933"
                className="block px-4 py-3 mt-2 bg-blue-900 text-white text-sm font-medium rounded-md"
              >
                Book Free Evaluation: 289-633-9933
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
