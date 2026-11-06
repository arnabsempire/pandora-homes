"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "en" | "bn";
/** A piece of text in both languages. */
export type L = { en: string; bn: string };

const STORAGE_KEY = "pandora-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the visitor's saved choice after the page loads.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "bn" || saved === "en") setLangState(saved);
    } catch {
      /* storage unavailable: stay in English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Returns a picker: t({en, bn}) or t("English", "বাংলা"). */
export function useT() {
  const { lang } = useLang();
  return useCallback(
    (a: L | string, b?: string) => {
      if (typeof a === "string") return lang === "bn" && b !== undefined ? b : a;
      return lang === "bn" ? a.bn : a.en;
    },
    [lang]
  );
}

/** Renders the text in the current language. Usable from server components. */
export function T({ en, bn, t }: { en?: string; bn?: string; t?: L }) {
  const { lang } = useLang();
  const text = t ? t[lang] : lang === "bn" ? bn : en;
  return <>{text}</>;
}

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBnDigits(s: string | number) {
  return String(s).replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
}

/** Formats a number with thousand separators, in Bangla digits when Bangla is on. */
export function useNum() {
  const { lang } = useLang();
  return useCallback(
    (n: number | string) => {
      const s = typeof n === "number" ? n.toLocaleString("en-US") : n;
      return lang === "bn" ? toBnDigits(s) : s;
    },
    [lang]
  );
}

/** A number (or numeric text like "450+"), shown in Bangla digits when Bangla is on. */
export function Num({ value }: { value: number | string }) {
  const num = useNum();
  return <>{num(value)}</>;
}

/** Taka amount, e.g. ৳18,500 / ৳১৮,৫০০ */
export function Money({ value }: { value: number }) {
  const num = useNum();
  return <>৳{num(value)}</>;
}

/** The EN / বাংলা switch shown in the header. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-semibold ${className}`}
    >
      {(["en", "bn"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l ? "bg-amber-500 text-white" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "en" ? "EN" : "বাংলা"}
        </button>
      ))}
    </div>
  );
}
