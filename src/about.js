import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

export function about() {
  const isMobile = window.innerWidth < 768;
  const titleContainer = document.querySelector(".about > .title-container");
  const aboutTitle = document.querySelectorAll(".about-title");
  const aboutSection = document.querySelector(".about");
  const aboutBoxes = gsap.utils.toArray(".about-box");
  const aboutBoxHeight = document.querySelector(".about-box").clientHeight;
  const aboutContainer = document.querySelector(".about-container");

  // Title animation
  gsap.from(aboutTitle, {
    duration: isMobile ? 1.5 : 3.5,
    xPercent: isMobile ? -50 : -100,
    opacity: 0,
    ease: "power2.out",
    stagger: isMobile ? 0.2 : 0.5,
    scrollTrigger: {
      trigger: titleContainer,
      start: "top 80%",
      end: "top 60%",
      scrub: isMobile ? 1 : true,
    },
  });

  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    if (isMobile) {
      // Initial state - stack cards on top of each other
      gsap.set(aboutBoxes, {
        xPercent: 100,
        yPercent: (i) => i * -5, // Slight offset for stacked appearance
        rotation: (i) => i * 2, // Slight rotation for each card
        opacity: 1,
        zIndex: (i) => aboutBoxes.length - i, // Stack order
      });

      // Create timeline for mobile card animation
      let mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainer,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
          //markers: true,
        }
      });

      // Animate each card
      aboutBoxes.forEach((box, i) => {
        mobileTl.to(box, {
          xPercent: 0,
          yPercent: i * 110, // Space cards vertically
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        }, i * 0.1); // Stagger the animations
      });

      // Add hover effect for mobile
      aboutBoxes.forEach(box => {
        box.addEventListener('touchstart', () => {
          gsap.to(box, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        box.addEventListener('touchend', () => {
          gsap.to(box, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in"
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
