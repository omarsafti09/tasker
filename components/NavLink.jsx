import Link from "next/link";

const NavLink = ({ path, name }) => {
  return (
    <Link
      className="w-full md:w-48 h-24 text-black flex justify-center items-center hover:bg-red-600 hover:text-white"
      href={path}
    >
      {name}
    </Link>
  );
};

export default NavLink;
