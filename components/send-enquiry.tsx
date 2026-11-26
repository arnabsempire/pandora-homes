"use client";

import { useState } from "react";
import { Num, T } from "@/lib/i18n";
import { PHONES, prettyPhone, smsLink } from "@/lib/contact";

/**
 * The site is static (no server), so a submitted form can't be stored or emailed.
 * Instead we hand the visitor's request to Pandora Home's by SMS or a phone call,
 * the same channels the flyer lists.
 */
export function SendEnquiry({ message, onEdit }: { message: string; onEdit: () => void }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      /* clipboard blocked: the text is still selectable below */
    }
  };

  const btn = "inline-flex items-center justify-center rounded-md px-4 h-10 text-sm font-medium";

  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 p-6 text-amber-950">
      <h2 className="text-xl font-semibold mb-2">
        <T en="Almost done — send this to Pandora Home's" bn="প্রায় শেষ — এটি প্যান্ডোরা হোম'স-এ পাঠান" />
      </h2>
      <p className="text-sm mb-4">
        <T
          en="Send the details below by SMS, or call us and we'll confirm availability. Nothing has been sent yet."
          bn="নিচের তথ্য এসএমএস করে পাঠান, অথবা ফোন করুন — আমরা খালি আছে কিনা নিশ্চিত করব। এখনও কিছু পাঠানো হয়নি।"
        />
      </p>

      <pre className="whitespace-pre-wrap break-words rounded-md border border-amber-200 bg-white p-4 text-sm font-sans mb-4 select-all">
        {message}
      </pre>

      <div className="flex flex-wrap gap-3">
        <a href={smsLink(message)} className={`${btn} bg-amber-500 hover:bg-amber-600 text-white`}>
          <T en="Send by SMS" bn="এসএমএস পাঠান" />
        </a>
        <a href={`tel:${PHONES[0]}`} className={`${btn} border border-amber-400 bg-white hover:bg-amber-100`}>
          <T en="Call" bn="ফোন করুন" />&nbsp;<Num value={prettyPhone(PHONES[0])} />
        </a>
        <button type="button" onClick={copy} className={`${btn} border border-amber-400 bg-white hover:bg-amber-100`}>
          {copied ? <T en="Copied ✓" bn="কপি হয়েছে ✓" /> : <T en="Copy details" bn="তথ্য কপি করুন" />}
        </button>
        <button type="button" onClick={onEdit} className={`${btn} underline underline-offset-4`}>
          <T en="Edit" bn="সম্পাদনা" />
        </button>
      </div>

      <p className="text-xs mt-4">
        <T en="Other numbers:" bn="অন্যান্য নম্বর:" />{" "}
        {PHONES.slice(1).map((p, i) => (
          <span key={p}>
            {i > 0 && ", "}
            <a href={`tel:${p}`} className="underline underline-offset-2">
              <Num value={prettyPhone(p)} />
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
