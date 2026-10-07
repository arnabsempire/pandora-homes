import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ROOMS = [
  {
    id: 1,
    title: "Private Suite with Study Desk",
    type: "EXECUTIVE SINGLE",
    floor: "3RD FLOOR",
    price: 18500,
    available: true,
    image: "🛏️",
    amenities: ["Wi-Fi", "Study Desk", "Air Conditioning", "Private Bathroom"],
  },
  {
    id: 2,
    title: "Shared Dorm (4-bed)",
    type: "STANDARD DORM",
    floor: "2ND FLOOR",
    price: 8500,
    available: true,
    image: "🛏️🛏️",
    amenities: ["Wi-Fi", "Shared Kitchen", "Locker Storage"],
  },
  {
    id: 3,
    title: "Studio Suite (1-2 Person)",
    type: "STUDIO SUITE",
    floor: "4TH FLOOR",
    price: 12000,
    available: false,
    image: "🛏️",
    amenities: ["Wi-Fi", "Kitchenette", "Private Entrance"],
  },
];

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="py-12 md:py-16 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Our Rooms</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find the perfect room that matches your needs and lifestyle.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search rooms..."
                className="flex-1 px-4 py-2 border border-border/40 rounded-lg text-sm"
              />
              <select className="px-4 py-2 border border-border/40 rounded-lg text-sm">
                <option>All Room Types</option>
                <option>Private</option>
                <option>Shared</option>
                <option>Studio</option>
              </select>
              <select className="px-4 py-2 border border-border/40 rounded-lg text-sm">
                <option>Price: Any</option>
                <option>Under ৳10,000</option>
                <option>৳10,000 - ৳15,000</option>
                <option>Over ৳15,000</option>
              </select>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ROOMS.map((room) => (
                <div
                  key={room.id}
                  className="border border-border/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-6xl">
                    {room.image}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        {room.type} • {room.floor}
                      </p>
                      <h3 className="font-bold text-lg">{room.title}</h3>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <p className="text-2xl font-bold">
                        ৳{room.price.toLocaleString()}
                        <span className="text-sm text-muted-foreground font-normal">/mo</span>
                      </p>
                    </div>

                    {/* Status & Button */}
                    <div className="flex items-center gap-3">
                      {room.available && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                          ● AVAILABLE
                        </span>
                      )}
                      <Link href={`/rooms/${room.id}`} className="flex-1">
                        <Button
                          variant={room.available ? "default" : "outline"}
                          disabled={!room.available}
                          className="w-full"
                        >
                          {room.available ? "View Details" : "Unavailable"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
