import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedRooms() {
  const rooms = [
    {
      id: 1,
      title: "Private Suite with Study Desk",
      type: "EXECUTIVE SINGLE",
      floor: "3RD FLOOR",
      price: 18500,
      priceDay: 1200,
      image: "🛏️",
      available: true,
    },
    {
      id: 2,
      title: "Shared Dorm with Locker",
      type: "STANDARD DORM",
      floor: "2ND FLOOR",
      price: 8500,
      priceDay: 500,
      image: "🛏️🛏️",
      available: true,
    },
    {
      id: 3,
      title: "Studio Suite (1-2 Person)",
      type: "STUDIO SUITE",
      floor: "4TH FLOOR",
      price: 12000,
      priceDay: 800,
      image: "🛏️",
      available: false,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-screen-2xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Room Formats</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose from our range of comfortable living spaces designed for focused living and studying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
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
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                      {room.type} • {room.floor}
                    </p>
                    <h3 className="font-bold text-lg">{room.title}</h3>
                  </div>
                  {room.available && (
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                      ● AVAILABLE
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-2xl font-bold">
                    ৳{room.price.toLocaleString()}
                    <span className="text-sm text-muted-foreground font-normal">/mo</span>
                  </p>
                  <p className="text-xs text-muted-foreground">or ৳{room.priceDay.toLocaleString()}/day</p>
                </div>

                {/* Button */}
                <Link href={`/rooms/${room.id}`} className="block">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button variant="outline" size="lg">
              View All Rooms →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
