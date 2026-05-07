import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ButtonSys } from "../buttons";
import { HomeIcon } from "../icons";

const Header = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="relative z-20 flex h-20 items-center justify-between border-b border-black bg-theme3 px-12 drop-shadow-lg ">
      <Link
        href="/"
        className="font-semibold text-black no-underline hover:text-black hover:no-underline"
      >
        <ButtonSys
          className="mr-2 whitespace-nowrap"
          bgColor={isActive("/") ? "bg-theme7" : "bg-theme2"}
          padding={"p-2"}
        >
          <HomeIcon size={"34"} color={isActive("/") ? "white" : "black"} />
        </ButtonSys>
      </Link>
      <ul className="grid grid-flow-col">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="font-semibold text-black no-underline hover:text-black hover:no-underline"
            >
              <ButtonSys
                className="mr-2 whitespace-nowrap"
                bgColor={isActive(href) ? "bg-theme7" : "bg-theme2"}
                padding={"p-2"}
              >
                <p className={isActive(href) ? "text-white font-bold" : ""}>
                  {label}
                </p>
              </ButtonSys>
            </Link>
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
