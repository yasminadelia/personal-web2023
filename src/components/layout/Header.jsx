import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="h-20 px-12 flex items-center bg-theme3 rounded-b-xl border-b drop-shadow-lg border-black">
      <ul className="grid grid-flow-col justify-left">
        {links.map(({ label, href }) => (
          <li key={label} className="button-default mr-7">
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
