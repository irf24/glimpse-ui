"use client";

import React, { useState, useCallback } from "react";

function highlightCode(code: string, language: string): string {
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "bash" || language === "sh") {
    html = html.replace(
      /(npm install|yarn add|pnpm add)/g,
      '<span class="tok-keyword">$1</span>',
    );
    html = html.replace(
      /(@glimpse-ui\/react)/g,
      '<span class="tok-string">$1</span>',
    );
    return html;
  }

  if (language === "css") {
    html = html.replace(
      /(\.[a-zA-Z0-9_-]+)/g,
      '<span class="tok-tag">$1</span>',
    );
    html = html.replace(
      /(--[a-zA-Z0-9_-]+)/g,
      '<span class="tok-keyword">$1</span>',
    );
    html = html.replace(
      /(#[a-fA-F0-9]+|hsl\([^)]+\)|[0-9]+px|[0-9.]+(s|ms|em|rem))/g,
      '<span class="tok-string">$1</span>',
    );
    return html;
  }

  // TSX/JSX
  html = html.replace(/(\/\/.*)/g, '<span class="tok-comment">$1</span>');
  html = html.replace(
    /(&quot;[^&]*&quot;|'[^']*')/g,
    '<span class="tok-string">$1</span>',
  );

  const keywords =
    /\b(import|from|const|function|return|export|default|interface|map)\b/g;
  html = html.replace(keywords, '<span class="tok-keyword">$1</span>');

  html = html.replace(
    /\b(React|useState|useCallback|useEffect|forwardRef|GlimpseProps|Glimpse|ProfileCardSkeleton|ProductCardSkeleton|TableSkeleton)\b/g,
    '<span class="tok-builtin">$1</span>',
  );

  html = html.replace(
    /(&lt;\/?[A-Z][a-zA-Z0-9]*)/g,
    '<span class="tok-tag">$1</span>',
  );
  html = html.replace(/(&lt;\/?[a-z]+)/g, '<span class="tok-tag">$1</span>');
  html = html.replace(/(\/?\&gt;)/g, '<span class="tok-tag">$1</span>');

  html = html.replace(
    /\b(variant|animation|height|width|style|className|ref|onClick|key)=\b/g,
    '<span class="tok-attr">$1</span>=',
  );

  html = html.replace(
    /([{}()[\],.])/g,
    '<span class="tok-punctuation">$1</span>',
  );
  html = html.replace(
    /(?<!&(?:lt|gt|amp|quot|apos|nbsp));/g,
    '<span class="tok-punctuation">;</span>',
  );

  return html;
}

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const highlightedHtml = highlightCode(code, language);

  return (
    <div className="code-block" id={`code-${language}-${code.length}`}>
      <div className="code-block__header">
        <span>{language.toUpperCase()}</span>
        <button
          className={`code-block__copy ${copied ? "code-block__copy--copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="code-block__content">
        <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      </pre>
    </div>
  );
}
