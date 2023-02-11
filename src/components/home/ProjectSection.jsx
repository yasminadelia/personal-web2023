import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardProject from "../CardProject";

const ProjectSection = () => {
  return (
    <section className="mb-8 w-full">
      <div className="my-8 flex items-center justify-between rounded-full border bg-theme2 py-2 px-4  drop-shadow-lg">
        <h2 className="text-2xl">Highlighted Projects</h2>
        <Link href="/projects">View more</Link>
      </div>
      {/* <ul className="pl-8 mb-4 list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      <ul className="grid gap-4 pl-2 md:grid-cols-3">
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
    title: "Learning System",
    date: "2021",
    desc: "Learning system web for an institute in Singapore",
    tools: "ReactJS, TailwindCSS",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "UMKM Platform",
    date: "2021",
    desc: "Website for applying enterprise (UMKM) permission.",
    tools: "ReactJS, TailwindCSS, Django REST Framework",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "MatkulPanda",
    date: "2020",
    desc: "Website used for read and give testimonies on courses in Fasilkom UI",
    tools: "HTML, CSS, Bootstrap, Django",
    webLink: "/",
    repoLink: "/",
  },
];
