import Image from "next/image";
import React from "react";

import Section from "./Section";
import { tools } from "../../content";

const SkillSection = () => {
  return (
    <Section title="Tech Stacks">
      <ul className="flex flex-wrap justify-center pl-2">
        {tools.map(({ logo, name }) => (
          <li
            key={name}
            className="mb-3 mr-3 flex flex-col items-center justify-center space-y-2"
          >
            <Image src={logo} alt={`${name} logo`} width={60} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SkillSection;
