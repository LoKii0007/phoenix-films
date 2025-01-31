import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Stack from "./ui/Stack";
import { useGSAP } from "@gsap/react";
import QuoteBtn from "./QuoteBtn";

const sampleImages = ["sample-1.jpeg", "sample-3.JPG", "sample-2.jpeg"];

const sampleImages2 = ["model-4.jpg", "model-3.jpg", "model-2.jpg"];

const companyLogo = ["comp-logo-2.png", "comp-logo.png", "comp-logo-3.svg"];

const sampleVideos = [
  "sample-vid-2.mp4",
  "sample-vid-3.mp4",
  "sample-vid-1.mp4",
  // "sample-vid-4.mp4",
];

const images = [
  { id: 1, img: "/images/model-1.jpg" },
  { id: 2, img: "/images/model-3.jpg" },
  { id: 3, img: "/images/model-2.jpg" },
  // { id: 4, img: "model-2.jpg" }
];

const sampleVideos2 = ["sample-vid-7.mp4", "sample-vid-6.mp4"];

const Section1 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const height = window.innerHeight;

  useGSAP(() => {
    gsap.to(".line-1", {
      width: "100vw",
      scrollTrigger: {
        trigger: ".line-1",
        start: `${height}px bottom`,
        end: `${height}px center`,
        scrub: 1,
      },
    });

    gsap.to(".work-heading", {
      y: 0,
      scrollTrigger: {
        trigger: ".line-1",
        start: `${height}px center`,
        end: "+=1px",
        scrub: 1,
      },
    });

    gsap.to(".desk-wrapper", {
      fontSize: "300px",
      scrollTrigger: {
        trigger: ".desk-wrapper",
        start: "top top",
        end: `+=${height}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to(".intro-vid", {
      scrollTrigger: {
        trigger: ".intro-vid",
        start: "top top",
        end: `+=${height}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to(".img-1", {
      y: "5vw",
      x: 0,
      rotate: -13,
      scrollTrigger: {
        trigger: ".tilted-images",
        start: "top top",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(".img-2", {
      y: 0,
      scrollTrigger: {
        trigger: ".tilted-images",
        start: "top top",
        end: "top -20px",
        scrub: 1,
      },
    });

    gsap.to(".img-3", {
      y: "5vw",
      x: 0,
      rotate: 13,
      scrollTrigger: {
        trigger: ".tilted-images",
        start: "top top",
        end: "top top",
        scrub: 1,
      },
    });

    const tl1 = gsap.to(".screen-top", {
      top: 0,
      paused: true,
    });

    const tl2 = gsap.to(".screen-bottom", {
      bottom: 0,
      paused: true,
    });

    gsap.to(".sample-work-2", {
      x: "-100vw",
      scrollTrigger: {
        trigger: ".sample-work-2",
        start: "center center",
        end: `+=${height}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          tl1.play();
          tl2.play();
        },
        onLeave: () => {
          tl1.reverse();
          tl2.reverse();
        },
        onLeaveBack: () => {
          tl1.reverse();
          tl2.reverse();
        },
        onEnterBack: () => {
          tl1.play();
          tl2.play();
        },
      },
    });
  }, []);

  return (
    <>
      <div className="section1 w-full overflow-x-hidden flex flex-col bg-[#DDDDDD]">
        {/* <button class="button fixed bottom-6 right-6 z-30 w-fit ">
          <span class="button-content">Connect </span>
        </button> */}

        <div className=" h-fit md:h-screen w-screen overflow-hidden flex justify-center items-center video-wrapper">
          <video
            muted
            autoPlay
            loop
            className=" w-[100vw] md:h-[100vh] 2xl:h-[120vh] max-w-none intro-vid z-10"
            src="https://res.cloudinary.com/dpcy2txus/video/upload/v1737466728/jatin/Pheonix_Films_Showreel_jrmbwb.mp4"
          ></video>
        </div>

        <div className="w-full flex flex-col px-5 py-10 md:px-12 md:py-8 bg-[#DDDDDD] z-30 ">
          <h1 className="font-semibold text-[24px] md:text-[45px] lg:text-[60px] font-[Quicksand] leading-[100%] text-[#212529] uppercase comp-slogan w-full md:py-[8vh] ">
            <span className="text-orange-500">Pheonix Films</span> is a
            production company, <br /> bringing stories to life through <br />{" "}
            captivating video and photography.
          </h1>

          <div className="flex justify-center mt-12">
            {/* <button className="px-12 py-5 text-3xl border-2 border-[#212529] text-[#212529] font-semibold uppercase rounded-full w-fit">
              Get Quote
            </button> */}
            {/* <QuoteBtn/> */}
          </div>
        </div>

        <div className="desk-wrapper relative z-30 bg-[#DDDDDD] text-[#918986] h-screen w-screen flex justify-center items-center text-[700px] uppercase font-semibold text-[#212529]">
          work
        </div>

        <div className="z-30 bg-[#DDDDDD] tilted-images w-full flex justify-center items-center h-screen gap-[12vw] p-5 md:p-12 overflow-hidden">
          <img
            style={{ transform: `translate(20vw, 0px)` }}
            className="soft-shadow w-1/3 img-1 "
            src={`/images/${[sampleImages[0]]}`}
            alt=""
          />
          <img
            style={{ transform: `translate(0, -90vh)` }}
            className="soft-shadow w-1/3 img-2"
            src={`/images/${[sampleImages[1]]}`}
            alt=""
          />
          <img
            style={{ transform: `translate(-20vw, 0px)` }}
            className="soft-shadow w-1/3 img-3"
            src={`/images/${[sampleImages[2]]}`}
            alt=""
          />
        </div>

        <div className="featured-work w-full mb-8 mt-12 pt-12 px-5 ">
          <section className="my-5 overflow-x-hidden">
            {/* <div className=" h-[1px] line-2 mt-12 bg-[#212529] w-0"></div> */}
            {/* <div className="heading-wrapper relative overflow-y-hidden py-5">
              <div className="md:text-3xl left-0 font-base work-heading- py-4 absolute z-40">
                Featured work
              </div>
              <div className="md:text-3xl left-0 opacity-0 font-base py-4 z-10">
                Featured work
              </div>
            </div> */}

            <div className="mob-sample w-full flex md:hidden justify-center items-center">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 300, height: 450 }}
                cardsData={images}
              />
            </div>
          </section>

          <div className="screen-top z-50 left-0 fixed top-[-100px] w-screen h-[100px] bg-black"></div>
          <div className="screen-bottom z-50 fixed left-0 bottom-[-100px] w-screen h-[100px] bg-black"></div>

          {/* videos  */}
          <section className="mb-12 overflow-y-hidden cinematic ">
            <div className="sample-work-2 overflow-x-scroll gap-5 py-5 grid grid-cols-4 w-[200vw] md:flex md:justify-between md:overflow-x-hidden md:px-12 ">
              {sampleVideos.map((key, i) => (
                <video
                  className="sample-img soft-shadow w-[20vw]"
                  muted
                  controls
                  loop
                  src={`/videos/${key}`}
                  poster="/images/model-2.jpg"
                  alt=""
                />
              ))}

              {sampleVideos.map((key, i) => (
                <video
                  className="sample-img soft-shadow w-[20vw]"
                  muted
                  controls
                  loop
                  src={`/videos/${key}`}
                  poster="/images/model-2.jpg"
                  alt=""
                />
              ))}
            </div>
          </section>

          <section className=" flex flex-col gap-12 md:mx-12 mb-12 z-30">
            <div className="sample-work-3 w-full py-5 flex gap-5 md:p-12 md:justify-between items-center">
              <video
                className="sample-img soft-shadow w-[52vw]"
                muted
                controls
                loop
                src={`/videos/${sampleVideos2[0]}`}
                alt=""
              />
              <video
                className="sample-img soft-shadow w-[20vw]"
                muted
                controls
                loop
                src={`/videos/sample-vid-2.mp4`}
                poster="/images/model-2.jpg"
                alt=""
              />
            </div>

            <div className="sample-work-3 w-full py-5 flex gap-5 md:p-12 md:justify-between items-center">
              <video
                className="sample-img soft-shadow w-[20vw]"
                muted
                controls
                loop
                src={`/videos/sample-vid-2.mp4`}
                poster="/images/model-2.jpg"
                alt=""
              />
              <video
                className="sample-img soft-shadow w-[52vw]"
                muted
                controls
                loop
                src={`/videos/${sampleVideos2[0]}`}
                alt=""
              />
            </div>
          </section>

          {/* // Company logos */}
          <section className="my-12 py-12 md:mx-12 overflow-hidden ">
            <div className="line-1 h-[1px] bg-[#212529] w-0"></div>
            <div className="heading-wrapper relative overflow-y-hidden">
              <div className="md:text-3xl left-0 font-base work-heading py-4 absolute z-40">
                Our clients
              </div>
              <div className="md:text-3xl left-0 opacity-0 font-base work-heading py-4 z-10">
                Our clients
              </div>
            </div>
            <div className="sample-work-1 w-full grid grid-cols-3 lg:gap-[100px] p-0 md:p-12 ">
              {companyLogo.map((key, i) => (
                <div
                  key={i}
                  className="w-full flex justify-center items-center py-8 rounded-lg"
                >
                  <img
                    className=" shadow-sm w-12 md:h-[80px] md:w-[100px] lg:h-[100px] "
                    src={`/images/${key}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Section1;
