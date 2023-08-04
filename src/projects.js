import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function projects() {
  // HERE STARTS THE REVEAL ANIMATION FOR PROJECT´S SECTION

  const projectsTitleContainer = document.querySelector(
    ".projects > .title-container"
  );
  const projectTitle = document.querySelectorAll(" .project-title");

  gsap.from(projectTitle, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: projectsTitleContainer,
      start: "top 70%",
      end: "top 60%",
      scrub: true,
    },
  });

  const sliderItem = document.querySelectorAll(".slider-item");
  const projectContainer = document.querySelector(".projects-container");

  gsap.from(sliderItem, {
    duration: 3.5,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: projectContainer,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
    },
  });

  // HERE STARTS THE ANIMATION FOR THE PROJECT´S SLIDER
  const projectsContent = document.querySelectorAll(".slider-content");
  const projects = document.querySelectorAll(".show-project");

  gsap.set(projects, { opacity: 0 });

  projectsContent.forEach((project) => {
    const animation = gsap.to(project.querySelector(".show-project"), {
      paused: true,
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "power4.out",
    });
    project.addEventListener("mouseenter", () => animation.play());
    project.addEventListener("mouseleave", () => animation.reverse());
  });

  /**
   * Gsap animations
   */
  const items = document.querySelectorAll(".slider-item");
  const width = (items.length - 1) * 100;
  const section = document.querySelector(".projects");

  gsap.to(".slider-item", {
    xPercent: -width,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "20% top",
      end: () => "+=" + section.offsetWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  items.forEach((item) => {
    gsap.to(item.querySelector(".slider-img"), {
      xPercent: -50,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + section.offsetWidth,
        scrub: true,
      },
    });
  });

  // HERE STARTS SCROLL paralax animation for projects elements

  // const projectSection = document.querySelector(".pin-spacer");

  // gsap.to(projectContainer, {
  //   duration: 3.25,
  //   yPercent: -100,
  //   // opacity: 0,
  //   ease: "powe3.out",
  //   scrollTrigger: {
  //     trigger: projectSection,
  //     start: "80% 20%",
  //     end: "bottom top",
  //     // end: () => "+=" + projectSection.offsetHeight,
  //     scrub: true,
  //     // markers: true,
  //   },
  // });
}
