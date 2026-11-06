import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pandora Home's | Bachelor's Dream Stay in Dhaka",
  icons: { icon: "/favicon.png" },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
