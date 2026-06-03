"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Glimpse } from "@/src/components/Glimpse";

type AnimationType = "shimmer" | "pulse" | "none";
type ThemeMode = "dark" | "light";

export default function SandboxPage() {
  const [animation, setAnimation] = useState<AnimationType>("shimmer");
  const [speed, setSpeed] = useState(1.8);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  /* Apply theme + speed as CSS variables on <html> */
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--glimpse-duration", `${speed}s`);
    root.style.setProperty("--glimpse-pulse-duration", `${Math.max(speed * 0.85, 0.8)}s`);
  }, [theme, speed]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <main className="sandbox">
      {/* ===== Hero ===== */}
      <header className="sandbox__hero">
        <span className="sandbox__badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          Developer Sandbox
        </span>
        <h1 className="sandbox__title">@glimpse-ui/react</h1>
        <p className="sandbox__subtitle">
          Beautiful, GPU-accelerated skeleton placeholders with seamless light &amp; dark mode. 
          Zero dependencies. Fully SSR-safe.
        </p>
      </header>

      {/* ===== Controls ===== */}
      <section className="card controls" style={{ marginBottom: "2.5rem" }}>
        <span className="section-label">Configuration</span>
        <h2 className="section-title">Playground Controls</h2>
        <p className="section-desc">
          Adjust animation style, speed, and theme to preview all skeleton states in real time.
        </p>
        <div className="controls__grid">
          {/* Animation Type */}
          <div className="control-group">
            <span className="control-group__label">Animation</span>
            <div className="pill-group">
              {(["shimmer", "pulse", "none"] as AnimationType[]).map((type) => (
                <button
                  key={type}
                  className={`pill ${animation === type ? "pill--active" : ""}`}
                  onClick={() => setAnimation(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Speed */}
          <div className="control-group">
            <span className="control-group__label">
              Speed <span className="range-value">{speed.toFixed(1)}s</span>
            </span>
            <input
              type="range"
              className="range-slider"
              min="0.6"
              max="4"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
            />
          </div>

          {/* Theme */}
          <div className="control-group">
            <span className="control-group__label">Theme</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.1rem" }}>🌙</span>
              <button
                className={`theme-toggle ${theme === "light" ? "theme-toggle--light" : ""}`}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              />
              <span style={{ fontSize: "1.1rem" }}>☀️</span>
            </div>
          </div>

          {/* Variant Info */}
          <div className="control-group">
            <span className="control-group__label">Variants</span>
            <div className="pill-group">
              <span className="pill pill--active" style={{ cursor: "default" }}>text</span>
              <span className="pill pill--active" style={{ cursor: "default" }}>circle</span>
              <span className="pill pill--active" style={{ cursor: "default" }}>rectangle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Demo Grid ===== */}
      <div className="demos">
        {/* --- Profile / User Card --- */}
        <section className="card">
          <span className="section-label">Profile Card</span>
          <h2 className="section-title">User Card Skeleton</h2>
          <p className="section-desc">Avatar, name, and bio lines — a classic loading pattern.</p>

          <div className="profile-skeleton">
            <Glimpse variant="circle" width={56} height={56} animation={animation} />
            <div className="profile-skeleton__info">
              <Glimpse variant="text" width="45%" height={14} animation={animation} />
              <Glimpse variant="text" width="70%" height={11} animation={animation} />
              <Glimpse variant="text" width="90%" height={11} animation={animation} />
              <Glimpse variant="text" width="60%" height={11} animation={animation} />
            </div>
          </div>

          {/* Second profile row */}
          <div className="profile-skeleton" style={{ marginTop: "1.5rem" }}>
            <Glimpse variant="circle" width={56} height={56} animation={animation} />
            <div className="profile-skeleton__info">
              <Glimpse variant="text" width="55%" height={14} animation={animation} />
              <Glimpse variant="text" width="80%" height={11} animation={animation} />
              <Glimpse variant="text" width="65%" height={11} animation={animation} />
            </div>
          </div>
        </section>

        {/* --- E-commerce Product Grid --- */}
        <section className="card">
          <span className="section-label">E-Commerce</span>
          <h2 className="section-title">Product Grid Skeleton</h2>
          <p className="section-desc">Image, title, price, and CTA — ready for any storefront.</p>

          <div className="product-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="product-card">
                <Glimpse
                  variant="rectangle"
                  height={130}
                  animation={animation}
                  style={{ borderRadius: "var(--sand-radius-sm)" }}
                />
                <Glimpse variant="text" width="80%" height={12} animation={animation} />
                <Glimpse variant="text" width="40%" height={14} animation={animation} />
                <Glimpse
                  variant="rectangle"
                  height={36}
                  animation={animation}
                  style={{ borderRadius: "8px" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- Data Table --- */}
        <section className="card" style={{ gridColumn: "1 / -1" }}>
          <span className="section-label">Data Table</span>
          <h2 className="section-title">Table / List Skeleton</h2>
          <p className="section-desc">Header row plus data rows — ideal for dashboards and admin panels.</p>

          <div className="table-skeleton">
            {/* Header */}
            <div className="table-skeleton__row table-skeleton__row--header">
              <Glimpse variant="text" height={12} width="60%" animation={animation} />
              <Glimpse variant="text" height={12} width="75%" animation={animation} />
              <Glimpse variant="text" height={12} width="50%" animation={animation} />
              <Glimpse variant="text" height={12} width="40%" animation={animation} />
            </div>
            {/* Data rows */}
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="table-skeleton__row">
                <Glimpse variant="text" height={11} width={`${55 + row * 5}%`} animation={animation} />
                <Glimpse variant="text" height={11} width={`${65 + row * 3}%`} animation={animation} />
                <Glimpse variant="text" height={11} width={`${40 + row * 6}%`} animation={animation} />
                <Glimpse variant="text" height={11} width={`${30 + row * 4}%`} animation={animation} />
              </div>
            ))}
          </div>
        </section>

        {/* --- Mixed Variants Showcase --- */}
        <section className="card" style={{ gridColumn: "1 / -1" }}>
          <span className="section-label">Showcase</span>
          <h2 className="section-title">All Variants &amp; Sizes</h2>
          <p className="section-desc">Every variant rendered at different dimensions.</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "flex-end" }}>
            {/* Circles */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Glimpse variant="circle" width={32} height={32} animation={animation} />
              <Glimpse variant="circle" width={48} height={48} animation={animation} />
              <Glimpse variant="circle" width={64} height={64} animation={animation} />
              <Glimpse variant="circle" width={80} height={80} animation={animation} />
            </div>

            {/* Text lines */}
            <div style={{ flex: 1, minWidth: "200px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Glimpse variant="text" width="100%" height={8} animation={animation} />
              <Glimpse variant="text" width="85%" height={10} animation={animation} />
              <Glimpse variant="text" width="92%" height={12} animation={animation} />
              <Glimpse variant="text" width="70%" height={14} animation={animation} />
              <Glimpse variant="text" width="50%" height={16} animation={animation} />
            </div>

            {/* Rectangles */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Glimpse variant="rectangle" width={80} height={60} animation={animation} style={{ borderRadius: "8px" }} />
              <Glimpse variant="rectangle" width={100} height={80} animation={animation} style={{ borderRadius: "12px" }} />
              <Glimpse variant="rectangle" width={120} height={100} animation={animation} style={{ borderRadius: "16px" }} />
            </div>
          </div>
        </section>
      </div>

      {/* ===== Footer ===== */}
      <footer className="sandbox__footer">
        <p>
          Built with ♥ by{" "}
          <a href="https://github.com/irf24/glimpse-ui" target="_blank" rel="noopener noreferrer">
            @glimpse-ui
          </a>
        </p>
      </footer>
    </main>
  );
}
