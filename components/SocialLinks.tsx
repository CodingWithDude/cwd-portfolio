import {
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiCodepen,
  FiGithub,
} from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-0 left-14 flex flex-col items-center ">
        <div className="flex flex-col gap-6 text-[#8892b0]">
          <a href="">
            <FiGithub className="socialIcons" />
          </a>
          <a href="">
            <FiInstagram className="socialIcons" />
          </a>
          <a href="">
            <FiTwitter className="socialIcons" />
          </a>
          <a href="">
            <FiLinkedin className="socialIcons" />
          </a>
          <a href="">
            <FiCodepen className="socialIcons" />
          </a>
        </div>
        <div className="mt-8 h-24 w-[2px] bg-[#8892b0]"></div>
      </div>
      <div className="fixed bottom-0 right-14 flex items-center ">
        <div className="flex flex-col gap-[220px]">
          <a href="#" className="w-0 rotate-90 text-[#8892b0]">
            codingwithdude@gmail.com
          </a>
          <div className="mt-8 h-16 w-[2px] bg-[#8892b0]"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
