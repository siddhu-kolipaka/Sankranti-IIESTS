// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const mobileIconPillStyle =
    "h-14 w-14 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full flex items-center justify-center";

  return (
    <>
      <nav
        className="
          h-14
          bg-white/10 
          backdrop-blur-xl 
          border border-white/20 
          shadow-lg
          fixed top-4 left-4 right-4 md:left-16 md:right-16 z-50
          rounded-full
          hidden md:flex items-center justify-between px-6
        "
      >
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/LOGO.svg"
            alt="Logo"
            width={45}
            height={45}
            priority
          />
          <span className="text-white font-semibold text-lg">
            Sankranthi-IIESTS
          </span>
        </Link>
        <div className="flex gap-6 text-white text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/bhogi">Bhogi</Link>
          <Link href="/sankranti">Sankranti</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </nav>
      <Link
        href="/"
        onClick={closeMenu}
        className={`
          ${mobileIconPillStyle}
          fixed top-4 left-4 z-50
          md:hidden
        `}
      >
        <Image
          src="/LOGO.svg"
          alt="Logo"
          width={40} 
          height={40}
          priority
        />
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`
          ${mobileIconPillStyle}
          fixed top-4 right-4 z-50
          md:hidden text-white
        `}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <div
          className="
            md:hidden
            fixed top-20 left-4 right-4 z-40
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            shadow-lg
            rounded-2xl
            p-6
          "
        >
          <div className="flex flex-col items-center gap-4 text-white text-lg font-medium">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/bhogi" onClick={closeMenu}>
              Bhogi
            </Link>
            <Link href="/sankranti" onClick={closeMenu}>
              Sankranti
            </Link>
            <Link href="/teams" onClick={closeMenu}>
              Teams
            </Link>
            <Link href="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}