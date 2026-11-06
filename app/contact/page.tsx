"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Num, T, useT } from "@/lib/i18n";

export default function ContactPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const input = "w-full px-4 py-2 border border-border rounded-lg text-sm bg-background";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-12 md:py-16 border-b border-border/40">
          <div className="container max-w-screen-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4"><T en="Get in Touch" bn="যোগাযোগ করুন" /></h1>
            <p className="text-lg text-muted-foreground">
              <T en="Have questions? We'd love to hear from you." bn="কোনো প্রশ্ন আছে? আমাদের জানান।" />
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold mb-2">📧 <T en="Email" bn="ইমেইল" /></h3>
                    <p className="text-muted-foreground">info@pandorashomes.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📞 <T en="Phone" bn="ফোন" /></h3>
                    <p className="text-muted-foreground"><Num value="+880 1234 567890" /></p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📍 <T en="Address" bn="ঠিকানা" /></h3>
                    <p className="text-muted-foreground"><T en="Dhaka, Bangladesh" bn="ঢাকা, বাংলাদেশ" /></p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🕒 <T en="Hours" bn="সময়সূচি" /></h3>
                    <p className="text-muted-foreground">
                      <T en="Monday - Friday: 9AM - 6PM" bn="সোমবার - শুক্রবার: সকাল ৯টা - সন্ধ্যা ৬টা" />
                      <br />
                      <T en="Saturday: 10AM - 4PM" bn="শনিবার: সকাল ১০টা - বিকাল ৪টা" />
                      <br />
                      <T en="Sunday: Closed" bn="রবিবার: বন্ধ" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                {sent && (
                  <p className="mb-6 rounded-lg bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">
                    <T
                      en="Thank you for your message! We'll get back to you soon."
                      bn="আপনার বার্তার জন্য ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব।"
                    />
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2"><T en="Name" bn="নাম" /></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder={t("Your name", "আপনার নাম")} className={input} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2"><T en="Email" bn="ইমেইল" /></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="your@email.com" className={input} required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2"><T en="Subject" bn="বিষয়" /></label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className={input} required>
                      <option value="">{t("Select a subject", "বিষয় বেছে নিন")}</option>
                      <option value="booking">{t("Booking Inquiry", "বুকিং সংক্রান্ত")}</option>
                      <option value="general">{t("General Question", "সাধারণ প্রশ্ন")}</option>
                      <option value="feedback">{t("Feedback", "মতামত")}</option>
                      <option value="other">{t("Other", "অন্যান্য")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2"><T en="Message" bn="বার্তা" /></label>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                      placeholder={t("Your message...", "আপনার বার্তা...")} rows={6}
                      className={`${input} resize-none`} required />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    <T en="Send Message" bn="বার্তা পাঠান" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
