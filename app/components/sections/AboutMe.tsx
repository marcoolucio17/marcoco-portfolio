"use client";

import React from "react";
import { FlippingCard } from "../ui/FlippingCard";

export default function AboutMe() {
  return (
    <div id="about-me-main-div" className="flex flex-col w-full h-full gap-20">
      <div>
        <h1>whoami?</h1>
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
            imageAlt="marcoco y señor sol!! :3"
            backText="This is one of my favorite spots on Tlaquepaque, Jalisco, México. The artist is Rodo Padilla, and you should definitely check him out!!"
          />
        </div>

        <div className="flex flex-col gap-7 flex-1">
          <h2>
            I&apos;m a software engineer who doesn&apos;t just code—I
            create experiences.
          </h2>
          <p className="font-mono">
            I specialize on front-facing software, whether it&apos;s on a web or
            mobile application. Nevertheless, I describe myself more as a
            full-stack software engineer based on my projects & experience
            developing full-stack applications. Feel free to ask me more about
            this.
          </p>
        </div>
      </div>
    </div>
  );
}
