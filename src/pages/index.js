import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Experiences from "../components/contents/Experiences";
import ProjectSection from "../components/contents/Projects";
import Skills from "../components/contents/Skills";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yasmin Adelia</title>
        <meta name="description" content="Yasmin Adelia's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className="text-gray-100 text-[3rem] mb-6 leading-relaxed">
          Hello, <br /> I&apos;m
          <span className="p-2 m-2 bg-theme2 rounded-full border-2 drop-shadow-lg">
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

      <footer className="flex justify-center py-5 px-12 bg-theme3 rounded-t-xl border-t-4 drop-shadow-lg font-semibold">
        Made with 🖤 by Yasmin Adelia
      </footer>
    </div>
  );
}
