// Remembers the dates a visitor picked, so they carry from the home page
// search to the booking form (this browser tab only).
export type StayDates = { from?: Date; to?: Date };

const KEY = "pandora-stay-dates";

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const fromISO = (s?: string) => {
  if (!s) return undefined;
  const [y, m, d] = s.split("-").map(Number);
  if (!y || !m || !d) return undefined;
  return new Date(y, m - 1, d);
};

export function saveStayDates(r: StayDates) {
  try {
    sessionStorage.setItem(
      KEY,
      JSON.stringify({ from: r.from ? toISO(r.from) : undefined, to: r.to ? toISO(r.to) : undefined })
    );
  } catch {
    /* ignore */
  }
}

export function loadStayDates(): StayDates {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return {};
    const v = JSON.parse(raw);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const from = fromISO(v.from);
    const to = fromISO(v.to);
    // Drop dates that are now in the past.
    if (from && from < today) return {};
    return { from, to };
  } catch {
    return {};
  }
}

export function nightsBetween(from?: Date, to?: Date) {
  if (!from || !to) return 0;
  return Math.round((to.getTime() - from.getTime()) / 86400000);
}
