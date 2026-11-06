import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RoomCard } from "@/components/room-card";
import { StaySearch } from "@/components/sections/stay-search";
import { T } from "@/lib/i18n";
import { ROOMS } from "@/lib/rooms";

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="py-12 md:py-16 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <T en="Browse Our Rooms" bn="আমাদের রুমগুলো দেখুন" />
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              <T
                en="Pick your dates, then find the room that matches your needs and lifestyle."
                bn="তারিখ বেছে নিন, তারপর আপনার প্রয়োজন ও পছন্দমতো রুম খুঁজে নিন।"
              />
            </p>
            <StaySearch goToRooms={false} />
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} showTags />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
