import React from "react";
import { ExperienceUnit } from "../ui/ExperienceUnit";

export default function WorkExperience() {
  return (
    <div id="work-experience-section" className="w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-full">
          <h1 className="mb-12">my experience</h1>

          <div id="exp-type-shit" className="flex flex-col gap-10">
            <ExperienceUnit
              title="SOFTWARE ENGINEER INTERN @ ORACLE"
              period="Jul 2024 - Present"
              description="Constructed several web pages while also developing the iOS OBaaS SDK."
            />
            <ExperienceUnit
              title="CYBER THREAD-HUNTING INTERN @ TEC DE MTY"
              period="Feb 2025 - Present"
              description="Worked as a cyber thread-hunting analyst where I recognized and published a critical pattern of attacks."
            />
            <ExperienceUnit
              title="SOFTWARE ENGINEER INTERN @ BITAM"
              period="Oct 2023 - Jun 2024"
              description="Worked as a front-end engineer."
            />
            <ExperienceUnit
              title="COFOUNDER & SOFTWARE ENGINEER @ MEDICFLOW"
              period="Jun 2023 - Oct 2023"
              description="Worked as a front-end engineer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
