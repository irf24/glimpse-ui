import React from "react";

export function OverviewSection() {
  return (
    <section id="overview" className="doc-section hero">
      <span className="hero__badge">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        v0.1.0 · stable Release
      </span>
      <h1 className="hero__title">@glimpse-ui/react</h1>
      <p className="hero__subtitle">
        Beautiful, GPU-accelerated skeleton loading placeholders with seamless
        light &amp; dark mode integration. Zero runtime dependencies. Fully
        SSR-safe out of the box.
      </p>
      <div className="hero__actions">
        <a href="#installation" className="btn btn--primary">
          Get Started
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a href="#playground" className="btn btn--secondary">
          Live Playground
        </a>
      </div>
    </section>
  );
}
