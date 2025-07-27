import { component$ } from "@builder.io/qwik";
import { Hero } from "./components/Hero";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { Forth } from "./components/Forth";
import { Navigation } from "./components/Navigation";
import { Last } from "./components/Last";

export const App = component$(() => {
  return (
    <>
      <Navigation />
      <Hero />
      <Second />
      <Third />
      <Forth />
      <Last />
    </>
  );
});
