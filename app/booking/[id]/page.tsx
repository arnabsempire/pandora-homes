"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function BookingPage() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const roomPrice = 18500;
  const nights = checkInDate && checkOutDate ?
    Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = nights * roomPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to terms and conditions");
      return;
    }
    console.log("Booking submitted:", { checkInDate, checkOutDate, totalPrice });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container max-w-screen-2xl">
          <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-background border border-border/40 rounded-lg p-6">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Select Your Dates</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in Date</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full px-4 py-2 border border-border/40 rounded-lg text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out Date</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full px-4 py-2 border border-border/40 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                </section>

                {/* Guest Information */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Guest Information</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-border/40 rounded-lg text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-border/40 rounded-lg text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+880 1234 567890"
                        className="w-full px-4 py-2 border border-border/40 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                </section>

                {/* Payment Information */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                  <div className="space-y-3">
                    <label className="flex items-center p-3 border border-border/40 rounded-lg cursor-pointer hover:bg-muted">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                      <span className="ml-3 text-sm">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center p-3 border border-border/40 rounded-lg cursor-pointer hover:bg-muted">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="ml-3 text-sm">Bank Transfer</span>
                    </label>
                    <label className="flex items-center p-3 border border-border/40 rounded-lg cursor-pointer hover:bg-muted">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="ml-3 text-sm">Mobile Banking (bKash, Nagad)</span>
                    </label>
                  </div>
                </section>

                {/* Terms */}
                <section className="mb-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-1"
                      required
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        terms and conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        privacy policy
                      </Link>
                    </span>
                  </label>
                </section>

                <Button
                  type="submit"
                  disabled={!checkInDate || !checkOutDate || totalPrice === 0}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Proceed to Payment
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="border border-border/40 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Booking Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border/40">
                  <div>
                    <p className="text-sm text-muted-foreground">Room</p>
                    <p className="font-medium">Private Suite with Study Desk</p>
                  </div>

                  {checkInDate && checkOutDate && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground">Dates</p>
                        <p className="font-medium">{nights} night{nights !== 1 ? "s" : ""}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Price per Night</p>
                        <p className="font-medium">৳{roomPrice.toLocaleString()}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Total */}
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold">
                      ৳{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-muted/50 rounded p-4 text-xs text-muted-foreground">
                  <p>✓ Free cancellation until 7 days before check-in</p>
                  <p className="mt-2">✓ 24/7 customer support included</p>
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
