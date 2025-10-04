import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Hightlight = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlight"
      className="w-screen h-full bg-zinc overflow-hidden common-padding "
    >
      <div className="screen-max-width">
        <div className="justify-between md:flex items-end w-full mb-12">
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch the film <img className="ml-2" src={watchImg} alt="watch" />
            </p>
            <p className="link">
              Watch the even <img className="ml-2" src={rightImg} alt="watch" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Hightlight;
