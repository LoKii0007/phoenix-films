import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const sampleImages = ["sample-1.jpeg", "sample-3.JPG", "sample-2.jpeg"];

const sampleImages2 = ["model-4.jpg", "model-3.jpg", "model-2.jpg"];

const companyLogo = ['comp-logo.png', 'comp-logo-2.png', 'comp-logo-3.svg',]

const sampleVideos = [
  "sample-vid-2.mp4",
  "sample-vid-3.mp4",
];

const sampleVideos2 = [
  "sample-vid-7.mp4",
  "sample-vid-6.mp4",
];

const Section1 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ScrollTrigger.create({
    //   trigger: ".video-wrapper",
    //   start: "top top",
    //   end: "+=600px",
    //   pin: ".video",
    //   scrub: 1,
    // });

    // gsap.to(".sample-work-2", {
    //   x: "-=135vw",
    //   scrollTrigger: {
    //     trigger: ".sample-work-2",
    //     start: "center center",
    //     end: "+=2000px",
    //     pin: true,
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    gsap.to(".work-line", {
      width: "100vw",
      scrollTrigger: {
        trigger: ".featured-work",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });

    gsap.to(".work-heading", {
      y: 0,
      scrollTrigger: {
        trigger: ".work-line",
        start: "top center",
        end: "+=1px",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="section1 w-full overflow-hidden flex flex-col bg-[#DDDDDD]">
        <div className="h-screen min-h-[752px] min-w-[1350px] overflow-hidden flex justify-center items-center video-wrapper">
          <iframe
            className="responsive-iframe "
            src="https://player.vimeo.com/video/936995747?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            frameborder="0"
          ></iframe>
        </div>

        <div className="w-full flex flex-col px-12 py-8">
          <div className="font-semibold text-[60px] leading-[100%] text-[#212529] uppercase comp-slogan w-full py-[8vh] ">
            PhoenixFilms is a production company, bringing stories to life
            through captivating video and photography.
          </div>

          <div className="featured-work w-full overflow-x-hidden my-8 ">
            <div className="work-line h-[1px] bg-[#212529] w-0"></div>
            <div className="work-body w-full">

              {/* // Company logos */}
              <div className="heading-wrapper relative">
                <div className="text-3xl left-0 font-base work-heading py-4 absolute z-40">
                  Our clients
                </div>
                <div className="text-3xl left-0 opacity-0 font-base work-heading py-4 z-10">
                  Our clients
                </div>
              </div>
              <div className="sample-work-1 w-full grid grid-cols-3 gap-[100px] p-12 ">
                {companyLogo.map((key, i) => (
                  <div key={i} className="w-full flex justify-center items-center py-8 rounded-lg">
                    <img className=" shadow-sm max-h-[100px] max-w-[200px] " src={`/images/${key}`} alt="" />
                  </div>
                ))}
              </div>

              {/* work  */}
              <div className=" h-[1px] mt-12 bg-[#212529] w-full"></div>
              <div className="heading-wrapper relative overflow-y-hidden">
                <div className="text-3xl left-0 font-base work-heading py-4 absolute z-40">
                  Featured work
                </div>
                <div className="text-3xl left-0 opacity-0 font-base py-4 z-10">
                  Featured work
                </div>
              </div>
              <div className="sample-work-1 w-full grid grid-cols-3 gap-[100px] p-12 ">
                {sampleImages2.map((key, i) => (
                  <div key={i} className="sample-img shadow-sm ">
                    <img src={`/images/${key}`} alt="" />
                  </div>
                ))}
              </div>

                 {/* videos  */}
              <div className="sample-work-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-[100px] p-12 ">
                {sampleVideos.map((key, i) => (
                  <div key={i} className="w-full flex justify-center ">
                    <video
                      className="sample-img shadow-sm max-w-[400px]"
                      muted
                      controls
                      loop
                      src={`/videos/${key}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <div className="sample-work-2 w-full p-12 flex flex-col gap-[100px] ">
                {sampleVideos2.map((key, i) => (
                  <div key={i} className="w-full flex justify-center ">
                    <video
                      className="sample-img shadow-sm "
                      muted
                      controls
                      loop
                      src={`/videos/${key}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className=" h-fit ">
            <div className="sample-work-2 flex flex-row gap-[100px] p-12 ">
              {sampleImages2.map((key, i) => (
                <div key={i} className="sample-img shadow-sm ">
                  <img src={`/images/${key}`} alt="" />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section1;
