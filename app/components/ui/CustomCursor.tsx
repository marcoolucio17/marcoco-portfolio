// components/CustomCursor.js
"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("");

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;

      // some manual checking to trigger changes in styling
      if (target.matches("a, a *")) {
        setCursorState("link"); // don't think i need this one
      } else if (
        target.matches(
          'button, [role="button"], input[type="submit"], input[type="button"], .clickable, button *, image *'
        )
      ) {
        setCursorState("hover");
      } else if (
        target.matches(
          "input, textarea, [contenteditable], input *, textarea *"
        )
      ) {
        setCursorState("text");
      } else {
        setCursorState("");
      }
    };

    document.addEventListener("mousemove", updatePosition);
    return () => document.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className={`custom-cursor ${cursorState}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
