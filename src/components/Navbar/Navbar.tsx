import { styles } from "../../styles";
import { NavLogo } from "./NavLogo";
import { MobileLinkList } from "./MobileLinkList";
import { DesktopLinkList } from "./DesktopLinkList";

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
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <NavLogo />
        <div className="sm:flex hidden">
          <DesktopLinkList navLinks={navLinks} />
        </div>
        <div className="sm:hidden flex">
          <MobileLinkList navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
