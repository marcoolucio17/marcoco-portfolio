"use client";

import React from "react";
import { FlippingCard } from "../ui/FlippingCard";
import { Typewriter } from "nextjs-simple-typewriter";

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

        <div className="flex flex-col gap-12 md:gap-7 flex-1">
          <h2 className="h-2/3 md:h-1/3 lg:h-1/3">
            I&apos;m a software engineer who doesn&apos;t just code—
            <Typewriter
              words={[
                "I create experiences.",
                "I craft user journeys.",
                "I solve complex problems.",
                "I turn ideas into reality.",
                "I engineer solutions.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
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
