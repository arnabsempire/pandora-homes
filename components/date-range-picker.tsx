"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { bn } from "date-fns/locale";
import { format } from "date-fns";
import "react-day-picker/style.css";
import { toBnDigits, useLang, useT } from "@/lib/i18n";
import type { StayDates } from "@/lib/stay-dates";

type Props = {
  value: StayDates;
  onChange: (v: StayDates) => void;
  /** "bar": rounded search bar with a pop-up calendar. "form": two fields with the calendar opening below. */
  variant?: "bar" | "form";
  /** Shows a Search button (bar variant). */
  onSearch?: () => void;
};

function useMonthsToShow() {
  const [n, setN] = useState(2);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setN(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return n;
}

export function DateRangePicker({ value, onChange, variant = "bar", onSearch }: Props) {
  const { lang } = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const months = useMonthsToShow();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Which field is "active": check-in until a start date is chosen, then check-out.
  const active: "in" | "out" | null = !open ? null : value.from && !value.to ? "out" : "in";

  // Close when clicking outside or pressing Escape (bar variant pops over the page).
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const fmt = (d?: Date) => {
    if (!d) return t("Add dates", "তারিখ দিন");
    const s = format(d, "EEE, d MMM", lang === "bn" ? { locale: bn } : undefined);
    return lang === "bn" ? toBnDigits(s) : s;
  };

  const select = (r: DateRange | undefined) => onChange({ from: r?.from, to: r?.to });

  const calendar = (
    <div className="pandora-calendar">
      <DayPicker
        mode="range"
        selected={{ from: value.from, to: value.to }}
        onSelect={select}
        numberOfMonths={months}
        min={1}
        excludeDisabled
        disabled={{ before: today }}
        startMonth={today}
        defaultMonth={value.from ?? today}
        locale={lang === "bn" ? bn : undefined}
        numerals={lang === "bn" ? "beng" : "latn"}
        weekStartsOn={0}
      />
      <div className="flex items-center justify-between border-t border-border pt-3 mt-1">
        <button
          type="button"
          onClick={() => onChange({})}
          className="text-sm font-semibold underline underline-offset-2 hover:text-amber-600"
        >
          {t("Clear dates", "তারিখ মুছুন")}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-2 text-sm font-semibold text-white"
        >
          {t("Done", "ঠিক আছে")}
        </button>
      </div>
    </div>
  );

  const field = (which: "in" | "out", label: string, d?: Date, extra = "") => (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-expanded={open}
      className={`text-left transition-colors ${extra} ${
        active === which ? "bg-background shadow-md" : "hover:bg-black/5 dark:hover:bg-white/5"
      }`}
    >
      <span className={`block text-xs font-semibold ${active === which ? "text-amber-600" : ""}`}>{label}</span>
      <span className={`block text-sm ${d ? "font-medium" : "text-muted-foreground"}`}>{fmt(d)}</span>
    </button>
  );

  if (variant === "form") {
    return (
      <div ref={rootRef}>
        <div className="grid grid-cols-2 gap-3">
          {field("in", t("Check in", "চেক-ইন"), value.from, "rounded-lg border border-border px-4 py-2.5")}
          {field("out", t("Check out", "চেক-আউট"), value.to, "rounded-lg border border-border px-4 py-2.5")}
        </div>
        {open && <div className="mt-3 rounded-xl border border-border p-3 md:p-4 overflow-x-auto">{calendar}</div>}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative w-full max-w-xl">
      <div className="flex items-center rounded-full border border-border bg-muted/70 p-1.5 shadow-sm">
        {field("in", t("Check in", "চেক-ইন"), value.from, "flex-1 min-w-0 rounded-full px-4 sm:px-5 py-2")}
        <span className="h-8 w-px bg-border" aria-hidden />
        {field("out", t("Check out", "চেক-আউট"), value.to, "flex-1 min-w-0 rounded-full px-4 sm:px-5 py-2")}
        {onSearch && (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onSearch();
            }}
            className="ml-1 flex shrink-0 items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-4 sm:px-5 py-3 text-sm font-semibold text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <span className="hidden sm:inline">{t("Search", "খুঁজুন")}</span>
          </button>
        )}
      </div>
      {open && (
        <div className="absolute left-0 top-full z-40 mt-3 w-max max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background p-4 md:p-6 shadow-2xl">
          {calendar}
        </div>
      )}
    </div>
  );
}
