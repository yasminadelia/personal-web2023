import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";
import ProfileImage from "../assets/images/profile2.png";
import Image from "next/image";
import { learningTopics } from "../content";
import { ButtonSys } from "../components/buttons";
import MailLogo from "../assets/images/logo-mail.svg";
import LinkedinLogo from "../assets/images/logo-linkedin.svg";

const About = () => {
  const ConnectCard = () => (
    <div className="mt-5 p-3 lg:p-6 bg-theme3 rounded-xl border-2 border-black xl:w-10/12 z-0">
      <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect!</h2>
      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="mailto:yasminadelia11@gmail.com"
          className=" text-black hover:text-black no-underline hover:no-underline"
        >
          <ButtonSys padding={"px-3 pt-2"} bgColor={"bg-theme2"}>
            <span className="inline-flex items-center gap-2 text-xs lg:text-sm">
              <Image src={MailLogo} alt="Email" width={24} />
              yasminadelia11@gmail.com
            </span>
          </ButtonSys>
        </a>

        <a
          href="https://www.linkedin.com/in/yasminadelia/"
          target="_blank"
          rel="noreferrer"
          className=" text-black hover:text-black no-underline hover:no-underline"
        >
          <ButtonSys padding={"px-3 pt-2"} bgColor={"bg-theme2"}>
            <span className="inline-flex items-center gap-2 text-sm">
              <Image src={LinkedinLogo} alt="LinkedIn" width={24} />
              Yasmin Adelia
            </span>
          </ButtonSys>
        </a>
      </div>
    </div>
  );

  const DisclaimerText = () => (
    <div className="mt-5 text-xs italic text-gray-500">
      Disclaimer: This website was built with the help of AI tools for coding
      and image generation. All content has been reviewed and edited by me to
      ensure accuracy and personal touch.
    </div>
  );
  return (
    <Layout>
      <Head>
        <title>About me</title>
        <meta name="description" content="About Yasmin" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main relative">
        <div className="flex flex-col-reverse items-start md:flex-row md:relative">
          <div className="md:w-2/3 relative z-10">
            <h1 className="text-gray-100 mb-4 text-[1.5rem] md:text-[2rem] leading-relaxed font-bold">
              Hi there, I&apos;m Yasmin Adelia
            </h1>

            <p className="text-left md:w-10/12">
              I&apos;m a Software Engineer experienced in building web
              applications for high-traffic systems. I graduated with a Bachelor
              of Computer Science degree from Universitas Indonesia in September
              2022.
              <br />
              <br />
              I initially started my professional work as a Front-end Developer
              in late 2022 for more than a year, using React.js and Tailwind as
              the main stacks. Then, a new opportunity came along and I got the
              chance to work as a Full-stack Developer, so I also learned
              back-end, mainly using Laravel PHP.
              <br />
              <br />
              In my latest job, I developed and maintained a high-traffic
              government applications, and also developed other government
              application using Vue. I&apos;ve improved application performance
              by up to 3x through caching strategies, reduced build times by 2x
              with Vite integration, and resolved critical security
              vulnerabilities identified by BSSN.
              <br />
              <br />
              I&apos;m passionate about creating user-friendly, secure, and
              maintainable applications. Currently expanding my skills in{" "}
              {learningTopics.join(", ")}.
              <br />
              <br />
              Aside from coding, I love photography, traveling, and also
              exploring cafes for WFC.
            </p>
            <div className="block md:hidden xl:block ">
              <ConnectCard />
            </div>
            <div className="">
              <DisclaimerText />
            </div>
          </div>
          <div className="relative  w-full md:absolute -top-10 md:right-0 md:w-[40%] md:mb-0 z-5">
            <Image
              src={ProfileImage}
              alt="profile photo"
              className="w-full h-auto rounded-2xl rounded-bl-[200px] 
              md:rounded-tr-none md:rounded-tl-none rounded-br-[200px] 
              border-2 border-black object-cover drop-shadow-2xl
              "
            ></Image>
            <div className="hidden md:block xl:hidden ">
              <ConnectCard />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
