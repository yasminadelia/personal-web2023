import Head from "next/head";
import React from "react";
import CardProject from "../components/CardProject";
import Layout from "../components/layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects that have been done by Yasmin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="text-gray-100 text-[2rem] mb-6 leading-relaxed">
          Projects
        </h1>

        <p className="w-3/4">
          Here are some of the projects that I have done in university courses,
          internship, work, and personal projects.
        </p>

        <ul className="grid grid-cols-3 gap-4 mt-10">
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
      </main>
    </Layout>
  );
};

export default Projects;

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
    tools: "HTML, CSS, Django",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "Farmakami",
    date: "2020",
    desc: "A website for pharmacy information system",
    tools: "HTML, CSS, Bootstrap, Django",
    webLink: "/",
    repoLink: "/",
  },
];
