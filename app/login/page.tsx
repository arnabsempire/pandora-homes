"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { T } from "@/lib/i18n";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
  };

  const input =
    "w-full px-4 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-background border border-border/40 rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-2"><T en="Welcome Back" bn="আবার স্বাগতম" /></h1>
            <p className="text-muted-foreground mb-8">
              <T en="Sign in to your Pandora Home's account" bn="আপনার প্যান্ডোরা হোম'স অ্যাকাউন্টে সাইন ইন করুন" />
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2"><T en="Email Address" bn="ইমেইল ঠিকানা" /></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" className={input} required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2"><T en="Password" bn="পাসওয়ার্ড" /></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" className={input} required />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="ml-2 text-sm"><T en="Remember me" bn="মনে রাখুন" /></span>
                </label>
                <Link href="#" className="text-sm text-primary hover:underline">
                  <T en="Forgot password?" bn="পাসওয়ার্ড ভুলে গেছেন?" />
                </Link>
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                <T en="Sign In" bn="সাইন ইন" />
              </Button>
            </form>

            <div className="my-6 flex items-center gap-2">
              <div className="flex-1 border-t border-border/40" />
              <span className="text-xs text-muted-foreground"><T en="OR" bn="অথবা" /></span>
              <div className="flex-1 border-t border-border/40" />
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <span className="mr-2">🔵</span>
                <T en="Continue with Google" bn="গুগল দিয়ে চালিয়ে যান" />
              </Button>
              <Button variant="outline" className="w-full">
                <span className="mr-2">📘</span>
                <T en="Continue with Facebook" bn="ফেসবুক দিয়ে চালিয়ে যান" />
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              <T en="Don't have an account?" bn="অ্যাকাউন্ট নেই?" />{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                <T en="Sign up here" bn="এখানে সাইন আপ করুন" />
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
