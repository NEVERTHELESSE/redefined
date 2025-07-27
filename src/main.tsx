import "@builder.io/qwik/qwikloader.js";

import { render } from "@builder.io/qwik";
import "./css/index.css";
import "./css/anim.css";
import "./css/app.css";
import { App } from "./app.tsx";

render(document.getElementById("app") as HTMLElement, <App />);
