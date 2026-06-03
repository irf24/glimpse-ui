import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "@glimpse-ui/react — Skeleton Placeholder Library",
  description:
    "Beautiful, high-performance skeleton loading placeholders for modern React applications. GPU-accelerated animations with seamless light & dark mode support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
