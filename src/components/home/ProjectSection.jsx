import Link from "next/link";
import React, { useState } from "react";
import CardProject from "../CardProject";
import Section from "./Section";
import { projects } from "../../content";

const ProjectSection = ({ setIsModalOpen, setCurrentData }) => {
  return (
    <Section title={"Highlighted Projects"}>
      <ul className="grid gap-4 pl-2 md:grid-cols-3">
        {projects.slice(0, 3).map((item) => (
          <CardProject
            key={item?.title}
            title={item?.title}
            date={item?.date}
            desc={item?.desc}
            tools={item?.tools}
            webLink={item?.webLink}
            repoLink={item?.repoLink}
            coverImage={item?.coverImage}
            onClick={() => {
              setCurrentData(item);
              setIsModalOpen(true);
            }}
          />
        ))}
      </ul>
      <Link
        href="/projects"
        className="m-5 flex justify-end text-black hover:text-black hover:opacity-70"
      >
        View more...
      </Link>
    </Section>
  );
};

export default ProjectSection;
