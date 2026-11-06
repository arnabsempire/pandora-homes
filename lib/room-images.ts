// Real photos of Pandora Home's rooms (files live in /public/images/rooms)
const p = (name: string) => `/images/rooms/${name}.jpg`;

export const ROOM_IMAGES: Record<string, string[]> = {
  // 1 — Private Suite with Study Desk
  "1": [p("executive-suite"), p("study-desk-wardrobe"), p("single-room-sky"), p("common-hall")],
  // 2 — Shared Dorm
  "2": [p("dorm-bunk-main"), p("dorm-bunks-row"), p("dorm-bunk-2"), p("common-hall")],
  // 3 — Studio Suite (1-2 person)
  "3": [p("twin-room-1"), p("single-room-blue"), p("single-room-blue-2"), p("study-desk-wardrobe")],
};

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: p("executive-suite"), alt: "Executive suite with double bed and study desk" },
  { src: p("dorm-bunk-main"), alt: "Shared dorm with bunk beds" },
  { src: p("twin-room-1"), alt: "Twin room with two single beds" },
  { src: p("single-room-blue"), alt: "Private room with air conditioning" },
  { src: p("study-desk-wardrobe"), alt: "Study desk and lockable wardrobe" },
  { src: p("common-hall"), alt: "Common hall" },
  { src: p("single-room-sky"), alt: "Private room" },
  { src: p("dorm-bunks-row"), alt: "Dorm room with bunk beds" },
];
