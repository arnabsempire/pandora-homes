export function StatsSection() {
  const stats = [
    { value: "450+", label: "Residents", icon: "👥" },
    { value: "4.9★", label: "Avg. Rating", icon: "⭐" },
    { value: "1 Gbps", label: "Fiber Wi-Fi", icon: "📡" },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/40 bg-muted/50">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
