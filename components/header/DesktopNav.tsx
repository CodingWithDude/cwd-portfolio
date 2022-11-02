import { Link } from "react-scroll";
import { navLinks } from "../../utils/constants";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="fade-in-down-nav flex items-center md:gap-8 lg:gap-12">
        {navLinks.map((item) => (
          <li className="cursor-pointer" key={item.name}>
            <Link
              to={item.name}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="group flex gap-1 whitespace-nowrap delay-[100ms]">
                <span className="nav-link-number">{item.number}</span>
                <span className="nav-link-title">{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
