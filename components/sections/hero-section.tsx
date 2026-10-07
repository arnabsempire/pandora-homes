import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              ● NOW ACCEPTING BOOKINGS FOR SPRING 2024
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A sharper way to <br />
              <span className="text-amber-500">live, study and belong.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Pandora's Homes is Dhaka's premier male residence – built for focused students and young professionals. Private rooms, shared dorms, and studio suites, all with high-speed fiber, three home-cooked meals, and 24/7 biometric security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rooms">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto">
                  Browse Rooms →
                </Button>
              </Link>
              <Link href="#amenities">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Daily Stay (Airbnb style)
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                <div className="text-center">
                  <p className="text-white text-sm mb-4">Premium Room Image</p>
                  <div className="w-32 h-32 bg-slate-600 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-white text-4xl">🏠</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-border/40">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center text-3xl">🛏️</div>
                <div>
                  <p className="text-xs text-emerald-600 font-semibold">● AVAILABLE</p>
                  <h3 className="font-bold text-sm">Private Suite with Study Desk</h3>
                  <p className="text-xs text-muted-foreground">EXECUTIVE SINGLE • 3RD FLOOR</p>
                </div>
              </div>
              <p className="text-2xl font-bold mb-2">৳18,500<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
              <p className="text-xs text-muted-foreground">or ৳1,200/day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
