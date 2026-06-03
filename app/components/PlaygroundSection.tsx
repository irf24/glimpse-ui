"use client";

import React from "react";
import { Glimpse } from "@/src/components/Glimpse";
import { CodeBlock } from "./CodeBlock";
import type { AnimationType, ThemeMode, LayoutType } from "../types";

interface PlaygroundSectionProps {
  animation: AnimationType;
  setAnimation: (v: AnimationType) => void;
  speed: number;
  setSpeed: (v: number) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  layout: LayoutType;
  setLayout: (v: LayoutType) => void;
}

function generatePlaygroundCode(
  layout: LayoutType,
  animation: AnimationType,
): string {
  if (layout === "profile") {
    return `import { Glimpse } from "@glimpse-ui/react";
import "@glimpse-ui/react/styles.css";

function ProfileCardSkeleton() {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", width: "100%" }}>
      <Glimpse 
        variant="circle" 
        width={56} 
        height={56} 
        animation="${animation}" 
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <Glimpse variant="text" width="45%" height={14} animation="${animation}" />
        <Glimpse variant="text" width="70%" height={11} animation="${animation}" />
        <Glimpse variant="text" width="90%" height={11} animation="${animation}" />
      </div>
    </div>
  );
}`;
  }

  if (layout === "product") {
    return `import { Glimpse } from "@glimpse-ui/react";
import "@glimpse-ui/react/styles.css";

function ProductCardSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "120px" }}>
      <Glimpse 
        variant="rectangle" 
        height={110} 
        animation="${animation}" 
        style={{ borderRadius: "10px" }} 
      />
      <Glimpse variant="text" width="80%" height={12} animation="${animation}" />
      <Glimpse variant="text" width="40%" height={14} animation="${animation}" />
      <Glimpse 
        variant="rectangle" 
        height={32} 
        animation="${animation}" 
        style={{ borderRadius: "8px" }} 
      />
    </div>
  );
}`;
  }

  return `import { Glimpse } from "@glimpse-ui/react";
import "@glimpse-ui/react/styles.css";

function TableSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
      {/* Table Header Row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1.5fr 1.5fr", gap: "12px", borderBottom: "1px solid var(--sand-border)", paddingBottom: "8px" }}>
        <Glimpse variant="text" height={12} width="60%" animation="${animation}" />
        <Glimpse variant="text" height={12} width="75%" animation="${animation}" />
        <Glimpse variant="text" height={12} width="50%" animation="${animation}" />
        <Glimpse variant="text" height={12} width="40%" animation="${animation}" />
      </div>
      {/* Table Data Rows */}
      {[1, 2, 3].map((row) => (
        <div key={row} style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1.5fr 1.5fr", gap: "12px", alignItems: "center" }}>
          <Glimpse variant="text" height={11} width="65%" animation="${animation}" />
          <Glimpse variant="text" height={11} width="75%" animation="${animation}" />
          <Glimpse variant="text" height={11} width="55%" animation="${animation}" />
          <Glimpse variant="text" height={11} width="45%" animation="${animation}" />
        </div>
      ))}
    </div>
  );
}`;
}

export function PlaygroundSection({
  animation,
  setAnimation,
  speed,
  setSpeed,
  theme,
  toggleTheme,
  layout,
  setLayout,
}: PlaygroundSectionProps) {
  return (
    <section id="playground" className="doc-section">
      <h2 className="doc-title">Live Playground</h2>
      <p className="doc-text playground-section__subtitle">
        Experiment with component variations in real time. Adjust the animation
        mode, speed rate, and toggle themes. The code block syncs automatically
        to generate the drop-in layout snippet.
      </p>

      <div className="card playground-card">
        <span className="section-label">Interactive sandbox</span>

        <div className="playground-layout playground-layout--spaced">
          {/* Visual Preview Box */}
          <div className="playground-demo-box">
            <span className="playground-demo-box__badge">Skeleton Preview</span>

            {layout === "profile" && (
              <div className="profile-skeleton">
                <Glimpse
                  variant="circle"
                  width={56}
                  height={56}
                  animation={animation}
                />
                <div className="profile-skeleton__info">
                  <Glimpse
                    variant="text"
                    width="45%"
                    height={14}
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    width="70%"
                    height={11}
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    width="90%"
                    height={11}
                    animation={animation}
                  />
                </div>
              </div>
            )}

            {layout === "product" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div className="product-card" style={{ width: "160px" }}>
                  <Glimpse
                    variant="rectangle"
                    height={110}
                    animation={animation}
                    style={{ borderRadius: "10px" }}
                  />
                  <Glimpse
                    variant="text"
                    width="80%"
                    height={12}
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    width="40%"
                    height={14}
                    animation={animation}
                  />
                  <Glimpse
                    variant="rectangle"
                    height={32}
                    animation={animation}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            )}

            {layout === "table" && (
              <div className="table-skeleton">
                <div className="table-skeleton__row table-skeleton__row--header">
                  <Glimpse
                    variant="text"
                    height={12}
                    width="60%"
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    height={12}
                    width="75%"
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    height={12}
                    width="50%"
                    animation={animation}
                  />
                  <Glimpse
                    variant="text"
                    height={12}
                    width="40%"
                    animation={animation}
                  />
                </div>
                {[1, 2, 3].map((row) => (
                  <div key={row} className="table-skeleton__row">
                    <Glimpse
                      variant="text"
                      height={11}
                      width="65%"
                      animation={animation}
                    />
                    <Glimpse
                      variant="text"
                      height={11}
                      width="75%"
                      animation={animation}
                    />
                    <Glimpse
                      variant="text"
                      height={11}
                      width="55%"
                      animation={animation}
                    />
                    <Glimpse
                      variant="text"
                      height={11}
                      width="45%"
                      animation={animation}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Real-time Code Output Block */}
          <div className="playground-code-box">
            <CodeBlock
              code={generatePlaygroundCode(layout, animation)}
              language="tsx"
            />
          </div>
        </div>

        {/* Controls Section */}
        <div className="controls__grid">
          <div className="control-group">
            <span className="control-group__label">Preset Layout</span>
            <div className="pill-group">
              {(["profile", "product", "table"] as LayoutType[]).map((type) => (
                <button
                  key={type}
                  className={`pill ${layout === type ? "pill--active" : ""}`}
                  onClick={() => setLayout(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <span className="control-group__label">Animation Mode</span>
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

          <div className="control-group">
            <span className="control-group__label">
              Speed Rate{" "}
              <span className="range-value">{speed.toFixed(1)}s</span>
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
        </div>
      </div>
    </section>
  );
}
