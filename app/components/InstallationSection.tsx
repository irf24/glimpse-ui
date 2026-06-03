"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";

interface InstallationSectionProps {
  installTab: "npm" | "yarn" | "pnpm";
  onTabChange: (tab: "npm" | "yarn" | "pnpm") => void;
}

const installCommands = {
  npm: "npm install @glimpse-ui/react",
  yarn: "yarn add @glimpse-ui/react",
  pnpm: "pnpm add @glimpse-ui/react",
};

export function InstallationSection({
  installTab,
  onTabChange,
}: InstallationSectionProps) {
  return (
    <section id="installation" className="doc-section">
      <h2 className="doc-title">Installation</h2>
      <p className="doc-text">
        Install Glimpse UI into your project directory using your preferred
        package manager.
      </p>

      <div className="installation-code-block" id="installation-container">
        <div className="install-tabs">
          {(["npm", "yarn", "pnpm"] as const).map((pm) => (
            <button
              key={pm}
              className={`install-tab-btn ${installTab === pm ? "install-tab-btn--active" : ""}`}
              onClick={() => onTabChange(pm)}
            >
              {pm}
            </button>
          ))}
        </div>
        <CodeBlock code={installCommands[installTab]} language="sh" />
      </div>
    </section>
  );
}
