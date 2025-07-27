import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Upcoming = component$(() => {
  const lines = useSignal<number[]>([]);
  for (let i = 0; i < 30; i++) {
    lines.value.push(i);
  }

  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#marquee", {
      x: "-100%",
      duration: 160,
      scrollTrigger: {
        trigger: "#marquee",
      },
    });
  });

  return (
    <main
      class="w-full h-[100vh] overflow-hidden p-10 leading-4  !bg-primary relative"
      id="upcoming"
    >
      <h1 class="!text-8xl text-center text-secondary">
        UpComing Fantastic Games For You
      </h1>
      <div class="absolute w-[10rem] h-full z-30 left-0 " id="opaque" />
      <div class="absolute w-[10rem] h-full z-30 right-0 " id="opaque" />

      <div
        id="marquee"
        class="flex my-[8rem] justify-center h-full  absolute top-[20%] "
      >
        {lines.value.map((line) => (
          <div
            id="shadows"
            class="shadow shadow-secondary  rounded-2xl h-[30rem] overflow-hidden min-w-[20rem] mr-8"
          >
            <div class="w-full overflow-hidden h-full rounded-2xl shadow">
              <img
                src="/images/img4.jpg"
                class="w-full h-full object-cover hover:scale-150 duration-1000 cursor-pointer"
                alt=""
              />
            </div>
            <div class="box pl-3 bg-primary text-white">
              <p class="text-3xl font-bold">Zkiritian {line}</p>
              <p>4/1/2068</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
});
