import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Unheard Voices",
  description: "Stories that deserve to be heard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>

      <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}