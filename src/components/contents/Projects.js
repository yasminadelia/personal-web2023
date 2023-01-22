import Image from "next/image";
import React from "react";

const ProjectSection = () => {
  return (
    <section className="mb-8">
      <h2 className="py-2 px-4 my-4 bg-theme2 rounded-full border-2 drop-shadow-lg text-2xl">
        Highlighted Projects
      </h2>
      {/* <ul className="pl-8 mb-4 list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      <ul className="flex flex-wrap pl-2">
        {projects.map(({ name }) => (
          <li
            key={name}
            className="flex flex-col justify-center items-center space-y-2 mb-3 mr-3"
          >
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

const projects = [
  {
    name: "test",
  },
];
