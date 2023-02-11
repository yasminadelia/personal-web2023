import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex h-20 items-center rounded-b-xl border-b border-black bg-theme3 px-12 drop-shadow-lg">
      <ul className="justify-left grid grid-flow-col">
        {links.map(({ label, href }) => (
          <li key={label} className="button-default mr-7 whitespace-nowrap">
            <Link
              href={href}
              className="text-black no-underline hover:text-black hover:no-underline"
            >
              {label}
            </Link>
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
