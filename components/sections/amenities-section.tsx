export function AmenitiesSection() {
  const amenities = [
    { icon: "📡", title: "High-Speed Fiber", description: "1 Gbps internet connection in every room" },
    { icon: "🍽️", title: "Home-Cooked Meals", description: "Three nutritious meals daily prepared by our chefs" },
    { icon: "🔒", title: "24/7 Security", description: "Biometric access and CCTV surveillance" },
    { icon: "🏋️", title: "Fitness Center", description: "Fully equipped gym and workout facilities" },
    { icon: "📚", title: "Study Spaces", description: "Quiet zones and common study areas" },
    { icon: "🌿", title: "Green Spaces", description: "Rooftop garden and recreational areas" },
  ];

  return (
    <section id="amenities" className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-screen-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comfortable, focused living and studying in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-4xl flex-shrink-0">{amenity.icon}</div>
              <div>
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
