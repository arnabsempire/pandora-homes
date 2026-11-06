import { Num, T } from "@/lib/i18n";

export function StatsSection() {
  const stats = [
    { value: "450+", en: "Residents", bn: "বাসিন্দা" },
    { value: "4.9★", en: "Avg. Rating", bn: "গড় রেটিং" },
    { value: "1 Gbps", en: "Fiber Wi-Fi", bn: "ফাইবার ওয়াই-ফাই" },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/40 bg-muted/50">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.en} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2"><Num value={stat.value} /></p>
              <p className="text-muted-foreground"><T en={stat.en} bn={stat.bn} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
