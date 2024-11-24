import { gsap } from "gsap";
import {ScrollTrigger }from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);


export function contact() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Contact title animation
  const titleContainer = document.querySelector(".contact > .title-container");
  const contactTitle = document.querySelectorAll(" .contact-title");

  gsap.from(contactTitle, {
    duration: isTouch ? 1.5 : 3.5,
    xPercent: isTouch ? -50 : -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 80%",
      end: "top 20%",
      scrub: isTouch ? 1 : true,
      once: isTouch,
    },
  });

  // Contact content animation
  const contactContainer = document.querySelector(".contact-container");
  const contactContainerChilds =
    contactContainer.querySelectorAll(":scope > *");

  gsap.from(contactContainerChilds, {
    duration: isTouch ? 1.5 : 3.5,
    yPercent: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: isTouch ? 0.1 : 0.25,
    scrollTrigger: {
      trigger: contactContainer,
      start: "top 80%",
      end: "top 20%",
      scrub: isTouch ? 1 : true,
      once: isTouch,
    },
  });
}
