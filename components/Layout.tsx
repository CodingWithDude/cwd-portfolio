import { ReactElement, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import Blur from "./Blur";
import Header from "./header/Header";
import SocialLinks from "./SocialLinks";

const Layout = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, atTop } = useScrollDirection();
  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollDirection={scrollDirection}
        atTop={atTop}
      />
      <SocialLinks />
      <Blur isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
