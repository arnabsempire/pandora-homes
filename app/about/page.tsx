import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-16 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pandora's Homes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A premier male residence in Dhaka, designed for focused students and young professionals.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pandora's Homes was founded with a mission to provide high-quality residential accommodation for focused students and young professionals in Dhaka. We believe that a comfortable living space is essential for academic and professional success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our facilities are designed with resident well-being in mind, offering private spaces for concentration and study, as well as communal areas for social connection and community building.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-8xl">
                🏢
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 border border-border/40">
                <p className="text-4xl mb-4">🎯</p>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from facilities to services.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 border border-border/40">
                <p className="text-4xl mb-4">🤝</p>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a strong community where residents support and inspire each other.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 border border-border/40">
                <p className="text-4xl mb-4">🌱</p>
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  We believe in personal and professional growth of every resident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold">450+</p>
                <p className="text-muted-foreground mt-2">Active Residents</p>
              </div>
              <div>
                <p className="text-4xl font-bold">50+</p>
                <p className="text-muted-foreground mt-2">Rooms Available</p>
              </div>
              <div>
                <p className="text-4xl font-bold">4.9★</p>
                <p className="text-muted-foreground mt-2">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold">10+</p>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
