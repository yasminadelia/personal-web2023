import Image from "next/image";
import React from "react";
import CardProject from "../CardProject";

const ProjectSection = () => {
  return (
    <section className="mb-8 w-full">
      <h2 className="py-2 px-4 my-4 bg-theme2 rounded-full border drop-shadow-lg text-2xl">
        Highlighted Projects
      </h2>
      {/* <ul className="pl-8 mb-4 list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      <ul className="grid grid-cols-2 gap-10 pl-2">
        {projects.map(({ title, date, desc, tools, webLink, repoLink }) => (
          <CardProject
            key={title}
            title={title}
            date={date}
            desc={desc}
            tools={tools}
            webLink={webLink}
            repoLink={repoLink}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

const projects = [
  {
    title: "Project 1",
    date: "Jan, 2021",
    desc: "Lorem ipsum dolor sit amet",
    tools: "ReactJS, TailwindCSS",
    webLink: "/",
    repoLink: "/",
  },
];
