"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 z-50 shadow-2xl shadow-black/10">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-8 w-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-sky-400/25">
                <Image
                  src="/a.svg"
                  alt="SafeReport Logo"
                  width={20}
                  height={20}
                  className="text-white"
                />
              </div>
              <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                StudentShield
              </span>
            </Link>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/submit-report"
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm group"
              >
                Submit Report
                <div className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/track-report"
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm group"
              >
                Track Report
                <div className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/how-it-works"
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-sm group"
              >
                How It Works
                <div className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Emergency Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/20 text-sm font-medium text-red-400 hover:text-red-300 hover:border-red-400/30 hover:bg-red-500/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="hidden sm:inline">Emergency: 119</span>
                <span className="sm:hidden">119</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2.5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/20"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}