import Link from "next/link";
import { useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky  ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } m-3 h-24 transition-all duration-500`}
    >
      <div
        className={
          isOpen
            ? "fixed top-0 h-full w-full backdrop-blur-sm duration-500 ease-in-out"
            : "fixed top-0 h-full w-full duration-500 ease-in-out"
        }
      ></div>
      <div className="-mr-2 flex items-center justify-between text-sm text-white">
        <h1 className="pl-3">Coding With Dude</h1>
        <div className="z-[1000] md:hidden">
          <Hamburger
            color="#64ffda"
            easing="ease-in"
            duration={0.2}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div
          className={
            isOpen
              ? "fixed top-0 right-0 h-full w-72 bg-[#112240] pt-3 pr-5 duration-500 ease-in-out"
              : "fixed top-0 right-[-100%] h-full w-72 bg-[#112240] pt-3 pr-5 duration-500 ease-in-out"
          }
        >
          <nav className="flex flex-col items-end  ">
            <ul className="flex min-h-screen w-full flex-col items-center space-y-12 pt-16">
              <li>
                <Link href="/">
                  <a className="flex flex-col items-center">
                    <span className="navLinkNumber">01. </span>
                    <span className="navLinkTitle">About</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="flex flex-col items-center">
                    <span className="navLinkNumber">02. </span>
                    <span className="navLinkTitle">Experience</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="flex flex-col items-center">
                    <span className="navLinkNumber">03. </span>
                    <span className="navLinkTitle">Work</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="flex flex-col items-center">
                    <span className="navLinkNumber">04. </span>
                    <span className="navLinkTitle">Contact</span>
                  </a>
                </Link>
              </li>
              <button className=" rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
                Resume
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
