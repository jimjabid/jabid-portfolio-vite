import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function loader() {
  const loaderTimeline = gsap
    .timeline()
    .to(".loading__text", {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(
      ".loader",
      {
        width: "100%",
        duration: 1.5,
        // ease: "slow(0.1, 0.1, false)",
        ease: "power3.out",
      },
      ">"
    )
    .to(
      ".loader",
      {
        transform: "scale(10,1)",
        duration: 0.5,
      },
      ">+=0.1"
    )
    .to(
      ".loading__text",
      {
        opacity: 0,
        yPercent: -400,
        duration: 0.5,
        // ease: "slow(0.1, 0.1, false)",
        ease: "power3.out",
      },
      "<+=0.35"
    )
    .to(
      ".block-top",
      {
        yPercent: -100,
        duration: 1,
        ease: "power3.out",
      },
      "<+=0.10"
    )
    .to(
      ".block-bottom",
      {
        yPercent: 100,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    )
    .to(
      ".blocks",
      {
        display: "none",
      },
      ">+=0.45"
    );

  //4,85

  return loaderTimeline;
}
