import React from "react";

export function AccessibilitySection() {
  return (
    <section id="accessibility" className="doc-section">
      <h2 className="doc-title">Accessibility</h2>
      <p className="doc-text">
        Skeleton loading grids are visual indicators of progress and should
        remain invisible to assistive technology.
      </p>
      <p className="doc-text">
        Glimpse automatically adds standard aria tags to ensure a clean screen
        reader environment:
      </p>
      <ul className="accessibility-list">
        <li>
          <code>aria-hidden="true"</code> is appended to hide the structure from
          virtual rendering nodes.
        </li>
        <li>
          <code>role="presentation"</code> is specified to remove semantic
          layout roles.
        </li>
        <li>
          For parent wrapper panels containing placeholders, developers should
          add <code>aria-busy="true"</code> to notify clients that content is
          loading.
        </li>
      </ul>
    </section>
  );
}
