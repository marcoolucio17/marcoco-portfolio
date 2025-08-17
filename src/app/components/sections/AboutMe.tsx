"use client";

import React from "react";
import { FlippingCard } from "../ui/FlippingCard";
import { Typewriter } from "nextjs-simple-typewriter";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const tAbout = useTranslations("about");
  const tIntro = useTranslations("intro");

  const writerMessages = [
    tIntro("typewriterWords.0"),
    tIntro("typewriterWords.1"),
    tIntro("typewriterWords.2"),
    tIntro("typewriterWords.3"),
    tIntro("typewriterWords.4"),
  ]

  return (
    <div id="about-me-main-div" className="flex flex-col w-full h-full gap-20">
      <div>
        <h1>{tAbout("title")}</h1>
      </div>

      <div
        id="image-and-desc-div"
        className="flex flex-col lg:flex-row w-full gap-6 lg:gap-20"
      >
        <div className="">
          <FlippingCard
            imageSrc="/marcocoysol.jpg"
            width={300}
            height={300}
            imageAlt={tAbout("flipcard.alt")}
            backText={tAbout("flipcard.backText")}
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-7 flex-1">
          <h2 className="h-2/3 md:h-1/3 lg:h-1/3">
            {tIntro("greeting")}
            <Typewriter
              words={writerMessages}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="font-mono">
            {tAbout("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
