import { ReactElement, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import Blur from "./Blur";
import Header from "./header/Header";
import SocialLinks from "./SocialLinks";

const Layout = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, atTop } = useScrollDirection();

  return (
    <div id="home" className="mx-6 md:mx-12">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollDirection={scrollDirection}
        atTop={atTop}
      />
      <SocialLinks />
      <Blur isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col items-center">
        <div className=" max-w-[1100px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
