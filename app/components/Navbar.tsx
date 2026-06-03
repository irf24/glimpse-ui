"use client";

import React from "react";
import type { ThemeMode } from "../types";

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onLinkClick: (id: string) => void;
}

export function Navbar({
  theme,
  toggleTheme,
  isMenuOpen,
  toggleMenu,
  onLinkClick,
}: NavbarProps) {
  return (
    <header className="navbar" id="site-header">
      <a
        href="#overview"
        className="navbar__brand"
        onClick={() => onLinkClick("overview")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--sand-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
        <span>glimpse-ui</span>
      </a>

      <div className="navbar__actions">
        <a
          href="https://github.com/irf24/glimpse-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__btn navbar__github"
          aria-label="View Glimpse UI source on GitHub"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>

      <button
        className="navbar__menu-btn"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close sidebar menu" : "Open sidebar menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
    </header>
  );
}
