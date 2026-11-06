import { T } from "@/lib/i18n";

export function AmenitiesSection() {
  const amenities = [
    {
      icon: "📡",
      title: { en: "High-Speed Fiber", bn: "হাই-স্পিড ফাইবার" },
      description: { en: "1 Gbps internet connection in every room", bn: "প্রতিটি রুমে ১ জিবিপিএস ইন্টারনেট সংযোগ" },
    },
    {
      icon: "🍽️",
      title: { en: "Home-Cooked Meals", bn: "ঘরোয়া খাবার" },
      description: { en: "Three nutritious meals daily prepared by our chefs", bn: "আমাদের রাঁধুনিদের রান্না করা প্রতিদিন তিনবেলা পুষ্টিকর খাবার" },
    },
    {
      icon: "🔒",
      title: { en: "24/7 Security", bn: "২৪/৭ নিরাপত্তা" },
      description: { en: "Biometric access and CCTV surveillance", bn: "বায়োমেট্রিক প্রবেশ ও সিসিটিভি নজরদারি" },
    },
    {
      icon: "🏋️",
      title: { en: "Fitness Center", bn: "ফিটনেস সেন্টার" },
      description: { en: "Fully equipped gym and workout facilities", bn: "সম্পূর্ণ সজ্জিত জিম ও ব্যায়ামের সুবিধা" },
    },
    {
      icon: "📚",
      title: { en: "Study Spaces", bn: "পড়াশোনার জায়গা" },
      description: { en: "Quiet zones and common study areas", bn: "নিরিবিলি জোন ও সাধারণ পড়ার জায়গা" },
    },
    {
      icon: "🌿",
      title: { en: "Green Spaces", bn: "সবুজ পরিবেশ" },
      description: { en: "Rooftop garden and recreational areas", bn: "ছাদবাগান ও বিনোদনের জায়গা" },
    },
  ];

  return (
    <section id="amenities" className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-screen-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T en="Premium Amenities" bn="প্রিমিয়াম সুবিধাসমূহ" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <T
              en="Everything you need for comfortable, focused living and studying in one place."
              bn="আরামে থাকা ও মনোযোগ দিয়ে পড়াশোনার জন্য যা যা দরকার, সব এক জায়গায়।"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.icon} className="flex gap-4">
              <div className="text-4xl flex-shrink-0">{amenity.icon}</div>
              <div>
                <h3 className="font-semibold mb-2"><T t={amenity.title} /></h3>
                <p className="text-muted-foreground text-sm"><T t={amenity.description} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
