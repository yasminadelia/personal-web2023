import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";
import ProfileImage from "../assets/images/profile.jpg";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About me</title>
        <meta name="description" content="About Yasmin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main ">
        <div className="flex flex-col-reverse items-start md:flex-row">
          <div className="md:w-2/3">
            <h1 className="text-gray-100 mt-5 mb-6 text-[2rem] leading-relaxed md:mt-0">
              Hi there, you’ve visited About Me page.
            </h1>

            <p className="text-justify md:w-11/12">
              So, let me introduce myself a little bit more. I&apos;m Yasmin,
              others also called me as yas, min, asmin, yamin, mimin, minmin. I
              graduated with a Bachelor of Computer Science in September 2022.
              <br />
              <br />
              Currently, I really enjoy my life as a fully-remote front-end
              developer. I&apos;ve known and used ReactJS since February 2021
              during undergraduate course, internship, and current job, but
              I&apos;m still learning until now through online courses,
              projects, tweets, TikTok vids, or in other words{" "}
              <strong>✨the internet✨</strong>. I&apos;m also planning to
              expand my skill in back-end development, so wish me luck.
              <br />
              <br />
              Aside from coding stuff, I love photography, coffee, Taylor Swift,
              K-Drama, romanticizing my quite boring life on social media, and
              music! Check out my Spotify playlists{" "}
              <a
                href="https://open.spotify.com/user/yasminadelia?si=f6aafec41c384d3a"
                target={"_blank"}
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <Image
            src={ProfileImage}
            alt="profile photo"
            className="mt-4 rounded-xl border border-black object-contain drop-shadow-lg md:w-1/3"
          ></Image>
        </div>

        {/* TODO: add contact */}
        {/* <div>You can contact me at</div> */}
      </main>
    </Layout>
  );
};

export default About;
