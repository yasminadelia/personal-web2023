import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="py-5 px-12 bg-theme3 rounded-b-xl">
      <ul className="flex flex-row justify-left space-x-7">
        {links.map(({ label, href }) => (
          <li
            key={label}
            className="font-semibold rounded-full p-2 hover:bg-theme2 "
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
