import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RoomCard } from "@/components/room-card";
import { T } from "@/lib/i18n";
import { ROOMS } from "@/lib/rooms";

export function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-screen-2xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T en="Available Room Formats" bn="রুমের ধরন" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <T
              en="Choose from our range of comfortable living spaces designed for focused living and studying."
              bn="মনোযোগ দিয়ে থাকা ও পড়াশোনার জন্য তৈরি আমাদের আরামদায়ক রুমগুলো থেকে বেছে নিন।"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button variant="outline" size="lg">
              <T en="View All Rooms →" bn="সব রুম দেখুন →" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
