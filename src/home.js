import { gsap } from "gsap";

import SplitTextJS from "./utils/splitText";
import {ScrollTrigger }from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

export function home() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // ANIMATE THE HOME TITLES
  const titles = document.querySelectorAll(".hero-title");

  // Create a timeline for the title animation
  var titleTL = gsap.timeline({
    repeat: -1, // Repeat the animation indefinitely
  });

  // Loop through each title element and animate the split characters
  titles.forEach((title) => {
    const splitTitle = new SplitTextJS(title); // Split the title into individual characters

    // Animation to reveal the characters
    titleTL.from(
      splitTitle.chars,
      { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 },
      "<0.8" // Starts after 0.8 seconds
    );

    // Animation to hide the characters
    titleTL.to(
      splitTitle.chars,
      { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 },
      "<2" // Starts after 2 seconds
    );
  });

  // ANIMATE THE ELEMENTS IN THE LEFT COLUMN OF THE HOME SECTION
  const homeLeftCol = document.querySelector(".home-left-col");
  const childElementsLeftCol = homeLeftCol.querySelectorAll(":scope > *");

  gsap.from(childElementsLeftCol, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9, // Delay the animation start by 2.9 seconds
    stagger: 0.2, // Stagger the animations for each child element
    ease: "back.out", // Use a back-out easing function
  });

  // // ANIMATE THE ELEMENTS IN THE RIGHT COLUMN OF THE HOME SECTION
  // const homeRightCol = document.querySelector(".img-container");
  // gsap
  //   .timeline()
  //   .from(homeRightCol, {
  //     duration: 2,
  //     yPercent: 100,
  //     opacity: 0,
  //     delay: 2.9, // Delay the animation start by 2.9 seconds
  //     ease: "power3.out", // Use a power3 easing function
  //   })
  //   .from(
  //     "#card-design",
  //     {
  //       transformOrigin: "center",
  //       rotateX: 360,
  //       duration: 1.5,
  //       opacity: 0,
  //       yPercent: 100,
  //       ease: "back.out", // Use a back-out easing function
  //     },
  //     "<+=0.5" // Start the animation 0.5 seconds after the previous one
  //   )
  //   .from(
  //     "#card-development",
  //     {
  //       transformOrigin: "center",
  //       rotateX: 360,
  //       duration: 1.25,
  //       opacity: 0,
  //       yPercent: 100,
  //       ease: "back.out", // Use a back-out easing function
  //     },
  //     "<+=0.25" // Start the animation 0.25 seconds after the previous one
  //   );

  // PARALLAX ANIMATION FOR THE HOME SECTION
  const homeContainer = document.querySelector(".home-container");
  const homeSection = document.querySelector(".home");

  gsap.to(homeContainer, {
    duration: isTouch ? 1 : 3.25,
    yPercent: -100,
    ease: "power3.out",
    scrollTrigger: {
      trigger: homeSection,
      start: isTouch ? "top top" : "80% 20%",
      end: () => "+=" + homeSection.offsetHeight,
      scrub: isTouch ? 1 : true,
      invalidateOnRefresh: true,
    },
  });
}
