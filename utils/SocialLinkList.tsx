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
      <a href="https://github.com/CodingWithDude">
        <FiGithub className="social-icons" />
      </a>
      <a href="https://github.com/CodingWithDude">
        <FiInstagram className="social-icons" />
      </a>
      <a href="https://github.com/CodingWithDude">
        <FiTwitter className="social-icons" />
      </a>
      <a href="https://github.com/CodingWithDude">
        <FiLinkedin className="social-icons" />
      </a>
      <a href="https://github.com/CodingWithDude">
        <FiCodepen className="social-icons" />
      </a>
    </>
  );
};

export default SocialLinkList;
