"use client";

import React from "react";
import { useRef } from "react";
import { Image } from "@nextui-org/react";
// import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Roboto } from "next/font/google";
import Phil from "../../../public/Nokwer.jpg";

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
      {/* <img src={Nokwer} alt="me" /> */}
      <div class="grid grid-cols-8 gap-4 auto-rows-max">
        <div className="col-start-1 col-end-4">
          <div className={robotoBold.className}>
            <p className="lg:text-8xl sm:text-7xl text-5xl text-left">
              About Me
            </p>
          </div>
        </div>
        <div className="row-start-2 col-start-5 col-span-3">
          <Image src={Phil.src} alt="/" />
        </div>
      </div>
    </div>
  );
}
