import Link from "next/link";
import React from "react";
import { ButtonSys } from "../buttons";

const Header = () => {
  return (
    <nav className="flex h-20 items-center rounded-b-xl border-b border-black bg-theme3 px-12 drop-shadow-lg">
      <ul className="justify-left grid grid-flow-col">
        {links.map(({ label, href }) => (
          <li key={label}>
            <ButtonSys className="mr-7 whitespace-nowrap" bgColor={"bg-theme2"}>
              <Link
                href={href}
                className="font-semibold text-black no-underline hover:text-black hover:no-underline"
              >
                {label}
              </Link>
            </ButtonSys>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
];

export default Header;
