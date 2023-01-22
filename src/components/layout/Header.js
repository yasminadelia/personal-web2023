import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="h-20 px-12 flex items-center bg-theme3 rounded-b-xl border-b-4 drop-shadow-lg border-black">
      <ul className="grid grid-flow-col justify-left">
        {links.map(({ label, href }) => (
          <li
            key={label}
            className="font-semibold text-center rounded-full p-1 mr-5 transition ease-in-out duration-300
            hover:bg-theme2 hover:border-b-4 hover:border-r-4 hover:scale-105"
          >
            <Link href={href}>{label}</Link>
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
