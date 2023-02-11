import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "../components/home/ProjectSection";
import Layout from "../components/layout/Layout";
import Blobs1 from "../assets/images/blobs1.svg";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillSection from "../components/home/SkillSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yasmin Adelia</title>
        <meta name="description" content="Yasmin Adelia's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="text-gray-100 z-10 mb-6 text-4xl leading-relaxed md:text-[3rem]">
          Hello, <br /> I&apos;m
          <span className="m-2 rounded-full border bg-theme2 p-2 drop-shadow-lg">
            Yasmin Adelia
          </span>
        </h1>

        <p className="z-10 text-justify md:w-3/4">
          I&apos;m a computer science fresh graduate, based in Jakarta,
          Indonesia. Currently working as a Front-end Developer using NextJS and
          TailwindCSS.
        </p>

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
        <ProjectSection />
      </main>
    </Layout>
  );
}
