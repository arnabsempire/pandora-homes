import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = {
    id,
    title: "Private Suite with Study Desk",
    type: "EXECUTIVE SINGLE",
    floor: "3RD FLOOR",
    price: 18500,
    description:
      "A comfortable and spacious private room perfect for focused study and work. Features a dedicated study desk, modern amenities, and direct access to all facilities.",
    amenities: [
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Study Desk & Chair",
      "Private Bathroom",
      "Wardrobe Storage",
      "Premium Bedding",
      "Reading Lamp",
      "Power Outlets",
    ],
    rules: [
      "No smoking inside the room",
      "Quiet hours: 10 PM - 8 AM",
      "Guests allowed with permission",
      "No pets allowed",
      "Communal areas must be kept clean",
    ],
    images: ["🛏️", "📚", "🚿", "🏠"],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border/40 bg-muted/50">
          <div className="container max-w-screen-2xl text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/rooms" className="text-muted-foreground hover:text-primary">
              Rooms
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span>{room.title}</span>
          </div>
        </section>

        {/* Room Details */}
        <section className="py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Images */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-8xl">
                    {room.images[0]}
                  </div>
                  {room.images.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center text-5xl"
                    >
                      {img}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <div className="border border-border/40 rounded-lg p-6 sticky top-24">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">
                    {room.type}
                  </p>
                  <h1 className="text-2xl font-bold mb-4">{room.title}</h1>

                  <div className="mb-6">
                    <p className="text-3xl font-bold">
                      ৳{room.price.toLocaleString()}
                      <span className="text-base text-muted-foreground font-normal">/month</span>
                    </p>
                  </div>

                  <Link href={`/booking/${room.id}`} className="block mb-4">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Book This Room
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full mb-4">
                    Request Information
                  </Button>

                  <div className="pt-4 border-t border-border/40 text-sm text-muted-foreground">
                    <p>Floor: {room.floor}</p>
                    <p className="mt-2">Availability: Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                {/* Description */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">About This Room</h2>
                  <p className="text-muted-foreground leading-relaxed">{room.description}</p>
                </section>

                {/* Amenities */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Room Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg">✓</span>
                        <span className="text-muted-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* House Rules */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">House Rules</h2>
                  <ul className="space-y-3">
                    {room.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-lg mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
