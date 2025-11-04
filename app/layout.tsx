import type { Metadata } from "next";
import { Karla, Oswald, Rubik } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "bhCAD — Technical Consultancy Bureau",
  description:
    "bhCAD offers CAD/CAM technical support, engineering consultancy, and business administration services tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${rubik.variable} ${oswald.variable} antialiased bg-base text-base-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
