// import { loader } from "./src/loader.js";
import { smoothScroll } from "./src/smoothSCroll.js";
import BallBackground from "./src/canvas/BallBackground.js";
import { navBar } from "./src/navbar.js";
import { home } from "./src/home.js";
import { about } from "./src/about.js";
import { projects } from "./src/projects.js";
import { contact } from "./src/contact.js";

function init() {
  // loader();
  smoothScroll();
  new BallBackground();
  navBar();
  home();
  about();
  projects();
  contact();
}

init();
