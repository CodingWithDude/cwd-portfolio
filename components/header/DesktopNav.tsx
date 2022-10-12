import { Link } from "react-scroll";
import { SyntheticEvent } from "react";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="fade-in-down-nav flex items-center text-sm md:gap-8">
        <li className="cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <div className="group whitespace-nowrap delay-[100ms]">
              <span className="nav-link-number">01. </span>
              <span className="nav-link-title">About</span>
            </div>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className=" group whitespace-nowrap">
              <span className="nav-link-number">02. </span>
              <span className="nav-link-title">Experience</span>
            </div>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <div className="group whitespace-nowrap">
              <span className="nav-link-number">03. </span>
              <span className="nav-link-title">Work</span>
            </div>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="group whitespace-nowrap">
              <span className="nav-link-number">04. </span>
              <span className="nav-link-title">Contact</span>
            </div>
          </Link>
        </li>
        <li>
          <button className="rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
