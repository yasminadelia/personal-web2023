import Image from "next/image";
import React from "react";

import Section from "./Section";
import { toolCategories } from "../../content";

const SkillSection = () => {
  return (
    <Section title="Tech Stacks">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {toolCategories.map(({ category, tools }) => (
          <div
            key={category}
            className="rounded-xl border-2 border-black  bg-theme3 p-6 
            shadow-lg hover:shadow-xl"
          >
            {/* Category Header */}
            <div className="text-center mb-4 pb-3 border-b-2 border-black/20">
              <h3 className="text-lg font-bold">{category}</h3>
            </div>

            {/* Tech Stack Items */}
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map(({ logo, name }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-1 p-3 rounded-lg bg-white border-2 border-black/10
                  hover:border-black"
                  title={name}
                >
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={40}
                    height={40}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xs font-semibold text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
