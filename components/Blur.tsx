import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Blur = ({ isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    const blurFilter = document.getElementById("blur-filter");
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    blurFilter?.addEventListener("touchstart", () => setIsOpen(false)); // add event listener
    return () => {
      blurFilter?.removeEventListener("touchstart", () => setIsOpen(false)); // clean up
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      id="blur-filter"
      className={`${
        isOpen
          ? "fixed top-0 -ml-8 h-[140%] w-full backdrop-blur-[2px]"
          : "hidden"
      }`}
    />
  );
};

export default Blur;
