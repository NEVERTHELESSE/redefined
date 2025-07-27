import { component$, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Third = component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#first-img",
      {
        translateX: "-70%",
        opacity: 0.5,
        duration: 1,
      },
      {
        duration: 2,
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#first-img",
          end: "top 20",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#ball",
      {
        translateX: "70%",
        opacity: 0.5,
        duration: 2,

        delay: 1,
      },
      {
        duration: 2,
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#first-img",
          end: "top 20",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#shadow",
      {
        opacity: 0.5,
        delay: 0.3,
        scale: 0.5,
      },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#first-img",
          scrub: true,
          end: "top 20",
        },
      }
    );
    gsap.fromTo(
      "#bottom",
      {
        translateY: 40,
        opacity: 0,
        stagger: 0.5,
      },
      {
        translateY: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: "#first-img",
          end: "top 20",
          scrub: true,
        },
      }
    );
  });
  return (
    <div
      class="w-full bg-primary lg:h-[100vh] lg:flex p-2 sm:py-4 sm:px-12 justify-around"
      id="games"
    >
      <div class=" h-full flex flex-col lg:w-[48%]">
        <div class="w-full sm:h-[66%] relative">
          <img
            id="first-img"
            src="/images/car.jpg"
            alt=""
            class=" mb-[15px] w-full h-full object-cover  bg-primary"
          />
          <div class="absolute top-0 p-20">
            <h5>Titans Car Race</h5>
            <strong class="text-yellow-400 sm:text-4xl font-bold ">
              A cross-world Car Racing game. <br /> Elevating infinite racing{" "}
              <br />
              with 2 or More players .
            </strong>
          </div>
        </div>
        <div
          id="bottom"
          class="w-full sm:h-[calc(33%-10px)] object-cover bg-gradient-to-b  from-gold my-8 lg:my-0 to-secondary shadow-lg p-10 "
        >
          <h4 class="sm:text-[5rem]  text-secondary font-extrabold text-center">
            More Games <br />
            Coming Soon
          </h4>
        </div>
      </div>
      <div class=" h-full ">
        <div class="sm:h-[calc((100%/3)-10px)] relative">
          <img
            src="/images/img3.jpg"
            id="ball"
            alt=""
            class="sm:h-full object-cover"
          />
          <div class="absolute top-0 p-5">
            <h5>Drop Ball</h5>
            <strong class="text-white sm:text-4xl font-bold ">
              A cross-world Car Racing game. <br /> Elevating infinite racing{" "}
              <br />
              with 2 or More players .
            </strong>
          </div>
        </div>

        <video
          src="/videos/video2.mp4"
          loop
          autoplay
          muted
          class="my-[15px] sm:h-[calc((100%/3)-10px)] object-cover "
        />
        <div class="sm:h-[calc((100%/3)-10px)] relative">
          <img
            src="/images/img5.jpg"
            alt=""
            id="bottom"
            class="sm:h-full object-cover"
          />
          <div class="absolute top-0 p-5">
            <h5>Drop Ball</h5>
            <strong class="text-white sm:text-4xl font-bold ">
              A cross-world Car Racing game. <br /> Elevating infinite racing{" "}
              <br />
              with 2 or More players .
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
});
