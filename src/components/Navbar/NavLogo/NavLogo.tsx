import { Link } from "react-router-dom";
import { logo } from "../../../assets";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-4"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt="logo" className="w-9 h-9" />
      <span className="text-white text-[18px] font-bold">
        Thomas Amighi
      </span>
    </Link>
  );
};

export default NavLogo;
