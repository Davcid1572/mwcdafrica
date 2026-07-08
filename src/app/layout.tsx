import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: {
    default: "MWCDAFRICA | Empowering Minds, Strengthening Communities",
    template: "%s | MWCDAFRICA",
  },
  description:
    "A Mental Wellbeing & Community Development foundation advancing care, innovation, and dignity across Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${hanken.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
