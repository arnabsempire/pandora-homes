import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Money, T } from "@/lib/i18n";
import { getRoom, HOUSE_RULES } from "@/lib/rooms";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = getRoom(id);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border/40 bg-muted/50">
          <div className="container max-w-screen-2xl text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              <T en="Home" bn="হোম" />
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/rooms" className="text-muted-foreground hover:text-primary">
              <T en="Rooms" bn="রুম" />
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span><T t={room.title} /></span>
          </div>
        </section>

        {/* Room Details */}
        <section className="py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Images */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 aspect-video bg-slate-200 rounded-lg overflow-hidden">
                    <img src={room.images[0]} alt={room.title.en} className="w-full h-full object-cover" />
                  </div>
                  {room.images.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                      <img src={img} alt={`${room.title.en} photo ${idx + 2}`} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <div className="border border-border/40 rounded-lg p-6 sticky top-24">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">
                    <T t={room.type} />
                  </p>
                  <h1 className="text-2xl font-bold mb-4"><T t={room.title} /></h1>

                  <div className="mb-6">
                    <p className="text-3xl font-bold">
                      <Money value={room.price} />
                      <span className="text-base text-muted-foreground font-normal"><T en="/month" bn="/মাস" /></span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <T en="or" bn="অথবা" /> <Money value={room.priceDay} />
                      <T en="/day" bn="/দিন" />
                    </p>
                  </div>

                  {room.available ? (
                    <Link href={`/booking/${room.id}`} className="block mb-4">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                        <T en="Book This Room" bn="এই রুমটি বুক করুন" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full mb-4">
                      <T en="Fully Booked" bn="বুকড" />
                    </Button>
                  )}

                  <Link href="/contact" className="block mb-4">
                    <Button variant="outline" className="w-full">
                      <T en="Request Information" bn="তথ্য জানতে চান" />
                    </Button>
                  </Link>

                  <div className="pt-4 border-t border-border/40 text-sm text-muted-foreground">
                    <p>
                      <T en="Floor:" bn="তলা:" /> <T t={room.floor} />
                    </p>
                    <p className="mt-2">
                      <T en="Availability:" bn="অবস্থা:" />{" "}
                      {room.available ? <T en="Available" bn="খালি আছে" /> : <T en="Fully booked" bn="বুকড" />}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4"><T en="About This Room" bn="রুম সম্পর্কে" /></h2>
                  <p className="text-muted-foreground leading-relaxed"><T t={room.description} /></p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6"><T en="Room Amenities" bn="রুমের সুবিধাসমূহ" /></h2>
                  <div className="grid grid-cols-2 gap-4">
                    {room.amenities.map((amenity) => (
                      <div key={amenity.en} className="flex items-center gap-3">
                        <span className="text-lg">✓</span>
                        <span className="text-muted-foreground"><T t={amenity} /></span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6"><T en="House Rules" bn="নিয়মকানুন" /></h2>
                  <ul className="space-y-3">
                    {HOUSE_RULES.map((rule) => (
                      <li key={rule.en} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-lg mt-1">•</span>
                        <span><T t={rule} /></span>
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
