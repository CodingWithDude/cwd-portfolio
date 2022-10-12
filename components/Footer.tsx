import SocialLinkList from "../utils/SocialLinkList";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 pt-32 pb-4 text-[#8892b0]">
      <a href="https://github.com/CodingWithDude">
        <span className="text-xs">Built by Ryan Austin</span>
      </a>
      <a href="https://github.com/CodingWithDude" className="cursor-pointer ">
        <div className="cursor-pointer text-lg font-bold">
          <span className="logo-color">{`<Coding`}</span>
          <span className="logo-grey ">With</span>
          <span className="logo-color">{`Dude/>`}</span>
        </div>
      </a>
      <a href="https://github.com/bchiang7">
        <p className="cursor-pointer text-xs">
          Design inspired by Brittany Chiang
        </p>
      </a>
      <div className="flex w-full items-center justify-center gap-6 pt-2 md:hidden">
        <SocialLinkList />
      </div>
    </footer>
  );
};

export default Footer;
