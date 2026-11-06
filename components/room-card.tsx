import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Money, T } from "@/lib/i18n";
import type { Room } from "@/lib/rooms";

export function RoomCard({ room, showTags = false }: { room: Room; showTags?: boolean }) {
  return (
    <div className="border border-border/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="aspect-video bg-slate-200 overflow-hidden">
        <img src={room.images[0]} alt={room.title.en} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
              <T t={room.type} /> • <T t={room.floor} />
            </p>
            <h3 className="font-bold text-lg"><T t={room.title} /></h3>
          </div>
          {room.available ? (
            <span className="shrink-0 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
              ● <T en="AVAILABLE" bn="খালি আছে" />
            </span>
          ) : (
            <span className="shrink-0 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
              <T en="FULLY BOOKED" bn="বুকড" />
            </span>
          )}
        </div>

        {showTags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {room.tags.map((tag) => (
              <span key={tag.en} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                <T t={tag} />
              </span>
            ))}
          </div>
        )}

        <div className="mb-6 mt-auto">
          <p className="text-2xl font-bold">
            <Money value={room.price} />
            <span className="text-sm text-muted-foreground font-normal"><T en="/mo" bn="/মাস" /></span>
          </p>
          <p className="text-xs text-muted-foreground">
            <T en="or" bn="অথবা" /> <Money value={room.priceDay} />
            <T en="/day" bn="/দিন" />
          </p>
        </div>

        <Link href={`/rooms/${room.id}`} className="block">
          <Button variant={room.available ? "default" : "outline"} className="w-full">
            <T en="View Details" bn="বিস্তারিত দেখুন" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
