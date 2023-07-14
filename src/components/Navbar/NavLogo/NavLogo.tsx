import { Link } from "react-router-dom";
import { logo } from "../../../assets";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt="logo" className="w-9 h-9" />
      <p className="text-white text-[18px] font-bold cursor-pointer flex">
        Thomas Amighi
      </p>
    </Link>
  );
};

export default NavLogo;
