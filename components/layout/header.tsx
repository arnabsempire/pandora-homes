"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">🏠</span>
          </div>
          <span className="font-bold text-lg">PANDORA'S HOMES</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/rooms" className="text-sm font-medium hover:text-primary px-3 py-2">
            Rooms
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary px-3 py-2">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary px-3 py-2">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/rooms">
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
              Book Room Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col space-y-1 p-4">
            <Link href="/rooms" className="text-sm font-medium hover:text-primary px-3 py-2">
              Rooms
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary px-3 py-2">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary px-3 py-2">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
