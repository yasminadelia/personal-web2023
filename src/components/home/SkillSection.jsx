import Image from "next/image";
import React from "react";
import ReactLogo from "../../assets/images/logo-react.svg";
import JSLogo from "../../assets/images/logo-js.svg";
import HTMLLogo from "../../assets/images/logo-html.svg";
import CSSLogo from "../../assets/images/logo-css.svg";
import TailwindLogo from "../../assets/images/logo-tailwind.svg";
import GitLogo from "../../assets/images/logo-git.svg";
import FigmaLogo from "../../assets/images/logo-figma.svg";
import PythonLogo from "../../assets/images/logo-python.svg";
import PostgreLogo from "../../assets/images/logo-postgresql.svg";

const SkillSection = () => {
  return (
    <section className="mb-8 z-10">
      <h2 className="py-2 px-4 my-4 bg-theme2 rounded-full border drop-shadow-lg text-2xl">
        Skills
      </h2>
      {/* <ul className="pl-8 mb-4 list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      <ul className="flex flex-wrap pl-2">
        {tools.map(({ logo, name }) => (
          <li
            key={name}
            className="flex flex-col justify-center items-center space-y-2 mb-3 mr-3"
          >
            <Image src={logo} alt={`${name} logo`} width={60} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;

const skills = ["team work", "attention to detail"];

const tools = [
  {
    logo: ReactLogo,
    name: "ReactJS",
  },
  {
    logo: JSLogo,
    name: "JavaScript",
  },
  {
    logo: HTMLLogo,
    name: "HTML",
  },
  {
    logo: CSSLogo,
    name: "CSS",
  },
  {
    logo: TailwindLogo,
    name: "TailwindCSS",
  },
  {
    logo: GitLogo,
    name: "Git",
  },
  {
    logo: FigmaLogo,
    name: "Figma",
  },
  {
    logo: PythonLogo,
    name: "Python",
  },
  {
    logo: PostgreLogo,
    name: "PostgreSQL",
  },
];
