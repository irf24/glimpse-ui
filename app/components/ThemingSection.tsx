"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";

const customThemingCss = `/* Customise skeleton theme colors and sizes */
.custom-theme-wrapper {
  --glimpse-base: hsl(30, 20%, 20%); /* Custom base color */
  --glimpse-highlight: hsl(30, 25%, 32%); /* Custom shimmer color */
  --glimpse-radius: 12px; /* Smoother corners */
  --glimpse-duration: 1.2s; /* Faster animation */
}`;

const cssVariables = [
  {
    name: "--glimpse-base",
    desc: "Root background color of the placeholder card.",
    defaultVal: "Default (dark): HSL(220, 15%, 18%)",
  },
  {
    name: "--glimpse-highlight",
    desc: "Highlighted shimmer sliding gradient color.",
    defaultVal: "Default (dark): HSL(220, 15%, 26%)",
  },
  {
    name: "--glimpse-radius",
    desc: "Global border-radius rounding value.",
    defaultVal: "Default: 8px",
  },
  {
    name: "--glimpse-duration",
    desc: "Overall animation timing loop rate for shimmer.",
    defaultVal: "Default: 1.8s",
  },
];

export function ThemingSection() {
  return (
    <section id="customization" className="doc-section">
      <h2 className="doc-title">Theming &amp; Styling</h2>
      <p className="doc-text">
        Glimpse UI comes packaged with modular, CSS-variable-based layout
        styles. This lets you seamlessly match it to your application&apos;s
        palette by overriding properties.
      </p>

      <div className="theme-vars-grid" id="css-variables-list">
        {cssVariables.map((v) => (
          <div className="theme-var-card" key={v.name}>
            <span className="theme-var-name">{v.name}</span>
            <span className="theme-var-desc">{v.desc}</span>
            <span className="theme-var-default">{v.defaultVal}</span>
          </div>
        ))}
      </div>

      <p className="doc-text theming-section__spacing">
        To theme your application or a nested layout node, target the CSS
        variables within a custom class:
      </p>
      <CodeBlock code={customThemingCss} language="css" />
    </section>
  );
}
