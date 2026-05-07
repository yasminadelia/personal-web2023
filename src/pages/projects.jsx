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
        <div className="mb-10">
          <h1 className="text-gray-100 mb-4 text-[1.5rem] md:text-[2rem] leading-relaxed font-bold">
            All Projects
          </h1>
          <p className="text-lg md:text-xl">
            A collection of projects from university courses, internship, work,
            and self-learning.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <CardProject
              key={item.title}
              title={item.title}
              date={item.date}
              desc={item.desc}
              tools={item.tools}
              webLink={item.webLink}
              repoLink={item.repoLink}
              coverImage={item?.coverImage}
              badge={item?.badge}
              metrics={item?.metrics}
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
