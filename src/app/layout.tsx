import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import { META } from "@/lib/constants";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading-next",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body-next",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-script-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${greatVibes.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg-primary antialiased">
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
