import Link from "next/link";

const NavbarLink = ({ children, link }) => {
  return (
    <li>
      <Link
        className={`ransition-all flex items-center gap-1 rounded-md px-2 py-1 duration-300 hover:bg-neutral-700 ${children.includes("Login") || children.includes("LogOut") ? "bg-red-500 hover:bg-red-700 hover:shadow-button hover:shadow-red-700" : ""}`}
        href={link}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
