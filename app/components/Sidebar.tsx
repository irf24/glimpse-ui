"use client";

import React from "react";
import type { ThemeMode } from "../types";

interface SidebarProps {
  activeSection: string;
  isMenuOpen: boolean;
  theme: ThemeMode;
  toggleTheme: () => void;
  onLinkClick: (id: string) => void;
}

export function Sidebar({
  activeSection,
  isMenuOpen,
  theme,
  toggleTheme,
  onLinkClick,
}: SidebarProps) {
  const navGroups = [
    {
      title: "Getting Started",
      links: [
        { id: "overview", label: "Overview" },
        { id: "installation", label: "Installation" },
        { id: "basic-usage", label: "Basic Usage" },
      ],
    },
    {
      title: "Interactive Sandbox",
      links: [{ id: "playground", label: "Live Playground" }],
    },
    {
      title: "Customization & API",
      links: [
        { id: "api-reference", label: "API Reference" },
        { id: "customization", label: "Theming & Styling" },
        { id: "accessibility", label: "Accessibility" },
      ],
    },
  ];

  return (
    <nav
      className={`doc-sidebar ${isMenuOpen ? "doc-sidebar--open" : ""}`}
      aria-label="Documentation navigation"
    >
      <div style={{ display: "none" }} className="mobile-header" />

      {navGroups.map((group) => (
        <div className="doc-nav-group" key={group.title}>
          <span className="doc-nav-group__title">{group.title}</span>
          <ul className="doc-nav-links">
            {group.links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`doc-nav-link ${activeSection === link.id ? "doc-nav-link--active" : ""}`}
                  onClick={() => onLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="sidebar-footer">
        <div className="sidebar-theme-toggle">
          <div className="sidebar-theme-toggle__control">
            <span className="sidebar-theme-toggle__icon">🌙</span>
            <button
              className={`theme-toggle ${theme === "light" ? "theme-toggle--light" : ""}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            />
            <span className="sidebar-theme-toggle__icon">☀️</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
