import type { Metadata } from "next";
import { Karla, Oswald, Rubik } from "next/font/google";
import "./globals.css";
import { getCopy } from "./i18n";

export const dynamic = "force-static";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const { layout } = getCopy();

export const metadata: Metadata = {
  title: layout.title,
  description: layout.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={layout.htmlLang}>
      <body
        className={`${karla.variable} ${rubik.variable} ${oswald.variable} antialiased bg-base text-base-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
