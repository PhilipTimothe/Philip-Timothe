"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Roboto } from "next/font/google";

const robotoThin = Roboto({
  subsets: ["latin"],
  weight: ["100"],
});

const robotoBold = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AvoutMe() {
  const container = useRef();
  // create a timeline
  let tl = gsap.timeline();

  useGSAP(
    () => {
      // gsap code here...

      const getRatio = (el: HTMLElement): number =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      gsap.utils.toArray<HTMLElement>("section").forEach((section, i) => {
        gsap.fromTo(
          section,
          {
            backgroundPosition: () =>
              i
                ? `50% ${-window.innerHeight * getRatio(section)}px`
                : "50% 0px",
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="aboutme">
      <div className={robotoBold.className}>
        <p className="lg:text-8xl sm:text-7xl text-5xl text-left">About Me</p>
      </div>
    </div>
  );
}
