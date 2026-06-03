"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { OverviewSection } from "./components/OverviewSection";
import { InstallationSection } from "./components/InstallationSection";
import { BasicUsageSection } from "./components/BasicUsageSection";
import { PlaygroundSection } from "./components/PlaygroundSection";
import { ApiReferenceSection } from "./components/ApiReferenceSection";
import { ThemingSection } from "./components/ThemingSection";
import { AccessibilitySection } from "./components/AccessibilitySection";
import { DocFooter } from "./components/DocFooter";
import type { AnimationType, ThemeMode, LayoutType } from "./types";

export default function DocumentationPage() {
  const [animation, setAnimation] = useState<AnimationType>("shimmer");
  const [speed, setSpeed] = useState(1.8);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [layout, setLayout] = useState<LayoutType>("profile");
  const [installTab, setInstallTab] = useState<"npm" | "yarn" | "pnpm">("npm");
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--glimpse-duration", `${speed}s`);
    root.style.setProperty("--glimpse-pulse-duration", `${Math.max(speed * 0.85, 0.8)}s`);
  }, [theme, speed]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <div className="ambient-glow" />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        onLinkClick={handleLinkClick}
      />

      <div className="doc-layout">
        <Sidebar
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          theme={theme}
          toggleTheme={toggleTheme}
          onLinkClick={handleLinkClick}
        />

        <main className="doc-main" id="doc-content">
          <OverviewSection />
          <InstallationSection installTab={installTab} onTabChange={setInstallTab} />
          <BasicUsageSection />
          <PlaygroundSection
            animation={animation}
            setAnimation={setAnimation}
            speed={speed}
            setSpeed={setSpeed}
            theme={theme}
            toggleTheme={toggleTheme}
            layout={layout}
            setLayout={setLayout}
          />
          <ApiReferenceSection />
          <ThemingSection />
          <AccessibilitySection />
          <DocFooter />
        </main>
      </div>
    </>
  );
}
