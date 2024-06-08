"use client";

import NavbarLink from "./NavbarLink";
import { FiSearch } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

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
        {isLogged ? (
          <NavbarLink link="/user/logout">
            <IoIosLogOut />
            LogOut
          </NavbarLink>
        ) : (
          <NavbarLink link="/user/login">
            <IoIosLogIn />
            Login
          </NavbarLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
