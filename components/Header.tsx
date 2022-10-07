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
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "-top-1"
      } w-full bg-[#0a192f] transition-all duration-500 ${
        atTop ? "" : "shadow-xl"
      }`}
    >
      <div className="mx-4 flex items-center justify-between text-lg text-white md:mx-8">
        <h1>Coding With Dude</h1>
        <div
          id="blur-filter"
          className={
            isOpen
              ? "fixed top-0 -ml-4 h-[140%] w-full backdrop-blur-[2px]"
              : "hidden"
          }
        ></div>
        <div
          className={
            isOpen ? "z-[100] mr-4 md:hidden" : "z-[100] mr-4 md:hidden"
          }
        >
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
              ? "fixed top-0 right-0 h-[140%] w-72 bg-[#112240] pt-8 shadow-xl  ease-in-out"
              : "fixed top-0 right-[-100%] h-full w-72 bg-[#112240]  ease-in-out"
          }
        >
          {/* Mobile Nav */}
          <nav className="flex flex-col items-end bg-[#112240]">
            <ul className="flex min-h-full w-full flex-col items-center space-y-12 pt-16">
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
