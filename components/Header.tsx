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

  const handleBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    document.body.addEventListener("focus", () => setIsOpen(false)); // add event listener
    return () => {
      document.body.removeEventListener("focus", () => setIsOpen(false)); // clean up
    };
  }, [isOpen, setIsOpen]);

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } m-3 -mt-2 h-12 transition-all duration-500 ${
        atTop ? "" : "bg-[#0a192f]/75 shadow-xl"
      }`}
    >
      <div className="flex items-center justify-between text-lg text-white">
        <h1>Coding With Dude</h1>
        <div
          className={
            isOpen ? "fixed h-screen w-screen backdrop-blur-sm" : "hidden"
          }
        ></div>
        <div className="z-[100] md:hidden" onBlur={handleBlur}>
          <Hamburger
            color="#64ffda"
            easing="ease-in"
            duration={0.5}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <div
          className={
            isOpen
              ? "fixed top-0 right-0 h-screen w-64 bg-[#112240] pt-3 pr-5 duration-500 ease-in-out"
              : "fixed top-0 right-[-100%] h-screen w-72 bg-[#112240] pt-3 pr-5 duration-500 ease-in-out"
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
