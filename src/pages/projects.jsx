import Head from "next/head";
import React, { useState } from "react";
import CardProject from "../components/CardProject";
import Layout from "../components/layout/Layout";
import { projects } from "../content";
import ModalProject from "../components/modals/ModalProject";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects that have been done by Yasmin"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <h1 className="text-gray-100 mb-6 text-[2rem] leading-relaxed">
          Projects
        </h1>

        <p className="md:w-3/4">
          Here are some of the projects that I have done in university courses,
          internship, work, and personal projects.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((item) => (
            <CardProject
              key={item.title}
              title={item.title}
              date={item.date}
              desc={item.desc}
              tools={item.tools}
              webLink={item.webLink}
              repoLink={item.repoLink}
              onClick={() => {
                setCurrentModalData(item);
                setIsModalOpen(true);
              }}
            />
          ))}
        </ul>
      </main>

      <ModalProject
        projectData={currentModalData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Layout>
  );
};

export default Projects;
