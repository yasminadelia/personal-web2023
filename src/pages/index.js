import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Experiences from "../components/contents/Experiences";
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
        <h1 className="text-gray-100 font-bold text-4xl mb-6 leading-relaxed">
          Hello, <br /> I&apos;m
          <span className="p-2 m-2 bg-theme2 rounded-full">Yasmin Adelia</span>
        </h1>

        <p className="">
          A computer science fresh graduate, currently a Front-end Developer,
          based in Jakarta, Indonesia.
        </p>

        <Experiences />
      </main>

      <footer className="py-5 px-12 bg-theme3 rounded-t-xl flex justify-center font-semibold">
        Made with 🖤 by Yasmin Adelia
      </footer>
    </div>
  );
}
