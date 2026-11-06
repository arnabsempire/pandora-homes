import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Num, T } from "@/lib/i18n";

const VALUES = [
  {
    icon: "🎯",
    title: { en: "Excellence", bn: "উৎকর্ষ" },
    text: {
      en: "We strive for excellence in everything we do, from facilities to services.",
      bn: "সুবিধা থেকে সেবা – সবকিছুতেই আমরা সেরাটা দিতে চেষ্টা করি।",
    },
  },
  {
    icon: "🤝",
    title: { en: "Community", bn: "কমিউনিটি" },
    text: {
      en: "We foster a strong community where residents support and inspire each other.",
      bn: "আমরা এমন একটি কমিউনিটি গড়ি যেখানে বাসিন্দারা একে অপরকে সাহায্য ও অনুপ্রাণিত করেন।",
    },
  },
  {
    icon: "🌱",
    title: { en: "Growth", bn: "এগিয়ে চলা" },
    text: {
      en: "We believe in personal and professional growth of every resident.",
      bn: "আমরা প্রত্যেক বাসিন্দার ব্যক্তিগত ও পেশাগত উন্নতিতে বিশ্বাস করি।",
    },
  },
];

const STATS = [
  { value: "450+", label: { en: "Active Residents", bn: "বর্তমান বাসিন্দা" } },
  { value: "50+", label: { en: "Rooms Available", bn: "রুম" } },
  { value: "4.9★", label: { en: "Average Rating", bn: "গড় রেটিং" } },
  { value: "10+", label: { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" } },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-12 md:py-16 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <T en="About Pandora Home's" bn="প্যান্ডোরা হোম'স সম্পর্কে" />
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              <T
                en="A premier male residence in Dhaka, designed for focused students and young professionals."
                bn="ঢাকার একটি সেরা ছেলেদের আবাসন, মনোযোগী শিক্ষার্থী ও তরুণ পেশাজীবীদের জন্য তৈরি।"
              />
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6"><T en="Our Story" bn="আমাদের গল্প" /></h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <T
                    en="Pandora Home's was founded with a mission to provide high-quality residential accommodation for focused students and young professionals in Dhaka. We believe that a comfortable living space is essential for academic and professional success."
                    bn="ঢাকায় মনোযোগী শিক্ষার্থী ও তরুণ পেশাজীবীদের জন্য মানসম্মত আবাসন দেওয়ার লক্ষ্য নিয়ে প্যান্ডোরা হোম'স-এর যাত্রা শুরু। আমরা বিশ্বাস করি, পড়াশোনা ও পেশায় সফল হতে আরামদায়ক থাকার জায়গা অপরিহার্য।"
                  />
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <T
                    en="Our facilities are designed with resident well-being in mind, offering private spaces for concentration and study, as well as communal areas for social connection and community building."
                    bn="বাসিন্দাদের সুস্থতার কথা মাথায় রেখে আমাদের সুবিধাগুলো সাজানো – মনোযোগ ও পড়াশোনার জন্য নিজস্ব জায়গা, আর মেলামেশা ও কমিউনিটি গড়ার জন্য কমন এরিয়া।"
                  />
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-slate-200">
                <img src="/images/rooms/common-hall.jpg" alt="Common hall at Pandora Home's" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center"><T en="Our Values" bn="আমাদের মূল্যবোধ" /></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((v) => (
                <div key={v.icon} className="bg-background rounded-lg p-8 border border-border/40">
                  <p className="text-4xl mb-4">{v.icon}</p>
                  <h3 className="text-xl font-semibold mb-2"><T t={v.title} /></h3>
                  <p className="text-muted-foreground"><T t={v.text} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((s) => (
                <div key={s.value}>
                  <p className="text-4xl font-bold"><Num value={s.value} /></p>
                  <p className="text-muted-foreground mt-2"><T t={s.label} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
