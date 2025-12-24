import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const useParallax = <T extends HTMLElement>(
  elementRef: RefObject<T | null>,
  yPercent: number = 50,
  top: string = "top"
) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoElement = elementRef?.current;

    if (!videoElement) return;

    const animation = gsap.fromTo(
      videoElement,
      { yPercent: 0 },
      {
        yPercent: yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: videoElement.parentElement,
          start: `top ${top}`,
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [elementRef, yPercent]);
};

export default useParallax;
