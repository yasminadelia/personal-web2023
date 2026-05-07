import React from "react";
import Section from "./Section";
import { experiences } from "../../content";
import { BuildingsIcon, CalendarWeekIcon, ToolsIcon } from "../icons";

const ExperienceSection = () => {
  return (
    <Section title={"Work Experiences"}>
      <div className="space-y-6 px-2 md:px-8">
        {experiences.map(
          ({ role, company, period, description, tools }, index) => (
            <div
              key={company}
              className="relative rounded-xl border-2 border-black bg-theme3 p-6 
            hover:shadow-xl group"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute -left-[18px] top-10 w-0.5 h-[calc(100%+1.5rem)] bg-black"></div>
              )}

              {/* Timeline dot */}
              <div
                className="absolute -left-[40px] -top-2 w-12 h-12 rounded-full  bg-white border-2 border-black 
            flex items-center justify-center font-bold text-lg shadow-xl z-10"
              >
                {index + 1}
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">
                  {role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex gap-2 items-center px-3 py-1 rounded-full bg-white border border-black font-semibold text-sm">
                    <BuildingsIcon size={16} color={"#000"} /> {company}
                  </span>
                  <span className="inline-flex gap-2 items-center px-3 py-1 rounded-full bg-white border border-black font-semibold text-sm">
                    <CalendarWeekIcon size={16} color={"#000"} /> {period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {description?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-black font-bold">▸</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              {tools && (
                <div className="pt-3 border-t border-black/20">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="inline-flex items-center gap-2 font-bold text-sm">
                      <ToolsIcon size={16} color={"#000"} />
                      Tech Stacks:
                    </span>
                    {tools.split(",").map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white rounded-md text-xs font-semibold border border-black/20"
                      >
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default ExperienceSection;
