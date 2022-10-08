import Link from "next/link";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Twirl as Hamburger } from "hamburger-react";
import { useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Header = ({ isOpen, setIsOpen }: Props) => {
  const { scrollDirection, atTop } = useScrollDirection();

  return (
    <header
      className={`sticky z-[2] bg-transparent ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }  transition-all duration-500 ${atTop ? "" : "shadow-xl"}`}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 text-lg text-white md:py-7 md:px-8 lg:px-12">
        {/* Logo Text */}
        <div className="logo cursor-pointer text-2xl font-bold">
          <div className="typing-mobile md:hidden">
            <span className="logo-color">{`<C`}</span>
            <span className="logo-grey">W</span>
            <span className="logo-color">{`D/>`}</span>
          </div>
          <div className="typing-wrapper hidden md:block">
            <div className="typing-desktop">
              <span className="logo-color">{`<Coding`}</span>
              <span className="logo-grey ">With</span>
              <span className="logo-color">{`Dude/>`}</span>
            </div>
          </div>
        </div>
        {/* End Logo Text */}

        <DesktopNav />

        <div className={isOpen ? "z-[100] md:hidden" : "z-[100] md:hidden"}>
          <Hamburger
            color="#64ffda"
            easing="ease-in-out"
            duration={0.5}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        <MobileNav isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
