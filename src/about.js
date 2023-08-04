import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function about() {
  // Here starts scroll reveal animation for the about title
  const titleContainer = document.querySelector(".about > .title-container");
  const aboutTitle = document.querySelectorAll(" .about-title");

  gsap.from(aboutTitle, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
  });

  // Here starts Scroll Reveal animation for cards within the about section
  const aboutCards = document.querySelectorAll(".about-box");
  //const cardSkills = document.querySelectorAll("#skills--box");
  const aboutContainer = document.querySelector(".about-container");

  gsap.to(aboutCards, {
    duration: 2.25,
    yPercent: -100,
    opacity: 1,
    ease: "powe3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 70%",
      end: "top top",
      scrub: true,
    },
  });
  // gsap.from(cardSkills, {
  //   duration: 3.5,
  //   yPercent: 100,
  //   opacity: 0,
  //   ease: "powe3.out",
  //   scrollTrigger: {
  //     trigger: aboutContainer,
  //     start: "center 60%",
  //     end: "top top",
  //     // end: () => "-=" + aboutContainer.offsetHeight,
  //     scrub: true,
  //     // markers: true,
  //   },
  // });

  // HERE STARTS SCROLL paralax animation for about elements

  const aboutSection = document.querySelector(".about");

  gsap.to(aboutContainer, {
    duration: 3.25,
    yPercent: -100,
    // opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: aboutSection,
      start: "60% 20%",
      // end: "bottom 20%",
      end: () => "+=" + aboutSection.offsetHeight,
      scrub: true,
    },
  });
}
