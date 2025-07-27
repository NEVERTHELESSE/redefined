import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

export const Hero = component$(() => {
  const videos = [1, 2, 3, 4, 5];
  const selected = useSignal(4);
  const timeline = gsap.timeline({ paused: true });

  const nextVideoRef = useSignal<HTMLHeadingElement | undefined>();
  const text = useSignal<HTMLHeadingElement | undefined>();
  const text2 = useSignal<HTMLHeadingElement | undefined>();
  const nextVideo = $(() => {
    timeline.play();
  });

  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = new SplitText(text2.value != undefined ? text2.value : null, {
      type: "chars",
    });
    timeline.to("#thumb", {
      ease: "power1.inOut",
      scale: 1,

      transformOrigin: "center center",
      width: "100vw",
      height: "100vh",
      duration: 1,
    });

    gsap.to(words.chars, {
      translateY: 70,
      duration: 0.5,
      stagger: 0.1,
    });
    const words2 = new SplitText(
      text2.value != undefined ? text2.value : null,
      { type: "cars" }
    );
    gsap.to(words2.chars, {
      translateY: -70,
      duration: 0.5,
      stagger: 0.1,
      delay: 1,
    });

    gsap.to("#video-container", {
      clipPath: "polygon(20% 0%, 80% 0%,100% 100%, 0% 100%;)",
      duration: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#video-container",
        start: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section
      class="relative text-white    w-[100dvw]   h-[100dvh] bg-amber-800"
      id="home"
    >
      <div class=" bg-primary">
        <video
          id="video-container"
          class="w-full object-cover min-h-[100vh]"
          src={`videos/video${videos[selected.value]}.mp4`}
          autoplay
          loop
          muted
        />
      </div>

      <video
        onClick$={nextVideo}
        id="thumb"
        muted
        ref={nextVideoRef}
        src={`videos/video${
          videos[selected.value + 1] === 1 ? 0 : videos[selected.value + 1]
        }.mp4`}
        class="left-0 right-0 size-[10rem]  absolute top-0  object-cover hover:opacity-100 duration-500 scale-50 hover:scale-105 translate-x-[50%]"
      />

      <div class="absolute top-20 p-4 md:px-20 z-20">
        <h1 class="font-bold mb-10 sm:mb-0" id="define" ref={text}>
          REDEFINE
        </h1>
        <h4 class="text-3xl sm:my-20 mt-20">
          Enter the Metagame <br />
          Unleash the Play Economy
        </h4>
        <button class="bg-primary rounded-2xl p-2 md:px-12 py-4 font-bold mb-20 sm:mb-0 md:text-2xl">
          Watch Zoe &#9654;
        </button>
      </div>
      <h1
        class="absolute bottom-2 right-0 md:px-20 z-20 mt-20 sm:mt-0"
        id="reality"
        ref={text2}
      >
        REALiTY
      </h1>
    </section>
  );
});
