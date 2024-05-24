"use client";

import React from "react";
import { useRef } from "react";
import { Link, Image, Divider } from "@nextui-org/react";
import styled from "styled-components";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Roboto } from "next/font/google";
import Phil from "../../../public/Nokwer.jpg";
import Youtube from "../../../public/youtube.png";
import Linkedin from "../../../public/linkedin.png";
import Instagram from "../../../public/instagram.png";
import Twitter from "../../../public/twitter.png";
import Whitecoatlab from "../../../public/WhiteCoatLab.png";

const robotoThin = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

const robotoBold = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const StyledDivider = styled(Divider)`
  width: 200;
  background: #18181b;
`;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AvoutMe() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div ref={container} id="aboutme">
      <div className="grid grid-cols-8 gap-x-4 gap-y-14 auto-rows-max">
        <div className="col-start-1 col-end-6">
          <div className={robotoBold.className}>
            <p className="lg:text-8xl sm:text-7xl text-5xl text-left">
              Philip Timothe
            </p>
          </div>
        </div>
        <div className="row-start-2 col-start-2 col-span-2 place-content-center">
          <div className={robotoThin.className} id="">
            <p
              className="lg:text-base sm:text-sm text-xs text-center"
              id="aboutMeQuote"
            >
              "Hi, my name is Philip and I am a software developer, tech
              enthusiast, and creative from Brooklyn, New York, with a passion
              for innovation and storytelling through film, photography, and
              art. I love exploring new technologies and sharing my insights on
              self-development and intellectual ideas."
            </p>
          </div>
        </div>
        <div className="row-start-2 col-start-5 col-span-3">
          <Image isZoomed src={Phil.src} alt="Philip" />
        </div>

        {/* About me section .................................................. */}
        <div className="row-start-3 col-start-1 col-span-2 flex justify-center">
          <div className={robotoThin.className} id="">
            <p
              className="lg:text-base sm:text-sm text-xs text-center"
              id="aboutMeQuote"
            >
              01/ ABOUT
            </p>
          </div>
        </div>
        <div className="row-start-3 col-start-3 col-span-5 content-center">
          <StyledDivider />
        </div>
        <div className="row-start-4 col-start-2 col-span-6 flex justify-center gap-6">
          <iframe
            width="1000"
            height="543"
            src="https://www.youtube.com/embed/eWeKCJAG39U?si=UOPyga2Mhs0R60xS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Links section .................................................. */}
        <div className="row-start-5 col-start-1 col-span-2 flex justify-center">
          <div className={robotoThin.className} id="">
            <p
              className="lg:text-base sm:text-sm text-xs text-center"
              id="aboutMeQuote"
            >
              02/ LINKS
            </p>
          </div>
        </div>
        <div className="row-start-5 col-start-3 col-span-5 content-center">
          <StyledDivider />
        </div>
        <div className="row-start-6 col-start-4 col-span-4 flex justify-end gap-6">
          <Link isExternal href="https://www.linkedin.com/in/philiptimothe/">
            <Image isZoomed width={50} src={Linkedin.src} alt="Linkedin Logo" />
          </Link>
          <Link isExternal href="https://www.youtube.com/@PhilipTimothe">
            <Image isZoomed width={50} src={Youtube.src} alt="Youtube" />
          </Link>
          <Link isExternal href="https://www.instagram.com/Philip.Timothe">
            <Image
              isZoomed
              width={50}
              src={Instagram.src}
              alt="Instagram Logo"
            />
          </Link>
          <Link isExternal href="https://twitter.com/TimothePhilip">
            <Image isZoomed width={50} src={Twitter.src} alt="Twitter Logo" />
          </Link>
          <Link isExternal href="https://www.whitecoatlab.co/">
            <Image
              isZoomed
              width={50}
              src={Whitecoatlab.src}
              alt="WhiteCoatLab Logo"
            />
          </Link>
        </div>

        {/* Skills section .................................................. */}
        <div className="row-start-7 col-start-1 col-span-2 flex justify-center">
          <div className={robotoThin.className} id="">
            <p
              className="lg:text-base sm:text-sm text-xs text-center"
              id="skillsSection"
            >
              03/ SKILLS
            </p>
          </div>
        </div>
        <div className="row-start-7 col-start-3 col-span-5 content-center">
          <StyledDivider />
        </div>
        <div className="row-start-8 col-start-3 col-span-5 flex justify-center">
          <div className={robotoThin.className} id="">
            <p
              className="lg:text-lg sm:text-base text-sm text-right indent-8"
              id="skills"
            >
              Python • JavaScript • React • Pandas • Numpy • SciPy • Matplotlib
              • Scikit-Learn • Jupyter Lab • Jest • AWS • SQL • Solidity • Smart
              Contracts • Web3 • Git • Atlassian
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
