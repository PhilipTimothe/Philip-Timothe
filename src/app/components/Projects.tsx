"use client";

import React from "react";
import { useRef } from "react";
import { Link, Image, Divider } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

import { Roboto } from "next/font/google";

import DataProject from "../../../public/DataProject.png";

const robotoThin = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

const robotoBold = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const ProjectsContainer = styled.div`
  background-color: black;
  color: peachpuff;
  height: 100vh;
  display: flex;
  font-size: 2rem;
`;

gsap.registerPlugin(useGSAP);
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
            color: "#fff",
          }),
        onLeaveBack: () =>
          gsap.to(container.current, {
            backgroundColor: "#000",
            color: "peachpuff",
          }),
      });
      //   }, []);
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div className="container" id="projects-section" ref={container}>
      <div className="grid grid-cols-8 gap-x-4 gap-y-14 auto-rows-max">
        <div className="row-start-2 col-start-1 col-span-8 ">
          <div className={robotoBold.className}>
            <p className="lg:text-8xl sm:text-7xl text-5xl text-right">
              Projects
            </p>
          </div>
        </div>
        <div className="row-start-3 col-start-1 col-span-8 text-center">
          <Link isExternal href="">
            <Image width={700} src={DataProject.src} alt="Data Project" />
          </Link>
        </div>
      </div>
    </div>
  );
}
