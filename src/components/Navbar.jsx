"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Food", href: "#food" },
  { name: "Culture", href: "#performance" },
  { name: "Gallery", href: "#photo-gallery" },
  { name: "Stay", href: "#homestay" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav className="border-b border-white/15 bg-black/20 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="group flex flex-col leading-none text-white"
          >
            <span className="text-2xl font-semibold tracking-[0.18em] sm:text-3xl">
              SADDA PIND
            </span>

            <span className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/65 sm:text-[10px]">
              Where Punjab Lives
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-medium uppercase tracking-[0.12em] text-white/85 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#plan-visit"
            className="hidden rounded-full border border-white bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-transparent hover:text-white lg:inline-flex"
          >
            Book Your Visit
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-black lg:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#171512]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-white/85 transition hover:text-[#d6b27a]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#plan-visit"
            onClick={() => setIsOpen(false)}
            className="mt-6 rounded-full bg-white px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-[#d6b27a]"
          >
            Book Your Visit
          </Link>
        </div>
      </div>
    </header>
  );
}