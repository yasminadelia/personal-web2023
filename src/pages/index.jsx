import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Experiences from "../components/home/Experiences";
import ProjectSection from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yasmin Adelia</title>
        <meta name="description" content="Yasmin Adelia's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="text-gray-100 text-[3rem] mb-6 leading-relaxed">
          Hello, <br /> I&apos;m
          <span className="p-2 m-2 bg-theme2 rounded-full border drop-shadow-lg">
            Yasmin Adelia
          </span>
        </h1>

        <p className="w-3/4">
          I&apos;m a computer science fresh graduate, based in Jakarta,
          Indonesia. Currently working as a Front-end Developer using NextJS and
          TailwindCSS.
        </p>

        <Experiences />
        <Skills />
        <ProjectSection />
      </main>
    </Layout>
  );
}
