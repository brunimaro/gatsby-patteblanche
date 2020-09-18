import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animManifeste = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
    const animateFrom = (elem, direction = 1) => {
      let x = 0,
        y = direction * 50;
      if (elem.classList.contains("gsRevealFromLeft")) {
        x = -50;
        y = 0;
      } else if (elem.classList.contains("gsRevalFromRight")) {
        x = 50;
        y = 0;
      }

      gsap.fromTo(
        elem,
        { x, y, scale: 0.7, opacity:0 , autoAlpha: 0 },
        {
          duration: 3,
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
          opacity: 1,
        }
      );
    };

    const hide = elem => gsap.set(elem, { autoAlpha: 0 });
    gsap.utils.toArray(".manifeste p").forEach(elem => {
      hide(elem);
      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem)
      });
    });
  }, []);
};
