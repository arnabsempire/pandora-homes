import type { L } from "./i18n";
import { ROOM_IMAGES } from "./room-images";

export type Room = {
  id: string;
  title: L;
  type: L;
  floor: L;
  price: number; // per month, Taka
  priceDay: number; // per night, Taka
  available: boolean;
  description: L;
  tags: L[]; // short list for room cards
  amenities: L[]; // full list for the room page
  images: string[];
};

const A = {
  wifi: { en: "High-Speed Wi-Fi", bn: "হাই-স্পিড ওয়াই-ফাই" },
  ac: { en: "Air Conditioning", bn: "এয়ার কন্ডিশনার" },
  desk: { en: "Study Desk & Chair", bn: "স্টাডি ডেস্ক ও চেয়ার" },
  bath: { en: "Private Bathroom", bn: "নিজস্ব বাথরুম" },
  wardrobe: { en: "Wardrobe Storage", bn: "ওয়ার্ডরোব" },
  bedding: { en: "Premium Bedding", bn: "প্রিমিয়াম বিছানা" },
  lamp: { en: "Reading Lamp", bn: "রিডিং ল্যাম্প" },
  power: { en: "Power Outlets", bn: "পাওয়ার সকেট" },
  bunk: { en: "Bunk Bed", bn: "বাঙ্ক বেড" },
  locker: { en: "Locker Storage", bn: "লকার" },
  kitchen: { en: "Shared Kitchen", bn: "শেয়ার্ড কিচেন" },
  twoBeds: { en: "Two Single Beds", bn: "দুটি সিঙ্গেল বেড" },
  kitchenette: { en: "Kitchenette", bn: "ছোট রান্নাঘর" },
  entrance: { en: "Private Entrance", bn: "আলাদা প্রবেশপথ" },
};

export const ROOMS: Room[] = [
  {
    id: "1",
    title: { en: "Private Suite with Study Desk", bn: "স্টাডি ডেস্কসহ প্রাইভেট স্যুট" },
    type: { en: "Executive Single", bn: "এক্সিকিউটিভ সিঙ্গেল" },
    floor: { en: "3rd Floor", bn: "৩য় তলা" },
    price: 18500,
    priceDay: 1200,
    available: true,
    description: {
      en: "A comfortable and spacious private room perfect for focused study and work. Features a dedicated study desk, modern amenities, and direct access to all facilities.",
      bn: "মনোযোগ দিয়ে পড়াশোনা ও কাজের জন্য আরামদায়ক ও প্রশস্ত প্রাইভেট রুম। রয়েছে আলাদা স্টাডি ডেস্ক, আধুনিক সুবিধা এবং সব সুবিধায় সরাসরি প্রবেশাধিকার।",
    },
    tags: [A.wifi, { en: "Study Desk", bn: "স্টাডি ডেস্ক" }, A.ac, A.bath],
    amenities: [A.wifi, A.ac, A.desk, A.bath, A.wardrobe, A.bedding, A.lamp, A.power],
    images: ROOM_IMAGES["1"],
  },
  {
    id: "2",
    title: { en: "Shared Dorm (4-bed)", bn: "শেয়ার্ড ডর্ম (৪ বেড)" },
    type: { en: "Standard Dorm", bn: "স্ট্যান্ডার্ড ডর্ম" },
    floor: { en: "2nd Floor", bn: "২য় তলা" },
    price: 8500,
    priceDay: 500,
    available: true,
    description: {
      en: "An affordable shared dorm with sturdy bunk beds and a friendly community atmosphere. Each resident gets their own bed and locker storage.",
      bn: "মজবুত বাঙ্ক বেড ও বন্ধুত্বপূর্ণ পরিবেশসহ সাশ্রয়ী শেয়ার্ড ডর্ম। প্রত্যেক বাসিন্দা পাবেন নিজস্ব বেড ও লকার।",
    },
    tags: [A.wifi, A.kitchen, A.locker],
    amenities: [A.wifi, A.bunk, A.locker, A.kitchen, A.power],
    images: ROOM_IMAGES["2"],
  },
  {
    id: "3",
    title: { en: "Studio Suite (1-2 Person)", bn: "স্টুডিও স্যুট (১-২ জন)" },
    type: { en: "Studio Suite", bn: "স্টুডিও স্যুট" },
    floor: { en: "4th Floor", bn: "৪র্থ তলা" },
    price: 12000,
    priceDay: 800,
    available: false,
    description: {
      en: "A bright studio suite for one or two people, with separate beds and room to study and relax.",
      bn: "এক বা দুজনের জন্য আলো-ঝলমলে স্টুডিও স্যুট, আলাদা বেড এবং পড়াশোনা ও বিশ্রামের পর্যাপ্ত জায়গাসহ।",
    },
    tags: [A.wifi, A.kitchenette, A.entrance],
    amenities: [A.wifi, A.twoBeds, A.kitchenette, A.entrance, A.wardrobe],
    images: ROOM_IMAGES["3"],
  },
];

export function getRoom(id: string): Room {
  return ROOMS.find((r) => r.id === id) ?? ROOMS[0];
}

export const HOUSE_RULES: L[] = [
  { en: "No smoking inside the room", bn: "রুমের ভেতরে ধূমপান নিষেধ" },
  { en: "Quiet hours: 10 PM - 8 AM", bn: "নীরবতার সময়: রাত ১০টা - সকাল ৮টা" },
  { en: "Guests allowed with permission", bn: "অনুমতি সাপেক্ষে অতিথি আসতে পারবেন" },
  { en: "No pets allowed", bn: "পোষা প্রাণী রাখা যাবে না" },
  { en: "Communal areas must be kept clean", bn: "সাধারণ জায়গা পরিষ্কার রাখতে হবে" },
];

/**
 * Price for a stay: nightly rate for short stays,
 * monthly rate (pro-rated) for stays of 30 nights or more.
 */
export function stayPrice(room: Room, nights: number) {
  if (nights <= 0) return 0;
  if (nights < 30) return nights * room.priceDay;
  return Math.round((nights / 30) * room.price);
}
