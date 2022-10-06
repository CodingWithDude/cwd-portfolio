import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 transition-all duration-500`}
    >
      <div className="flex items-center justify-between text-sm  text-white">
        <h1>Coding With Dude</h1>
        <nav className="flex">
          <ul className=" flex items-center space-x-8">
            <li>
              <Link href="/">
                <a className="group">
                  <span className="navLinkNumber">01. </span>
                  <span className="navLinkTitle">About</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="group">
                  <span className="navLinkNumber">02. </span>
                  <span className="navLinkTitle">Experience</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="group">
                  <span className="navLinkNumber">03. </span>
                  <span className="navLinkTitle">Work</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="group">
                  <span className="navLinkNumber">04. </span>
                  <span className="navLinkTitle">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
          <button className="ml-8 rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] contrast-75 filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
