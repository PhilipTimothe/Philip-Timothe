"use client";

import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const triggerElement = aboutMeRef.current;
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top top",
      end: "bottom bottom",
      markers: false,
      onEnter: () =>
        gsap.to(["#aboutme-section", "#projects-section"], {
          backgroundColor: "#000",
          color: "#fff",
          duration: 0.5,
        }),
      onLeaveBack: () =>
        gsap.to(["#aboutme-section", "#projects-section"], {
          backgroundColor: "#fff",
          color: "#000",
          duration: 0.5,
        }),
    });
  }, {});

  return (
    <main className="main">
      <section id="banner-section">
        <Banner />
      </section>
      <section ref={aboutMeRef} id="aboutme-section">
        <AboutMe />
      </section>
      <section ref={projectsRef} id="projects-section">
        <Projects />
      </section>
    </main>
  );
}
