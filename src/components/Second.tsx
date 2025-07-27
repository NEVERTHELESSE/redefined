import { component$, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Second = component$(() => {
  gsap.registerPlugin(ScrollTrigger);
  useVisibleTask$(() => {
    gsap.to("#kanju", {
      width: "100%",
      height: "100%",
      duration: 2,
      borderRadius: 0,
      scrollTrigger: {
        trigger: "#kanju",
        scrub: true,
        end: "top 0",
      },
    });
  });

  return (
    <div class="w-full flex items-center  flex-col bg-secondary" id="discover">
      <h2 id="kanju-text" class="text-center">
        discover the world's largest shared adventures Kanju No High-Way
      </h2>
      <div class="w-full h-[100vh] flex items-center justify-center">
        <img
          src="images/kanju.jpg"
          alt="kanju"
          class="bg-primary w-[30rem] h-[30rem] object-cover rounded-[4rem]"
          id="kanju"
        />
      </div>
      <h3 class="text-3xl my-10">
        The Game of begins-Your life, now on epic MMPONG <br />
        Zentury Unites every player from countless games and platforms
      </h3>
    </div>
  );
});
