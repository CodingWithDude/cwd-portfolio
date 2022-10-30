import { Link } from "react-scroll";
import { navLinks } from "../../utils/constants";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`h-screen w-[50%] bg-[#112240] pt-8 shadow-2xl duration-500 ease-in-out ${
        isOpen ? "fixed top-0 right-0" : "fixed top-0 right-[-200%]"
      }`}
    >
      <nav className="flex flex-col items-end">
        <ul className="flex w-full flex-col items-center space-y-12 pt-16">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.name}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeNav}
              >
                <div className="group flex cursor-pointer flex-col items-center">
                  <span className="nav-link-number">{item.number}</span>
                  <span className="nav-link-title">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
          <button className="rounded border-2 border-accent py-2 px-4 text-accent filter transition duration-[.3s] ease-in-out hover:bg-accent hover:bg-opacity-[10%]">
            Resume
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
