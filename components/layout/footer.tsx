import Link from "next/link";
import { Num, T } from "@/lib/i18n";
import { ADDRESS, MAP_URL, PHONES, prettyPhone } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 md:py-12">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/images/logo.png" alt="Pandora Home's — Bachelor's Dream Stay" className="h-24 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              <T
                en="A sharper way to live, study and belong. Premier male residence in Dhaka."
                bn="থাকা, পড়াশোনা আর একসাথে বেড়ে ওঠার আরও ভালো ঠিকানা। ঢাকার সেরা ছেলেদের আবাসন।"
              />
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm"><T en="Quick Links" bn="দ্রুত লিংক" /></h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-primary">
                  <T en="Browse Rooms" bn="রুম দেখুন" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  <T en="About Us" bn="আমাদের সম্পর্কে" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  <T en="Contact" bn="যোগাযোগ" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4 text-sm"><T en="Policies" bn="নীতিমালা" /></h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  <T en="Privacy Policy" bn="গোপনীয়তা নীতি" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  <T en="Terms of Service" bn="সেবার শর্তাবলি" />
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-primary">
                  <T en="Cancellation Policy" bn="বাতিলকরণ নীতি" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm"><T en="Contact" bn="যোগাযোগ" /></h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {PHONES.map((p) => (
                <li key={p}>
                  📞{" "}
                  <a href={`tel:${p}`} className="hover:text-primary">
                    <Num value={prettyPhone(p)} />
                  </a>
                </li>
              ))}
              <li>
                📍{" "}
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <T t={ADDRESS} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              &copy; <Num value="2026" /> Pandora Home&apos;s.{" "}
              <T en="All rights reserved." bn="সর্বস্বত্ব সংরক্ষিত।" />
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary">Facebook</Link>
              <Link href="#" className="hover:text-primary">Instagram</Link>
              <Link href="#" className="hover:text-primary">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
