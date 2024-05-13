"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function Banner() {
  const container = useRef();
  const text = useRef();
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
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div class="md:container md:mx-auto" ref={container}>
      <p class="text-8xl text-center" id="banner" ref={text}>
        Multifaceted Developer
      </p>
    </div>
  );
}
