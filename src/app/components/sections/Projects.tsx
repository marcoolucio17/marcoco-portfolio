import React from "react";
import { useTranslations } from "next-intl";

export default function Projects() {
  // const t = useTranslations("projects");

  return (
    <div id="projects-section" className="w-full py-8 flex flex-col gap-12">
      <div className="w-3/4 mb-8">
        <div className="text-7xl font-light leading-tight">
          my educational & personal projects
        </div>
      </div>

      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full min-h-[400px]">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-4xl font-sans leading-tight">Path Explorer</h2>
            <div className="text-base leading-relaxed my-4">
              <p className = "font-sans">
                Web application that{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  promotes and eases internal growth
                </span>{" "}
                within Accenture.
              </p>
            </div>
            <p className="text-base font-sans leading-relaxed">
              Built using React, Javascript, Supabase & Gemini AI.
            </p>
          </div>

          <div className="w-[400px] md:w-[500px] h-[300px] overflow-hidden border rounded-lg">
            <iframe
              src="https://path-explorer-beta-sandy.vercel.app/"
              className="scale-[0.4] origin-top-left w-[250%] h-[250%] border-0"
              title="Path Explorer Web Application"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full min-h-[400px]">
          <div className="flex-1 flex flex-col justify-center gap-6 text-left lg:text-right">
            <h2 className="text-4xl font-sans leading-tight">Ixpolin</h2>
            <div className="text-base leading-relaxed my-4">
              <p className = "font-sans">
                Web application that{" "}
                <span className="text-gray-600 dark:text-gray-400">
                    provides a deeper and modern solution to contemporary education.
                </span>{" "}
                
              </p>
            </div>
            <p className="text-base font-sans leading-relaxed">
              Built with Unity, Next.js and PostgreSQL.
            </p>
          </div>
          <div className="w-[400px] md:w-[500px] h-[300px] overflow-hidden rounded-lg">
            <iframe
              src="https://proyecto-k.vercel.app/"
              className="scale-50 origin-top-left w-[200%] h-[200%]"
              title="Path Explorer Web Application"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
