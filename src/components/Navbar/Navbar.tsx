import React from "react";

import { styles } from "../../styles";
import { menu, close } from "../../assets";
import { NavLogo } from "./NavLogo";

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
  const [toggle, setToggle] = React.useState(false);
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
