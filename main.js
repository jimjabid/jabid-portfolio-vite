import { loader } from "./src/loader.js";
import { smoothScroll } from "./src/smoothSCroll.js";
import { threeBg } from "./src/3DAnimations/threeBg.js";
//import { animateSVG } from "./src/animateSVG";
import { home } from "./src/home.js";
import { about } from "./src/about.js";
import { projects } from "./src/projects.js";
import { contact } from "./src/contact.js";

function init() {
  loader();
  smoothScroll();
  threeBg();
  //animateSVG();
  home();
  about();
  projects();
  contact();
}

init();
