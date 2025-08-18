"use client";

import { useEffect, useState } from "react";
import { setUserLocale } from "@/src/services/locale";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  console.log(locale);

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
    <div className="flex flex-row gap-4 justify-start md:justify-end lg:justify-end mb-4">
      <div className="flex flex-row items-center gap-2">
        <button className={`font-mono ${locale === "en" ? "underline": ""}`} onClick={handleEnClick}>
          <p>EN</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button className={`font-mono ${locale === "es" ? "underline": ""}`} onClick={handleEsClick}>
          <p>ES</p>
        </button>
      </div>
    </div>
  );
}
