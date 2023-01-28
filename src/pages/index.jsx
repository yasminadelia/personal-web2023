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
        <h1 className="text-gray-100 text-[3rem] mb-6 leading-relaxed z-10">
          Hello, <br /> I&apos;m
          <span className="p-2 m-2 bg-theme2 rounded-full border drop-shadow-lg">
            Yasmin Adelia
          </span>
        </h1>

        <p className="w-3/4 z-10">
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
