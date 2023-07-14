import React from "react";
import { menu, close } from "../../../assets";

type Props = {
  navLinks: { id: string; title: string }[];
};

const MobileLinkList = (props: Props) => {
  const { navLinks } = props;
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
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
    </>
  );
};

export default MobileLinkList;
