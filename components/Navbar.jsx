"use client";

import NavbarLink from "./NavbarLink";
import { FiSearch } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="rounded-lg border border-solid border-neutral-800 px-5 py-4">
      <ul className="text-md flex items-center gap-4 font-medium text-neutral-300">
        <NavbarLink link="/">
          <MdScoreboard />
          Scores
        </NavbarLink>
        <NavbarLink link="/news">
          <FaRegNewspaper /> News
        </NavbarLink>
        <NavbarLink link="#">
          <FiSearch /> Search
        </NavbarLink>
        {session ? (
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
