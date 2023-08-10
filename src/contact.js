import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function contact() {
  // Here starts animation for the contact title
  const titleContainer = document.querySelector(".contact > .title-container");
  const contactTitle = document.querySelectorAll(" .contact-title");

  gsap.from(contactTitle, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 70%",
      //markers: true,
      end: "top 60%",
      scrub: true,
    },
  });

  // Here starts animation for the contact content

  const contactContainer = document.querySelector(".contact-container");
  const contactContainerChilds =
    contactContainer.querySelectorAll(":scope > *");

  gsap.from(contactContainerChilds, {
    duration: 3.5,
    yPercent: 100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: contactContainer,
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
  });
}
