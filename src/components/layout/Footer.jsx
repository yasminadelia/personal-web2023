import React from "react";
import GitlabLogo from "../../assets/images/logo-gitlab.svg";
import GithubLogo from "../../assets/images/logo-github.svg";
import MediumLogo from "../../assets/images/logo-medium.svg";
import LinkedinLogo from "../../assets/images/logo-linkedin.svg";
import MailLogo from "../../assets/images/logo-mail.svg";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center border-t bg-theme3 py-8 px-12 font-semibold drop-shadow-lg">
      {/* <div className="mb-4 text-center">
        <p className="text-lg font-bold mb-2">✨ Open to New Opportunities</p>
        <a
          href="mailto:yasminadelia11@gmail.com"
          className="text-theme5 hover:text-black text-lg font-semibold underline"
        >
          yasminadelia11@gmail.com
        </a>
      </div> */}

      {/* <ul className="mb-5 flex flex-row">
        {links.map(({ logo, name, url }) => (
          <li
            key={name}
            className="mb-3 flex flex-col items-center justify-center"
          >
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 hover:bg-theme2 transition duration-300"
            >
              <Image src={logo} alt={`${name} logo`} width={40} />
            </a>
          </li>
        ))}
      </ul> */}
      <p>© {currentYear} Made with 🖤 by Yasmin Adelia</p>
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
