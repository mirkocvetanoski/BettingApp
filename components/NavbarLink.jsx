import Link from "next/link";

const NavbarLink = ({ children, link }) => {
  return (
    <li>
      <Link
        className={`flex items-center gap-1 rounded-md px-2 py-1 transition-all duration-300 hover:bg-neutral-700 ${children.includes("Login") ? "bg-red-500 hover:bg-red-700 hover:shadow-lg hover:shadow-red-700" : ""}`}
        href={link}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
