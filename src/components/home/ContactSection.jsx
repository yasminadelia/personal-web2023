import React from "react";
import Section from "./Section";
import Image from "next/image";
import MailLogo from "../../assets/images/logo-mail.svg";
import LinkedinLogo from "../../assets/images/logo-linkedin.svg";
import GithubLogo from "../../assets/images/logo-github.svg";
import { learningTopics } from "../../content";
import { ButtonSys } from "../buttons";

const ContactSection = () => {
  return (
    <Section title="Let's Connect" id="contact">
      <div className="flex flex-col items-center justify-center space-y-6 py-8">
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-bold mb-4">Open to New Opportunities</h3>
          <p className="text-lg">
            I&apos;m currently open to full-stack engineering opportunities,
            especially in roles focusing on user-friendly design and secure
            applications. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a
            href="mailto:yasminadelia11@gmail.com"
            className=" text-black hover:text-black no-underline hover:no-underline"
          >
            <ButtonSys padding={"px-3 pt-2"} bgColor={"bg-theme2"}>
              <span className="inline-flex items-center gap-2 text-sm">
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

          <a
            href="https://github.com/yasminadelia"
            target="_blank"
            rel="noreferrer"
            className=" text-black hover:text-black no-underline hover:no-underline"
          >
            <ButtonSys padding={"px-3 pt-2"} bgColor={"bg-theme2"}>
              <span className="inline-flex items-center gap-2 text-sm">
                <Image src={GithubLogo} alt="GitHub" width={24} />
                yasminadelia
              </span>
            </ButtonSys>
          </a>
        </div>

        <div className="mt-8 p-6 bg-theme3 rounded-xl border-2 border-black max-w-xl text-center">
          <h4 className="font-bold text-lg mb-2"> Currently Learning</h4>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {learningTopics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-theme2 rounded-full text-sm font-semibold border"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
