import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (currentScrollY > lastScrollY || currentScrollY < lastScrollY)
      ) {
        setScrollDirection(direction);
      }
      if (currentScrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      console.log(scrollDirection);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return { scrollDirection, atTop };
};

export default useScrollDirection;
