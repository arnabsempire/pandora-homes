"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DateRangePicker } from "@/components/date-range-picker";
import { Money, Num, T, useT } from "@/lib/i18n";
import { getRoom, stayPrice } from "@/lib/rooms";
import { loadStayDates, nightsBetween, saveStayDates, type StayDates } from "@/lib/stay-dates";

export default function BookingForm() {
  const params = useParams<{ id: string }>();
  const room = getRoom(params?.id ?? "1");
  const t = useT();

  const [dates, setDates] = useState<StayDates>({});
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  // Pick up dates chosen in the search bar on the home or rooms page.
  useEffect(() => setDates(loadStayDates()), []);

  const changeDates = (v: StayDates) => {
    setDates(v);
    saveStayDates(v);
  };

  const nights = nightsBetween(dates.from, dates.to);
  const totalPrice = stayPrice(room, nights);
  const monthly = nights >= 30;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setShowTermsError(true);
      return;
    }
    console.log("Booking submitted:", { room: room.id, ...dates, nights, totalPrice });
  };

  const input = "w-full px-4 py-2 border border-border rounded-lg text-sm bg-background";

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container max-w-screen-2xl">
          <h1 className="text-3xl font-bold mb-8">
            <T en="Complete Your Booking" bn="বুকিং সম্পন্ন করুন" />
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-background border border-border/40 rounded-lg p-6">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    <T en="Select Your Dates" bn="তারিখ বেছে নিন" />
                  </h2>
                  <DateRangePicker variant="form" value={dates} onChange={changeDates} />
                </section>

                {/* Guest Information */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    <T en="Guest Information" bn="অতিথির তথ্য" />
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2"><T en="Full Name" bn="পুরো নাম" /></label>
                      <input type="text" placeholder={t("Your full name", "আপনার পুরো নাম")} className={input} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2"><T en="Email" bn="ইমেইল" /></label>
                      <input type="email" placeholder="your@email.com" className={input} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2"><T en="Phone Number" bn="ফোন নম্বর" /></label>
                      <input type="tel" placeholder="+880 1XXX XXXXXX" className={input} required />
                    </div>
                  </div>
                </section>

                {/* Payment Information */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    <T en="Payment Method" bn="পেমেন্ট পদ্ধতি" />
                  </h2>
                  <div className="space-y-3">
                    {[
                      { en: "Credit/Debit Card", bn: "ক্রেডিট/ডেবিট কার্ড" },
                      { en: "Bank Transfer", bn: "ব্যাংক ট্রান্সফার" },
                      { en: "Mobile Banking (bKash, Nagad)", bn: "মোবাইল ব্যাংকিং (বিকাশ, নগদ)" },
                    ].map((m, i) => (
                      <label key={m.en} className="flex items-center p-3 border border-border/40 rounded-lg cursor-pointer hover:bg-muted">
                        <input type="radio" name="payment" defaultChecked={i === 0} className="w-4 h-4" />
                        <span className="ml-3 text-sm"><T t={m} /></span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Terms */}
                <section className="mb-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => {
                        setAgreeTerms(e.target.checked);
                        setShowTermsError(false);
                      }}
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-sm text-muted-foreground">
                      <T en="I agree to the" bn="আমি" />{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        <T en="terms and conditions" bn="শর্তাবলি" />
                      </Link>{" "}
                      <T en="and" bn="এবং" />{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        <T en="privacy policy" bn="গোপনীয়তা নীতি" />
                      </Link>
                      <T en="" bn="-তে সম্মত আছি" />
                    </span>
                  </label>
                  {showTermsError && (
                    <p className="mt-2 text-sm text-red-600">
                      <T en="Please agree to the terms and conditions." bn="অনুগ্রহ করে শর্তাবলিতে সম্মতি দিন।" />
                    </p>
                  )}
                </section>

                <Button
                  type="submit"
                  disabled={nights <= 0 || !room.available}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <T en="Proceed to Payment" bn="পেমেন্টে এগিয়ে যান" />
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="border border-border/40 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6"><T en="Booking Summary" bn="বুকিং সারসংক্ষেপ" /></h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border/40">
                  <div className="flex gap-3 items-center">
                    <img src={room.images[0]} alt="" className="w-14 h-14 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm text-muted-foreground"><T en="Room" bn="রুম" /></p>
                      <p className="font-medium"><T t={room.title} /></p>
                    </div>
                  </div>

                  {nights > 0 && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground"><T en="Length of stay" bn="থাকার মেয়াদ" /></p>
                        <p className="font-medium">
                          <Num value={nights} />{" "}
                          {nights === 1 ? <T en="night" bn="রাত" /> : <T en="nights" bn="রাত" />}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {monthly ? <T en="Monthly rate" bn="মাসিক ভাড়া" /> : <T en="Price per night" bn="প্রতি রাতের ভাড়া" />}
                        </p>
                        <p className="font-medium">
                          <Money value={monthly ? room.price : room.priceDay} />
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold"><T en="Total" bn="মোট" /></span>
                    <span className="text-2xl font-bold"><Money value={totalPrice} /></span>
                  </div>
                  {nights === 0 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      <T en="Choose check-in and check-out dates to see the total." bn="মোট দেখতে চেক-ইন ও চেক-আউটের তারিখ বেছে নিন।" />
                    </p>
                  )}
                </div>

                <div className="bg-muted/50 rounded p-4 text-xs text-muted-foreground">
                  <p>✓ <T en="Free cancellation until 7 days before check-in" bn="চেক-ইনের ৭ দিন আগে পর্যন্ত বিনা খরচে বাতিল" /></p>
                  <p className="mt-2">✓ <T en="24/7 customer support included" bn="২৪/৭ কাস্টমার সাপোর্ট" /></p>
                  <p className="mt-2">✓ <T en="Stays of 30+ nights are charged at the monthly rate" bn="৩০ রাত বা তার বেশি থাকলে মাসিক ভাড়া প্রযোজ্য" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
