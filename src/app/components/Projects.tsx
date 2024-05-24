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
import JavascriptProject from "../../../public/JavascriptProject.png";
import Splash from "../../../public/Splash.png";

const robotoThin = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

const robotoBold = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div id="projects" ref={container}>
      <div className="grid grid-cols-8 gap-x-4 gap-y-14 auto-rows-max">
        <div className="row-start-2 col-start-1 col-span-8 ">
          <div className={robotoBold.className}>
            <p className="lg:text-8xl sm:text-7xl text-5xl text-right">
              Projects
            </p>
          </div>
        </div>
        <div className="row-start-3 col-start-1 col-span-8 text-center">
          <Link
            isExternal
            href="https://machine-learning-project-i-ewi57ecwky.streamlit.app/"
          >
            <Image width={700} src={DataProject.src} alt="Data Project" />
          </Link>
        </div>
        <div className="row-start-4 col-start-1 col-span-8 text-center">
          <Link isExternal href="https://philiptimothe.github.io/Contact_List/">
            <Image
              width={700}
              src={JavascriptProject.src}
              alt="JavaScript Project"
            />
          </Link>
        </div>
        <div className="row-start-5 col-start-1 col-span-8 text-center">
          <Link isExternal href="">
            <Image width={700} src={Splash.src} alt="Splash" />
          </Link>
        </div>
      </div>
    </div>
  );
}
