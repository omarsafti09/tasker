"use client";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import "@/components/components.css";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(1);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  if (collapsed == 1) {
    return (
      <nav className="w-full h-24 bg-teal-400 flex justify-center top-0">
        <span className="flex md:hidden justify-center items-center">
          <button onClick={handleCollapse}>
            <FaBars />
          </button>
        </span>
        <div className="w-full md:w-3/4 hidden md:flex justify-center md:justify-around">
          <NavLink path={"/"} name={"Home"} />
          <NavLink path={"/api/add"} name={"Add"} />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="animated w-full h-screen bg-teal-400 flex flex-col justify-around absolute top-0">
        <span className="flex justify-center items-center">
          <button onClick={handleCollapse}>
            <FaArrowLeft />
          </button>
        </span>
        <div className="w-full flex flex-col justify-center">
          <NavLink path={"/"} name={"Home"} />
          <NavLink path={"/add"} name={"Add"} />
        </div>
      </nav>
    );
  }
};

export default NavBar;
