import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center text-sm md:gap-2 lg:text-lg xl:gap-8 xl:text-xl">
        <li>
          <Link href="#about" scroll={false}>
            <a className="group whitespace-nowrap">
              <span className="nav-link-number">01. </span>
              <span className="nav-link-title">About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="group whitespace-nowrap">
              <span className="nav-link-number">02. </span>
              <span className="nav-link-title">Experience</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="group whitespace-nowrap">
              <span className="nav-link-number">03. </span>
              <span className="nav-link-title">Work</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="group whitespace-nowrap">
              <span className="nav-link-number">04. </span>
              <span className="nav-link-title">Contact</span>
            </a>
          </Link>
        </li>
        <button className=" ml-4 rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default DesktopNav;
