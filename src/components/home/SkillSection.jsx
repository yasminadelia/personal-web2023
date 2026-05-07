import Image from "next/image";
import React from "react";

import Section from "./Section";
import { toolCategories } from "../../content";

const SkillSection = () => {
  return (
    <Section title="Tech Stack">
      <div className="space-y-8">
        {toolCategories.map(({ category, tools }) => (
          <div key={category} className="px-2">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
              {tools.map(({ logo, name }) => (
                <li
                  key={name}
                  className="flex flex-col items-center justify-center space-y-2 p-4 rounded-xl 
                  border-2 border-transparent hover:border-black hover:bg-theme2 
                  transition duration-300 hover:scale-110"
                >
                  <Image src={logo} alt={`${name} logo`} width={60} />
                  <p className="font-semibold">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
