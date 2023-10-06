import Head from "next/head";
import ProjectSection from "../components/home/ProjectSection";
import Layout from "../components/layout/Layout";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillSection from "../components/home/SkillSection";
import { useState } from "react";
import Modal from "../components/modals/modal";
import ModalProject from "../components/modals/ModalProject";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({});

  return (
    <Layout>
      <Head>
        <title>Yasmin Adelia</title>
        <meta name="description" content="Yasmin Adelia's personal website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main ">
        <header className="flex flex-col justify-center items-center w-full">
          <h1 className="text-gray-100 z-10 mb-5 text-4xl leading-relaxed md:text-[3rem] text-center">
            Hello, I&apos;m
            <span className="m-2 rounded-full border bg-theme2 p-2 drop-shadow-lg whitespace-nowrap">
              Yasmin Adelia
            </span>
          </h1>

          <p className="z-10 text-center md:w-3/4">
            I&apos;m an aspiring software engineer based in Jakarta, Indonesia.
            Currently working as a Front-end Developer using NextJS and
            TailwindCSS for more than a year.
          </p>
        </header>

        {/* <img className={"absolute"} style={{ width: "20px" }} src={Blobs1} /> */}
        {/* <Image
          src={Blobs1}
          alt="blobs svg"
          width={700}
          className="absolute top-20 -right-[15rem] z-0"
          // style={{ float: "right" }}
        ></Image> */}

        <ExperienceSection />
        <SkillSection />
        <ProjectSection
          setIsModalOpen={setIsModalOpen}
          setCurrentData={setCurrentModalData}
        />
      </main>

      <ModalProject
        projectData={currentModalData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Layout>
  );
}
