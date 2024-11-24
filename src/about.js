import { gsap } from "gsap";
import {ScrollTrigger }from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);


export function about() {
  const isMobile = window.innerWidth < 768;
  const titleContainer = document.querySelector(".about > .title-container");
  const aboutTitle = document.querySelectorAll(".about-title");
  const aboutSection = document.querySelector(".about");
  const aboutBoxes = gsap.utils.toArray(".about-box");
  const aboutBoxHeight = document.querySelector(".about-box").clientHeight;
  const aboutContainer = document.querySelector(".about-container");
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Title animation
  gsap.from(aboutTitle, {
    duration: isTouch ? 1.5 : 3.5,
    xPercent: isTouch ? -50 : -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 80%",
      end: "top 20%",
      scrub: isTouch ? 1 : true,
      once: isTouch,
    },
  });

  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    if (isMobile) {
      // Simplified mobile animation
      gsap.set(aboutBoxes, {
        xPercent: 100,
        opacity: 0,
      });

      // Create timeline for mobile card animation
      let mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainer,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 0.5,
        }
      });

      // Animate each card with less dramatic effects
      aboutBoxes.forEach((box, i) => {
        mobileTl.to(box, {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }, i * 0.1);
      });

      // Simplified touch interaction
      aboutBoxes.forEach(box => {
        box.addEventListener('touchstart', () => {
          gsap.to(box, {
            scale: 1.02,
            duration: 0.2,
          });
        });

        box.addEventListener('touchend', () => {
          gsap.to(box, {
            scale: 1,
            duration: 0.2,
          });
        });
      });

    } else {
      // Desktop animation
      let desktopTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleContainer,
          start: "top 60%",
          end: "top top",
          scrub: true,
        }
      });

      desktopTl
        .from(aboutBoxes, {
          duration: 2.25,
          yPercent: 100,
          opacity: 0,
          stagger: 0.5,
          ease: "power2.out",
        });
    }

    // Common parallax effect
    gsap.to(aboutSection, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: aboutSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  });

  // Cleanup function
  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}
