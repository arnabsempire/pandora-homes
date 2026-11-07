import { T } from "@/lib/i18n";
import { PHONES, prettyPhone } from "@/lib/contact";
import { Num } from "@/lib/i18n";

// Points taken from the Pandora Home's flyer.
const REASONS = [
  {
    en: "An experienced, caring management team that ensures quality food and the best environment for studying.",
    bn: "হোস্টেল পরিচালনায় আছে অভিজ্ঞ মানবিক টিম যারা মানসম্মত খাবার এবং পড়াশুনার সর্বোচ্চ পরিবেশ নিশ্চিত করছে।",
  },
  {
    en: "3 minutes from Karwan Bazar Metro Station, with every other kind of transport close at hand.",
    bn: "কাওরান বাজার মেট্রো স্টেশন ৩ মিনিট দূরত্বে, মেট্রো ছাড়াও যাতায়াতের সকল মাধ্যম হাতের নাগালে পাবেন।",
  },
  {
    en: "Universities, hospitals, markets and coaching centres are all nearby.",
    bn: "বিশ্ববিদ্যালয়, হাসপাতাল, মার্কেট, কোচিং সেন্টার সবকিছু কাছাকাছি।",
  },
];

export function WhySection() {
  return (
    <section className="py-16 md:py-24 bg-emerald-50/60 dark:bg-emerald-950/20">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <a
            href="/images/flyer.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto w-full max-w-md rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow"
          >
            <img
              src="/images/flyer.jpg"
              alt="Pandora Home's flyer – Bachelor's Dream Stay"
              loading="lazy"
              className="w-full h-auto"
            />
          </a>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <T en="Why choose Pandora Home's?" bn="কেন Pandora Home's বেছে নিবেন?" />
            </h2>
            <ul className="space-y-4 mb-8">
              {REASONS.map((r) => (
                <li key={r.en} className="flex gap-3">
                  <span className="text-emerald-600 mt-1">◆</span>
                  <span className="text-muted-foreground leading-relaxed"><T en={r.en} bn={r.bn} /></span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-background border border-border/60 p-6 mb-8">
              <h3 className="font-semibold mb-2"><T en="For parents" bn="অভিভাবকদের উদ্দেশ্যে" /></h3>
              <p className="text-muted-foreground leading-relaxed">
                <T
                  en={'The biggest worry for parents is "Where will my son stay?" Pandora Home\'s offers a safe, clean environment made for studying, where your son gets support for becoming independent and guidance every day.'}
                  bn={"অভিভাবকদের সবচেয়ে বড় চিন্তা—“আমার ছেলে কোথায় উঠবে?” Pandora Home's দিচ্ছে নিরাপদ, পরিচ্ছন্ন ও পড়াশোনার উপযোগী পরিবেশ। এখানে আপনার সন্তান নির্ভরতা ও গাইডলাইনের সহায়তা পাবে প্রতিদিন।"}
                />
              </p>
            </div>

            <p className="text-sm font-semibold text-red-600 mb-3">
              <T en="Limited seats – book today!" bn="সিট সংখ্যা সীমিত, আজই বুকিং নিশ্চিত করুন।" />
            </p>
            <div className="flex flex-wrap gap-3">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 px-4 py-2 text-sm font-semibold text-white"
                >
                  📞 <Num value={prettyPhone(p)} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
