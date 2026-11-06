"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle, useT } from "@/lib/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useT();

  const links = [
    { href: "/rooms", label: t("Rooms", "রুম") },
    { href: "/about", label: t("About", "আমাদের সম্পর্কে") },
    { href: "/contact", label: t("Contact", "যোগাযোগ") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 min-w-0">
          <img src="/images/logo-icon.png" alt="Pandora Home's logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-wide text-amber-500 whitespace-nowrap">PANDORA HOME&apos;S</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">Bachelor&apos;s Dream Stay</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-primary px-3 py-2">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Language + CTA */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link href="/login" className="hidden lg:block">
            <Button variant="ghost" size="sm">
              {t("Sign In", "সাইন ইন")}
            </Button>
          </Link>
          <Link href="/rooms" className="hidden sm:block">
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
              {t("Book Room Now", "রুম বুক করুন")}
            </Button>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1"
            aria-label={t("Menu", "মেনু")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col space-y-1 p-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-primary px-3 py-2">
                {l.label}
              </Link>
            ))}
            <Link href="/login" className="text-sm font-medium hover:text-primary px-3 py-2">
              {t("Sign In", "সাইন ইন")}
            </Link>
            <Link href="/rooms" className="px-3 py-2">
              <Button size="sm" className="w-full bg-amber-500 hover:bg-amber-600">
                {t("Book Room Now", "রুম বুক করুন")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
