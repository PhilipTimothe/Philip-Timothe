"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  background-color: black;
  color: peachpuff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      //   useEffect(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top center",
        end: "bottom center",
        markers: true,
        onEnter: () =>
          gsap.to(container.current, {
            backgroundColor: "#000",
            color: "peachpuff",
          }),
        onLeaveBack: () =>
          gsap.to(container.current, {
            backgroundColor: "#fff",
            color: "#000",
          }),
      });
      //   }, []);
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <ProjectsContainer ref={container}>
      <p>Projects Section</p>
    </ProjectsContainer>
  );
}
