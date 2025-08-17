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
    return (
      <div className="p-15 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="p-10 md:p-15 lg:p-15 ">
      <div className="flex flex-col gap-60">
        <Intro toggleTheme={toggleTheme} />
        <AboutMe />
        <WorkExperience />
        <ContactSection />
      </div>
    </div>
  );
}
