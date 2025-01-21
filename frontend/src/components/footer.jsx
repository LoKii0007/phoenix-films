import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Footer() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".foot-comp", {
      y: 0,
      transformOrigin: "bottom center",
      scrollTrigger: {
        trigger: ".foot-body",
        start: "bottom bottom",
        end: "+=9vw",
        scrub: 1,
      },
    });

    gsap.to(".foot-top", {
      width: "100vw",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end : 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <footer className="footer min-h-fit flex flex-col pt-[80px] overflow-x-hidden">
        <div className="foot-top h-[1px] bg-white w-0"></div>
        <div className="foot-body flex border-b-2 border-white justify-between pt-[80px] px-5 pb-0 relative">
          <div className="font-semibold foot-comp text-[13vw] leading-[55%]">
            Pheonix Films
          </div>
          <div className="body-right flex flex-col items-end absolute right-4 top-0 h-full justify-evenly ">
            <button className="foot-item">Home</button>
            <button className="foot-item">Solutions</button>
            <button className="foot-item">About</button>
            <button className="foot-item">Team</button>
          </div>
        </div>
        <div className="foot-bottom px-9 py-8 flex flex-row justify-between items-center">
          <div>
            <i class="bi bi-c-circle"></i> PhoenixFilms. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
