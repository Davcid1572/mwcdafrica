import type { Metadata } from "next";
import "@fontsource/spectral/300.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "@fontsource/spectral/400-italic.css";
import "@fontsource/spectral/500-italic.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/hanken-grotesk/800.css";
import { Providers } from "./providers";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
