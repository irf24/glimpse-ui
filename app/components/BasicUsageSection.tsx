import React from "react";
import { CodeBlock } from "./CodeBlock";

const basicUsageCode = `import { Glimpse } from "@glimpse-ui/react";
import "@glimpse-ui/react/styles.css"; // Required styles

function MyCard() {
  return (
    <div className="card">
      <Glimpse variant="circle" width={48} height={48} />
      <div className="card-info">
        <Glimpse variant="text" width="60%" />
        <Glimpse variant="text" width="90%" />
      </div>
    </div>
  );
}`;

export function BasicUsageSection() {
  return (
    <section id="basic-usage" className="doc-section">
      <h2 className="doc-title">Basic Usage</h2>
      <p className="doc-text">
        To start using Glimpse, import the <code>Glimpse</code> component and
        its corresponding stylesheet. By default, the placeholder renders with a
        shimmer animation styling:
      </p>
      <CodeBlock code={basicUsageCode} language="tsx" />
    </section>
  );
}
