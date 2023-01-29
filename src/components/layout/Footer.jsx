import React from "react";
import GitlabLogo from "../../assets/images/logo-gitlab.svg";
import GithubLogo from "../../assets/images/logo-github.svg";
import MediumLogo from "../../assets/images/logo-medium.svg";
import LinkedinLogo from "../../assets/images/logo-linkedin.svg";
import MailLogo from "../../assets/images/logo-mail.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center rounded-t-xl border-t bg-theme3 py-8 px-12 font-semibold drop-shadow-lg">
      {/* TODO: add contact and porto links */}
      <ul className="mb-5 flex flex-row">
        {links.map(({ logo, name, url }) => (
          <li
            key={name}
            className="mb-3 flex flex-col items-center justify-center"
          >
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 hover:bg-theme2"
            >
              <Image src={logo} alt={`${name} logo`} width={40} />
            </a>
          </li>
        ))}
      </ul>
      <p>Made with 🖤 by Yasmin Adelia</p>
    </footer>
  );
};

export default Footer;

const links = [
  {
    logo: GithubLogo,
    name: "Github",
    url: "https://github.com/yasminadelia",
  },
  {
    logo: GitlabLogo,
    name: "Gitlab",
    url: "https://gitlab.com/yasminadelia/",
  },
  {
    logo: MediumLogo,
    name: "Medium",
    url: "https://medium.com/@yasminadelia",
  },
  {
    logo: LinkedinLogo,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/yasminadelia/",
  },
  {
    logo: MailLogo,
    name: "E-mail",
    url: "mailto:yasminadelia11@gmail.com",
  },
];
