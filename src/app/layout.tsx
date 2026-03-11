import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, Syne_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne-mono",
});

export const metadata: Metadata = {
  title: "장가은 — Fullstack Developer",
  description: "Frontend부터 Backend까지. 풀스택 개발자 포트폴리오.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${syne.variable} ${syneMono.variable}`}>
      <body className="font-syne">{children}</body>
    </html>
  );
}
