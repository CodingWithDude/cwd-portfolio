import { Link } from "react-scroll";
import { navLinks } from "../../utils/constants";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="fade-in-down-nav flex items-center text-sm md:gap-8">
        {navLinks.map((item) => (
          <li className="cursor-pointer" key={item.name}>
            <Link
              to={item.name}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="group whitespace-nowrap delay-[100ms]">
                <span className="nav-link-number">{item.number}</span>
                <span className="nav-link-title">{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
        <li>
          <button className="rounded border-2 border-accent py-2 px-4 text-accent filter transition duration-[.3s] ease-in-out hover:bg-accent hover:bg-opacity-[10%]">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
