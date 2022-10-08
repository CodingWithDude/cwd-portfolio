import Link from "next/link";

interface Props {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: Props) => {
  return (
    <div
      className={`h-[140%] w-72 bg-[#112240] pt-8 shadow-2xl duration-500 ease-in-out
    ${isOpen ? "fixed top-0 right-0" : "fixed top-0 right-[-200%]"}
  `}
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
  );
};

export default MobileNav;
