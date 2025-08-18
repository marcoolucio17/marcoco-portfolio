import React from "react";
import { ExperienceUnit } from "../ui/ExperienceUnit";
import { useTranslations } from "next-intl";


export default function WorkExperience() {
  const t = useTranslations("experience");

  return (
    <div id="work-experience-section" className="w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-full">
          <h1 className="mb-12">{t("title")}</h1>

          <div id="exp-type-shit" className="flex flex-col gap-10">
            <ExperienceUnit
              title={t("jobs.oracle.title")}
              period={t("jobs.oracle.period")}
              description={t("jobs.oracle.description")}
            />
            <ExperienceUnit
              title={t("jobs.tec.title")}
              period={t("jobs.tec.period")}
              description={t("jobs.tec.description")}
            />
            <ExperienceUnit
              title={t("jobs.bitam.title")}
              period={t("jobs.bitam.period")}
              description={t("jobs.bitam.description")}
            />
            <ExperienceUnit
              title={t("jobs.medicflow.title")}
              period={t("jobs.medicflow.period")}
              description={t("jobs.medicflow.description")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
