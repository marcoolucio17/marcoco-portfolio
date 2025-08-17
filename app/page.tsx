"use client";

import Image from "next/image";
import Intro from "./components/sections/Intro";
import AboutMe from "./components/sections/AboutMe";
import WorkExperience from "./components/sections/WorkExperience";
import { ContactSection } from "./components/sections/ContactSection";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="p-15">
      <div className = "flex flex-col gap-60">
        <Intro toggleTheme={toggleTheme} />
        <AboutMe />
        <WorkExperience />
        <ContactSection />
      </div>
    </div>
  );
}
