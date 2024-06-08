import NavbarLink from "./NavbarLink";
import { FiSearch } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="rounded-lg border border-solid border-neutral-800 px-5 py-4">
      <ul className="text-md flex items-center gap-4 font-medium text-neutral-300">
        <NavbarLink link="/scores">
          <MdScoreboard />
          Scores
        </NavbarLink>
        <NavbarLink link="/news">
          <FaRegNewspaper /> News
        </NavbarLink>
        <NavbarLink link="/search">
          <FiSearch /> Search
        </NavbarLink>
        <NavbarLink link="/login">
          <IoIosLogIn />
          Login
        </NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;
