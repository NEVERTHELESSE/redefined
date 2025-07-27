import { $, component$, useSignal } from "@builder.io/qwik";

export const Navigation = component$(() => {
  const navigates = ["redefine", "discover", "games", "story", "upcoming"];
  window.scroll({
    behavior: "smooth",
  });
  const playRef = useSignal();

  const playMusic = $(() => {
    if (playRef.value.play()) {
      playRef.value.stop();
    } else {
      playRef.value.play();
    }
  });

  return (
    <nav class="fixed w-[100vw] z-40 p-1 md:p-3 items-center text-white flex  justify-around">
      <img src="/logo.png" width={30} height={30} class="hidden sm:flex" />
      <div class="flex justify-around  md:w-[50%] capitalize">
        {navigates.map((navigate) => (
          <a href={`#${navigate}`} class="md:text-2xl mx-2">
            {navigate}
          </a>
        ))}
        <audio src="/music/sound.mp3" autoplay ref={playRef} loop />
      </div>
      <button onClick$={playMusic} class="cursor-pointer font-bold text-2xl">
        &#9655;
      </button>
    </nav>
  );
});
