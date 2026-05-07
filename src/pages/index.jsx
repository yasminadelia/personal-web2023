import Head from "next/head";
import ProjectSection from "../components/home/ProjectSection";
import Layout from "../components/layout/Layout";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillSection from "../components/home/SkillSection";
import AchievementsSection from "../components/home/AchievementsSection";
import ContactSection from "../components/home/ContactSection";
import { useState, useEffect } from "react";
import Modal from "../components/modals/modal";
import ModalProject from "../components/modals/ModalProject";
import { ButtonSys } from "../components/buttons";
import Link from "next/link";
import { achievements } from "../content";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({});
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(() =>
    Math.floor(Math.random() * achievements.length)
  );
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const fullText = achievements[currentAchievementIndex].description;
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 60); // Speed of typing (50ms per character)

    return () => clearInterval(typingInterval);
  }, [currentAchievementIndex]);

  // Change achievement every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievementIndex(
        (prevIndex) => (prevIndex + 1) % achievements.length
      );
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Yasmin Adelia</title>
        <meta name="description" content="Yasmin Adelia's personal website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main ">
        <header className="flex flex-col justify-center items-center w-full mb-8">
          <h1 className="text-gray-100 z-10 mb-5 text-4xl leading-relaxed md:text-[3rem] text-center">
            Hello, I&apos;m
            <span className="m-2 rounded-full border bg-theme2 p-2 drop-shadow-lg whitespace-nowrap">
              Yasmin Adelia
            </span>
          </h1>

          <p className="z-10 text-center md:w-3/4 text-lg md:text-xl font-semibold  min-h-[4rem] flex items-center justify-center">
            Software Engineer experienced in {displayedText}
            <span className="inline-block w-[3px] h-[1.2em] bg-black ml-1 animate-blink align-middle"></span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {/* <Link
              href="#projects"
              className="font-semibold text-black no-underline hover:text-black hover:no-underline "
            >
              <ButtonSys
                className="whitespace-nowrap"
                bgColor={"bg-theme3"}
                padding="p-3"
              >
                <p>View Projects</p>
              </ButtonSys>
            </Link> */}

            <Link
              href="#contact"
              className="font-semibold text-black no-underline hover:text-black hover:no-underline "
            >
              <ButtonSys
                className="whitespace-nowrap"
                bgColor={"bg-theme3"}
                padding="p-3"
              >
                <p>Contact Me</p>
              </ButtonSys>
            </Link>
          </div>
        </header>

        {/* <img className={"absolute"} style={{ width: "20px" }} src={Blobs1} /> */}
        {/* <Image
          src={Blobs1}
          alt="blobs svg"
          width={700}
          className="absolute top-20 -right-[15rem] z-0"
          // style={{ float: "right" }}
        ></Image> */}

        {/* <AchievementsSection /> */}
        <ExperienceSection />
        <SkillSection />
        <ProjectSection
          setIsModalOpen={setIsModalOpen}
          setCurrentData={setCurrentModalData}
        />
        <ContactSection />
      </main>

      <ModalProject
        projectData={currentModalData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Layout>
  );
}
