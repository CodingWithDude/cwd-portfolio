import {
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiCodepen,
  FiGithub,
} from "react-icons/fi";

const SocialLinkList = () => {
  return (
    <>
      <a className="social-icons" href="https://github.com/CodingWithDude">
        <FiGithub />
      </a>
      <a className="social-icons" href="https://github.com/CodingWithDude">
        <FiInstagram />
      </a>
      <a className="social-icons" href="https://github.com/CodingWithDude">
        <FiTwitter />
      </a>
      <a className="social-icons" href="https://github.com/CodingWithDude">
        <FiLinkedin />
      </a>
      <a className="social-icons" href="https://github.com/CodingWithDude">
        <FiCodepen />
      </a>
    </>
  );
};

export default SocialLinkList;
