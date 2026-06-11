"use client";

import React, { useEffect } from "react";

export default function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Common Inspection and Source Viewing Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Ctrl + U (View Source)
      if (e.ctrlKey && key === "u") {
        e.preventDefault();
        return false;
      }

      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + I (Inspect)
      // Ctrl + Shift + J (Developer Console)
      // Ctrl + Shift + C (Inspect Element selector)
      if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
        return false;
      }

      // Ctrl + S (Save Page)
      if (e.ctrlKey && key === "s") {
        e.preventDefault();
        return false;
      }
    };

    // Add listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup listeners
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}
