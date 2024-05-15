"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

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
gsap.registerPlugin(TextPlugin);

export default function Banner() {
  const container = useRef();
  // create a timeline
  let tl = gsap.timeline();

  useGSAP(
    () => {
      // gsap code here...
      tl.to("#banner", {
        duration: 1,
        delay: 1,
        text: "Data Engineer",
      });
      tl.to("#banner", {
        duration: 1,
        delay: 1,
        text: "Creator",
      });
      tl.to("#banner", {
        duration: 1,
        delay: 1,
        text: "Founder",
      });
      tl.to("#banner", {
        duration: 1,
        delay: 1,
        text: "Software Engineer",
      });

      gsap.from("#quote", {
        delay: 4,
        duration: 2.5,
        yPercent: 200,
        ease: "power4",
        stagger: 0,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div
      className="md:container md:mx-auto h-screen flex items-center justify-center"
      ref={container}
    >
      <div className="grid grid-cols-8 gap-2 fixed">
        <div className="col-span-8">
          <div className={robotoBold.className}>
            <p
              className="lg:text-8xl sm:text-7xl text-5xl text-center "
              id="banner"
            >
              Multifaceted Developer
            </p>
          </div>
        </div>
        <div className="col-start-5 col-span-3">
          <div className={robotoThin.className} id="banner-quotebox">
            <p
              className="lg:text-base sm:text-sm text-xs text-center"
              id="quote"
            >
              Creative data engineer with a passion for blending technology and
              art. Skilled in innovative problem-solving and continuous
              learning, bringing a unique perspective to every challenge.
              Adaptable, driven, and ready to make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
