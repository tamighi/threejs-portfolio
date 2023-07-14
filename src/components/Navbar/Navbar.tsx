import React from "react";

import { styles } from "../../styles";
import { menu, close } from "../../assets";
import { NavLogo } from "./NavLogo";
import { MobileLinkList } from "./MobileLinkList";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full py-5 fixed top-0 z-50 bg-primary`}
    >
      <div className="flex-grow flex justify-between items-center max-w-7xl mx-auto">
        <NavLogo />
        <ul className="list-none sm:flex hidden flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex">
          <MobileLinkList navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
