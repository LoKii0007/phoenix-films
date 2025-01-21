import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/services" || location.pathname === "/work") {
      return;
    }

    const animation = gsap.to(".nav", {
      backgroundColor: "#DDDDDD",
      scrollTrigger: {
        trigger: ".nav",
        start: "top -1%",
        end: "top -90%",
        scrub: 1,
      },
    });

    return () => {
      // Cleanup to prevent memory leaks or duplicate animations
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [location.pathname]);

  useEffect(() => {}, [location.pathname]);

  function handleNav(){
    toast('Coming soon!')
  }

  return (
    <>
      <nav
        className={`w-screen nav flex justify-between px-12 py-1 font-sans ${
          location.pathname === "/services" || location.pathname === "/work"
            ? "bg-[#DDDDDD]"
            : "bg-transparent"
        } z-50 fixed top-0 overflow-y-hidden max-h-[80px] `}
      >
        <div
          onClick={() => navigate("/")}
          className="nav-left gap-4 realtive flex justify-center items-center cursor-pointer"
        >
          <img src="/images/logo.png" className="h-12 " alt="" />
        </div>
        <div className="nav-right relative flex items-center gap-5 text-base xl:text-xl font-semibold ">
          <div
            onClick={() => handleNav()}
            className="nav-item px-3 py-4"
          >
            Services
          </div>
          <div onClick={() => handleNav()} className="nav-item px-3 py-4">
            Work
          </div>
          <div
            onClick={() => handleNav()}
            className="nav-item px-3 py-4"
          >
            About
          </div>
          <div className="nav-item nav-item-last px-3 py-4">Say, hi</div>
          {/* <div className="pill-bg bg-green absolute rounded-full py-4"></div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
