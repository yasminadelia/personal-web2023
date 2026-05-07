import Link from "next/link";
import React, { useState } from "react";
import CardProject from "../CardProject";
import Section from "./Section";
import { projects } from "../../content";
import { ButtonSys } from "../buttons";
import { ChevronRightIcon, ChevronUpIcon } from "../icons";

const ProjectSection = ({ setIsModalOpen, setCurrentData }) => {
  return (
    <Section title={"Highlighted Projects"} id="projects">
      <ul className="grid gap-6 pl-2 md:grid-cols-3">
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
            badge={item?.badge}
            metrics={item?.metrics}
            onClick={() => {
              setCurrentData(item);
              setIsModalOpen(true);
            }}
          />
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="text-black hover:text-black no-underline hover:no-underline "
        >
          <ButtonSys bgColor={"bg-theme3"} padding={"p-3"}>
            <span className="inline-flex items-center gap-2 font-bold">
              View All Projects
              <ChevronRightIcon color={"#000"} />
            </span>
          </ButtonSys>
        </Link>
      </div>
    </Section>
  );
};

export default ProjectSection;
