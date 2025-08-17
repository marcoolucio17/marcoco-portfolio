import React from "react";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { SquareThemeToggle } from "../ui/SquareThemeToggle";
import { ScrollButton } from "../ui/ScrollButton";

export default function Intro({ toggleTheme }: { toggleTheme: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

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
            <h3 className="mt-2">Software Engineer</h3>
          </div>

          <SquareThemeToggle />
        </div>
      </div>
      <div>
        <video
          className="w-full h-[50vh] object-cover"
          src={theme == "dark" ? "redgradient2.webm" : "bluegradient1.webm"}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <ScrollButton targetId="about-me-main-div">about me</ScrollButton>
          <ScrollButton targetId="work-experience-section">
            experience
          </ScrollButton>
        </div>
        <ScrollButton targetId="contact-section">contact</ScrollButton>
      </div>
    </div>
  );
}
