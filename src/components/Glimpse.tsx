"use client";

import React, { forwardRef } from "react";
import "../styles.css";

export interface GlimpseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant of the skeleton placeholder. */
  variant?: "text" | "circle" | "rectangle";
  /** Override width (CSS value or number in px). */
  width?: string | number;
  /** Override height (CSS value or number in px). */
  height?: string | number;
  /** Animation style applied to the skeleton. */
  animation?: "shimmer" | "pulse" | "none";
}

/**
 * Glimpse — A beautiful, GPU-accelerated skeleton placeholder.
 *
 * Fully SSR-safe. Renders a styled `<div>` with configurable shape,
 * size, and animation. Forwards refs and spreads all standard HTML
 * attributes for maximum composability.
 */
export const Glimpse = forwardRef<HTMLDivElement, GlimpseProps>(
  (
    {
      variant = "text",
      width,
      height,
      animation = "shimmer",
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "glimpse",
      `glimpse--${variant}`,
      `glimpse--${animation}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const mergedStyle: React.CSSProperties = {
      ...style,
      ...(width !== undefined
        ? { width: typeof width === "number" ? `${width}px` : width }
        : {}),
      ...(height !== undefined
        ? { height: typeof height === "number" ? `${height}px` : height }
        : {}),
    };

    return (
      <div
        ref={ref}
        className={classes}
        style={mergedStyle}
        aria-hidden="true"
        role="presentation"
        {...rest}
      />
    );
  }
);

Glimpse.displayName = "Glimpse";

export default Glimpse;
