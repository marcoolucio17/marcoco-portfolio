import React from "react";
import { ExperienceUnit } from "../ui/ExperienceUnit";
import { useTranslations } from "next-intl";

export default function WorkExperience() {
  const t = useTranslations("experience");

  const experiences = [
    {
      title: "SOFTWARE ENGINEER @ ORACLE",
      company: "ORACLE"
    },
    {
      title: "CYBERSECURITY INTERN @ TEC DE MTY",
      company: "TEC DE MTY"
    },
    {
      title: "SOFTWARE ENGINEER INTERN @ BITAM",
      company: "BITAM"
    },
    {
      title: "SOFTWARE ENGINEER @ MEDICFLOW",
      company: "MEDICFLOW"
    }
  ];

  const companies = [
    "oracle", 
    "tec",
    "bitam",
    "medicflow"
  ]

  return (
    <div id="work-experience-section" className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">

      {/* Left side - Title and contact info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start">

        <div>
          <div className="text-7xl mb-6">
            my
          </div>
          <div className="text-7xl leading-tight mb-6">
            <span className="">(relevant)</span>
          </div>
          <div className="text-7xl leading-tight">
            experience
          </div>
        </div>
        
        <div className="mt-15">
          <h3 className="font-sans mb-10">
            If interested in any of these<br />
            experiences or would like to
            know more details, contact me:
          </h3>
          <p className="font-mono text-sm lg:text-base">
            ✉️ marcoalucio15@gmail.com
          </p>
        </div>
      </div>

      {/* Right side - Experience list */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 lg:gap-12">
        {companies.map((c, index) => (
          <ExperienceUnit
              key={index}
              title={t("jobs." + c + ".title")}
              period={t("jobs." + c + ".period")}
              description={t("jobs." + c + ".description")}
            />
        ))}
      </div>
    </div>
  );
}