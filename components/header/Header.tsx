import { Twirl as Hamburger } from "hamburger-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  scrollDirection: string | null;
  atTop: boolean | null;
}

const Header = ({ isOpen, setIsOpen, scrollDirection, atTop }: Props) => {
  return (
    <header
      className={`fixed left-0 right-0 z-[2] bg-background/75 backdrop-blur-lg ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }  transition-all duration-700 ${atTop ? "" : "shadow-xl"}`}
    >
      <div className="text-white flex w-full items-center justify-between px-6 text-lg md:px-8 lg:px-12">
        {/* Logo Text */}
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <div className="logo my-1 cursor-pointer py-4 font-notoSansMono text-3xl font-medium">
            <div className="typing-mobile lg:hidden">
              <span className="logo-color">{`<C`}</span>
              <span className="logo-grey">W</span>
              <span className="logo-color">{`Dude/>`}</span>
            </div>
            <div className="typing-wrapper hidden lg:block">
              <div className="typing-desktop">
                <span className="logo-color">{`<Coding`}</span>
                <span className="logo-grey ">With</span>
                <span className="logo-color">{`Dude/>`}</span>
              </div>
            </div>
          </div>
        </Link>
        {/* End Logo Text */}
        <div className={isOpen ? "z-[100]" : "z-[100] md:hidden"}>
          <Hamburger
            color="#64ffda"
            easing="ease-in-out"
            duration={0.5}
            toggled={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <DesktopNav />
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
