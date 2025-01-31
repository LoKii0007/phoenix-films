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
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
    {/* text-[#DF6D2D] */}
      <footer className="footer min-h-fit flex flex-col md:pt-[80px] overflow-x-hidden text-white ">
        <div className="foot-menu flex flex-col gap-2 text-left px-2 py-5 md:hidden ">
          <button className="m-foot-item text-left text-sm">Home</button>
          <button className="m-foot-item text-left text-sm">Solutions</button>
          <button className="m-foot-item text-left text-sm">About</button>
          <button className="m-foot-item text-left text-sm">Team</button>
        </div>
        <div className="h-[1px] bg-white w-0 foot-top"></div>
        <div className="foot-body flex border-b md:border-b border-white justify-center md:justify-between pt-10 md:pt-[80px] px-1 md:px-5 pb-0 relative">
          <div className="font-semibold foot-comp text-[13vw] leading-[55%] opacity-80 ">
            Pheonix Films
          </div>
          <div className="body-right hidden md:flex flex-col items-end absolute right-4 top-0 h-full justify-evenly opacity-80 ">
            <button className="foot-item">Home</button>
            <button className="foot-item">Solutions</button>
            <button className="foot-item">About</button>
            <button className="foot-item">Team</button>
          </div>
        </div>
        <div className="foot-bottom text-sm px-2 md:px-9 py-8 flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center text-[#DBD3D3] opacity-80 ">
          <div className="" >
            <i class="bi bi-c-circle"></i>Copyright © Pheonix Films
          </div>
          
           <a href="https://portfolio-five-rho.vercel.app/" target="blank"  className="text-[#DBD3D3]">Website by Pixelflowui</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
