import Link from "next/link";
import useScrollDirection from "../hooks/useScrollDirection";
import { Twirl as Hamburger } from "hamburger-react";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Header = ({ isOpen, setIsOpen }: Props) => {
  const { scrollDirection, atTop } = useScrollDirection();

  useEffect(() => {
    const blurFilter = document.getElementById("blur-filter");
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    blurFilter?.addEventListener("touchstart", () => setIsOpen(false)); // add event listener
    return () => {
      blurFilter?.removeEventListener("touchstart", () => setIsOpen(false)); // clean up
    };
  }, [isOpen, setIsOpen]);

  return (
    <header
      className={`sticky bg-[#0a192f] ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }  transition-all duration-500 ${atTop ? "" : "shadow-xl"}`}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 text-lg text-white md:py-7 md:px-14">
        <h1>Coding</h1>
        <div
          id="blur-filter"
          className={
            isOpen
              ? "fixed top-0 -ml-8 h-[140%] w-full backdrop-blur-[2px]"
              : "hidden"
          }
        ></div>
        <div className="hidden md:block">
          <ul className="flex items-center text-sm md:gap-4">
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
            <button className="ml-4 rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
              Resume
            </button>
          </ul>
        </div>
        <div className={isOpen ? "z-[100] md:hidden" : "z-[100] md:hidden"}>
          <Hamburger
            color="#64ffda"
            easing="ease-in-out"
            duration={0.5}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <div
          className={
            isOpen
              ? "fixed top-0 right-0 h-[140%] w-72 bg-[#112240] pt-8 shadow-2xl duration-500 ease-in-out"
              : "fixed top-0 right-[-200%] h-[140%] w-72 bg-[#112240] pt-8 duration-500 ease-in-out"
          }
        >
          {/* Mobile Nav */}
          <nav className="flex flex-col items-end">
            <ul className="flex w-full flex-col items-center space-y-12 pt-16">
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
