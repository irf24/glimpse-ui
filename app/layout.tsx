import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles.css";
import "./globals.css";
import "./components/DocLayout.css";
import "./components/Navbar.css";
import "./components/Sidebar.css";
import "./components/ThemeToggle.css";
import "./components/PlaygroundSection.css";
import "./components/CodeBlock.css";
import "./components/ApiReferenceSection.css";
import "./components/ThemingSection.css";
import "./components/InstallationSection.css";
import "./components/AccessibilitySection.css";
import "./components/OverviewSection.css";

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
