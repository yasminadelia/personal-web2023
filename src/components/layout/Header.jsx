import Link from "next/link";
import React from "react";
import { ButtonSys } from "../buttons";
import { HomeIcon } from "../icons";

const Header = () => {
  return (
    <nav className="flex h-20 items-center justify-between rounded-b-xl border-b border-black bg-theme3 px-12 drop-shadow-lg ">
      <Link href="/" className="rounded-lg p-2 hover:bg-theme2">
        <HomeIcon />
      </Link>
      <ul className="grid grid-flow-col">
        {links.map(({ label, href }) => (
          <li key={label}>
            <ButtonSys className="mr-2 whitespace-nowrap" bgColor={"bg-theme2"}>
              <Link
                href={href}
                className="font-semibold text-black no-underline hover:text-black hover:no-underline"
              >
                <h5>{label}</h5>
              </Link>
            </ButtonSys>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
];

export default Header;
