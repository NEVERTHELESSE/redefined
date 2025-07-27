import { component$ } from "@builder.io/qwik";

export const Last = component$(() => {
  return (
    <section class="w-full bg-amber-700 p-12">
      <video
        src="videos/video2.mp4"
        class="w-[100vw] h-[90vh]"
        autoplay
        loop
        muted
      />
      <marquee behavior="" class="flex " direction="">
        <h1 class="text-white">Neverthelesse</h1>
        <h1 class="text-amber-300">Neverthelesse</h1>
        <h1 class="text-green-300">Neverthelesse</h1>
        <h1 class="text-gold-500">Neverthelesse</h1>
      </marquee>
    </section>
  );
});
