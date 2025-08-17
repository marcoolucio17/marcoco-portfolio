"use client";

import { useEffect, useState } from "react";
import { setUserLocale } from "@/src/services/locale";

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnClick = () => {
    setUserLocale("en");
  };

  const handleEsClick = () => {
    setUserLocale("es");
  };

  if (!mounted) {
    return (
      <div className="flex flex-row gap-15">
        <div className="flex flex-row items-center gap-2">
          <p className="font-mono text-sm animate-pulse">EN</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-mono text-sm animate-pulse">ES</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-4 justify-end mb-3">
      <div className="flex flex-row items-center gap-2">
        <button className="font-mono" onClick={handleEnClick}>
          <p>EN</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button className="font-mono" onClick={handleEsClick}>
          <p>ES</p>
        </button>
      </div>
    </div>
  );
}
