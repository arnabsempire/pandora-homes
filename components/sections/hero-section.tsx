import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Money, T } from "@/lib/i18n";
import { StaySearch } from "@/components/sections/stay-search";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-28 px-4">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              ● <T en="NOW ACCEPTING BOOKINGS" bn="এখন বুকিং চলছে" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <T en="A sharper way to" bn="থাকা, পড়াশোনা আর" /> <br />
              <span className="text-amber-500">
                <T en="live, study and belong." bn="একসাথে বেড়ে ওঠার ঠিকানা।" />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              <T
                en="Pandora Home's is Dhaka's premier male residence – built for focused students and young professionals. Private rooms, shared dorms, and studio suites, all with high-speed fiber, three home-cooked meals, and 24/7 biometric security."
                bn="প্যান্ডোরা হোম'স ঢাকার সেরা ছেলেদের আবাসন – মনোযোগী শিক্ষার্থী ও তরুণ পেশাজীবীদের জন্য তৈরি। প্রাইভেট রুম, শেয়ার্ড ডর্ম ও স্টুডিও স্যুট – সবখানে হাই-স্পিড ফাইবার ইন্টারনেট, তিনবেলা ঘরোয়া খাবার এবং ২৪/৭ বায়োমেট্রিক নিরাপত্তা।"
              />
            </p>

            {/* Check-in / check-out search */}
            <div className="mb-6">
              <StaySearch />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rooms">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto">
                  <T en="Browse Rooms →" bn="রুম দেখুন →" />
                </Button>
              </Link>
              <Link href="#amenities">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <T en="Daily Stay (Airbnb style)" bn="দৈনিক ভাড়ায় থাকুন" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg overflow-hidden">
              <img src="/images/rooms/dorm-bunk-main.jpg" alt="Room at Pandora Home's" className="w-full h-full object-cover" />
            </div>

            {/* Room Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-white text-slate-900 rounded-lg shadow-lg p-4 max-w-xs border border-border/40">
              <div className="flex items-start gap-3 mb-3">
                <img src="/images/rooms/executive-suite.jpg" alt="Private Suite" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="text-xs text-emerald-600 font-semibold">● <T en="AVAILABLE" bn="খালি আছে" /></p>
                  <h3 className="font-bold text-sm">
                    <T en="Private Suite with Study Desk" bn="স্টাডি ডেস্কসহ প্রাইভেট স্যুট" />
                  </h3>
                  <p className="text-xs text-slate-500">
                    <T en="EXECUTIVE SINGLE • 3RD FLOOR" bn="এক্সিকিউটিভ সিঙ্গেল • ৩য় তলা" />
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-2">
                <Money value={18500} />
                <span className="text-sm text-slate-500 font-normal"><T en="/mo" bn="/মাস" /></span>
              </p>
              <p className="text-xs text-slate-500">
                <T en="or" bn="অথবা" /> <Money value={1200} />
                <T en="/day" bn="/দিন" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
