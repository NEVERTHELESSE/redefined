import { component$, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Forth = component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#mask", {
      duration: 3,
      backgroundPosition: "10%",
      scrollTrigger: {
        trigger: "#mask",
        scrub: true,
      },
    });
  });

  return (
    <section class="bg-secondary flex flex-col items-center py-20" id="story">
      <h2 class="text-[7rem] text-center font-bold leading-tight">
        THE STORY OF <br />A HIDDEN REALM
      </h2>
      <div id="mask"></div>
    </section>
  );
});
