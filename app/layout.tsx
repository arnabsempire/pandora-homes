import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pandora's Homes | Premier Male Residence in Dhaka",
  description: "A sharper way to live, study and belong. Private rooms, shared dorms, and studio suites with high-speed fiber and 24/7 security.",
  keywords: ["hostel", "accommodation", "residence", "Dhaka", "students", "professionals"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
