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
      <div className="fixed left-8 bottom-0 flex flex-col items-center lg:left-12 ">
        <div className="flex flex-col gap-6 text-[#8892b0]">
          <a href="">
            <FiGithub className="social-icons" />
          </a>
          <a href="">
            <FiInstagram className="social-icons" />
          </a>
          <a href="">
            <FiTwitter className="social-icons" />
          </a>
          <a href="">
            <FiLinkedin className="social-icons" />
          </a>
          <a href="">
            <FiCodepen className="social-icons" />
          </a>
        </div>
        <div className="mt-8 h-28 w-[2px] bg-[#8892b0]"></div>
      </div>
      <div className="fixed bottom-0 right-8 flex items-center lg:right-12 ">
        <div className="flex flex-col gap-[220px]">
          <a href="#" className="social-icons w-0 rotate-90 text-[#8892b0]">
            codingwithdude@gmail.com
          </a>
          <div className="mt-8 h-16 w-[2px] bg-[#8892b0]"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
