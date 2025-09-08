"use client";

import React from "react";
import { FlippingCard } from "../ui/FlippingCard";
import { Typewriter } from "nextjs-simple-typewriter";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ContactLink } from "../ui/ContactLink";

export default function AboutMe() {
  const tAbout = useTranslations("about");
  const tIntro = useTranslations("intro");

  const writerMessages = [
    tIntro("typewriterWords.0"),
    tIntro("typewriterWords.1"),
    tIntro("typewriterWords.2"),
    tIntro("typewriterWords.3"),
    tIntro("typewriterWords.4"),
  ];

  return (
    <div id="about-me-main-div" className="flex flex-col w-full h-full gap-20">
      <div
        id="image-and-desc-div"
        className="flex flex-col lg:flex-row w-full h-full gap-10 lg:gap-20 lg:justify-between"
      >
        <div className="w-full lg:w-1/3 flex flex-col justify-start min-h-[400px] lg:min-h-[500px]">
          {/* Header at top */}
          <div className="font-sans text-xl lg:text-2xl">
            <h2 className="font-sans leading-relaxed">
              I'm Marco Lucio, {" "}
              <span className="text-gray-500 ml-1">
                a Software Engineer Intern at Oracle.
              </span>
            </h2>
          </div>

          <div className="mt-20">
            <h3 className="font-sans text-sm lg:text-base leading-relaxed">
              {tAbout("description")}
            </h3>
          </div>
        </div>

        {/* Right side - Image and Social Media */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
          {/* Image at top */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/marcosombrero.png"
              alt="marco w/ a hat"
              height={200}
              width={600}
              className="lg:h-[300px] lg:w-[600px] object-cover rounded-2xl"
            />
          </div>

          {/* Social media at bottom */}
          <div
            id="social-media-main-container"
            className="flex flex-col gap-8 lg:gap-10 mt-10"
          >
            <div
              id="social-media-row-1"
              className="flex flex-row justify-center lg:justify-start gap-12 lg:gap-20"
            >
              {/* <h3 className="font-mono text-sm lg:text-base tracking-wider">SPOTIFY</h3> */}
              <ContactLink
                type="spotify"
                address="SPOTIFY"
                url="https://open.spotify.com/user/luigilucs"
              />

              <ContactLink
                type="steam"
                address="STEAM"
                url="https://steamcommunity.com/profiles/76561199251618925/"
              />

            </div>

            <div
              id="social-media-row-2"
              className="flex flex-row justify-center lg:justify-end"
            >
              <ContactLink
                type="github"
                address="github.com/marcoolucio17"
                url="https://github.com/marcoolucio17"
              />
            </div>

            <div
              id="social-media-row-3"
              className="flex flex-row justify-center lg:justify-start"
            >
              <ContactLink
                type="linkedin"
                address="Marco Lucio"
                url="https://www.linkedin.com/in/marco-lucio-3a24b0214/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
