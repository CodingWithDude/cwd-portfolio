import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
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
    </nav>
  );
};

export default DesktopNav;
