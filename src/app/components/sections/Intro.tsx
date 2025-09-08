import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { SquareThemeToggle } from "../ui/SquareThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ScrollButton } from "../ui/ScrollButton";
import "../../styles/Intro.css";

export default function Intro() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const t = useTranslations("landing");
  const t2 = useTranslations("common");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="intro-section" className="flex flex-col mt-4 gap-15">
      <div className="flex flex-col items-center">
        <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-10">
          <div className="flex flex-col">
            <h1 className="font-serif h1">Marco A. Lucio Sosa</h1>
            <h3 className="mt-2">{t2("role")}</h3>
          </div>

          <div className="flex flex-col">
            <LanguageToggle />
            <SquareThemeToggle />
          </div>
        </div>
      </div>

      {/* Gradient background container with blobs */}
      <div className="w-full h-[50vh] overflow-hidden relative">
        {/* Main gradient background */}
        <div
          className={`w-full h-full ${
            theme === "dark" ? "animate-gradient-red" : "animate-gradient-blue"
          }`}
        />
        
        {/* Theme-aware blobs */}
        {theme === "dark" ? (
          <>
            <div className="blob blob-primary-red"></div>
            <div className="blob blob-secondary-red"></div>
            <div className="blob blob-tertiary-red"></div>
          </>
        ) : (
          <>
            <div className="blob blob-primary-blue"></div>
            <div className="blob blob-secondary-blue"></div>
            <div className="blob blob-tertiary-blue"></div>
          </>
        )}
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <ScrollButton targetId="about-me-main-div">
            {t("about me")}
          </ScrollButton>
          <ScrollButton targetId="work-experience-section">
            {t("experience")}
          </ScrollButton>
        </div>
        <ScrollButton targetId="contact-section">{t("contact")}</ScrollButton>
      </div>
    </div>
  );
}