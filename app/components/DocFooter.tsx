import React from "react";

export function DocFooter() {
  return (
    <footer className="doc-footer" id="doc-page-footer">
      <p>
        Released under the{" "}
        <a
          href="https://github.com/irf24/glimpse-ui/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>
        . Built by{" "}
        <a
          href="https://github.com/irf24"
          target="_blank"
          rel="noopener noreferrer"
        >
          @irf24
        </a>
      </p>
      <p>
        <a
          href="https://github.com/irf24/glimpse-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
    </footer>
  );
}
