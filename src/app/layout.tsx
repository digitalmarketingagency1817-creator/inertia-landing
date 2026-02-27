import type { Metadata } from "next";
import { Inter, Fraunces, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl-libre",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inertia — The financial tool that adapts to you",
  description:
    "Your money doesn't need perfection, it needs direction. Inertia brings clarity to your money decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${frankRuhlLibre.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
