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
  const [img, setImg] = React.useState("/images/logo.png");

  // useEffect(() => {
  //   if (location.pathname === "/services" || location.pathname === "/work") {
  //     return;
  //   }

  //   const animation = gsap.to(".nav", {
  //     backgroundColor: "#DDDDDD",
  //     scrollTrigger: {
  //       trigger: ".nav",
  //       start: "top -1%",
  //       end: "top -90%",
  //       scrub: 1,
  //     },
  //   });

  //   return () => {
  //     // Cleanup to prevent memory leaks or duplicate animations
  //     animation.scrollTrigger?.kill();
  //     animation.kill();
  //   };
  // }, [location.pathname]);

  useEffect(() => {}, [location.pathname, img]);

  function handleNav() {
    toast("Coming soon!");
  }

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 768) {
        setImg("/images/logo-black.png");
      } else {
        setImg("/images/logo.png");
      }
    }

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-screen nav flex navbar justify-between px-7 py-5 z-40 font-[Quicksand] text-[#303539] ${
          location.pathname === "/services" || location.pathname === "/work"
            ? "bg-[#DDDDDD]"
            : "md:bg-transparent"
        } z-50 sticky md:fixed top-0 overflow-y-hidden `}
      >
        <div
          onClick={() => navigate("/")}
          className="nav-left realtive flex justify-center items-center cursor-pointer gap-8"
        >
          <img src={img} className="h-12 " alt="" />
          <div className="nav-item font-semibold text-base xl:text-4xl text-orange-500 " >Pheonix Films</div>
        </div>
        <div className="nav-right effect-blur rounded-full border-2 border-white px-7 hidden relative md:flex items-center font-semibold gap-5 text-base xl:text-2xl ">
          <div onClick={() => handleNav()} className="nav-item px-2 py-3">
            Services
            <div className="hover-line hover-line-1"></div>
          </div>
          <div onClick={() => handleNav()} className="nav-item px-2 py-3">
            Work
            <div className="hover-line hover-line-2"></div>
          </div>
          <div onClick={() => handleNav()} className="nav-item px-2 py-3">
            About
            <div className="hover-line hover-line-3"></div>
          </div>
          <div className="nav-item nav-item-last px-2 py-3">Say, hi <div className="hover-line hover-line-4 z-40 "></div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
