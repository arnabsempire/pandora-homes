import { GALLERY_IMAGES } from "@/lib/room-images";
import { T } from "@/lib/i18n";

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T en="Take a Look Inside" bn="ভেতরটা ঘুরে দেখুন" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <T en="Real photos of our rooms and shared spaces." bn="আমাদের রুম ও কমন এরিয়ার আসল ছবি।" />
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.src} className="aspect-square rounded-lg overflow-hidden bg-slate-200">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
