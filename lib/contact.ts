import type { L } from "./i18n";

// Real contact details from the Pandora Home's flyer.
export const PHONES = ["01805534187", "01805534164", "01805534163"];

export const ADDRESS: L = {
  en: "11/8-C, Free School Street, Panthapath, Dhaka (opposite Bashundhara City Shopping Mall)",
  bn: "১১/৮-সি, ফ্রি স্কুল স্ট্রিট, পান্থপথ, ঢাকা (বসুন্ধরা সিটি শপিং মলের বিপরীতে)",
};

export const ADDRESS_NOTE: L = {
  en: "10–12 minutes from any coaching centre in Farmgate",
  bn: "ফার্মগেটের যেকোনো কোচিং থেকে ১০/১২ মিনিটের দূরত্বে",
};

export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("11/8-C Free School Street, Panthapath, Dhaka");

/** 01805534187 -> 01805-534187 */
export const prettyPhone = (p: string) => `${p.slice(0, 5)}-${p.slice(5)}`;
