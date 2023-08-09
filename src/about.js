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

  const aboutSection = document.querySelector(".about");
  const aboutBoxHeight = document.querySelector(".about-box").clientHeight;
  const aboutContainer = document.querySelector(".about-container");

  let mm = gsap.matchMedia(aboutSection);
  let breakPoint = 780;

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;
      const dynamicTop = `calc(${aboutBoxHeight}px + 1.5rem)`;

      let cardsTl = gsap
        .timeline()
        .from(".about-box", {
          duration: isMobile ? 2 : 2.25,
          yPercent: isDesktop ? 100 : 0,
          xPercent: isMobile ? 100 : 0,
          stagger: isDesktop ? 0.5 : 0,
        })
        .to(".about-box:nth-child(1)", {
          top: isMobile ? dynamicTop : 0,
        })
        .to(".about-box:nth-child(2)", {
          top: isMobile ? `calc(${dynamicTop} * 2)` : 0,
          stagger: isMobile ? 1 : 0,
        });

      isDesktop
        ? ScrollTrigger.create({
            animation: cardsTl,
            trigger: titleContainer,
            start: "top 60%",
            end: "top top",
            //markers: true,
            scrub: true,
          })
        : ScrollTrigger.create({
            animation: cardsTl,
            trigger: titleContainer,
            togglesAction: "restart pause resume none",
            start: "top 50%",
            //pin: aboutSection,
            end: "+=1200px",
            // markers: true,
            scrub: true,
          });

      let techTL = gsap.from("#tech", {
        duration: 1.5,
        opacity: 0,
        yPercent: isDesktop ? 100 : 0,
        xPercent: isMobile ? -100 : 0,
        stagger: 0.1,
        ease: "powe3.out",
        // scrollTrigger: {
        //   trigger: aboutSection,
        //   start: "center 50%",
        //   end: "+=1200px",
        //   //end: () => "+=" + aboutContainer.offsetHeight,
        //   scrub: true,
        //   markers: true,
        // },
      });

      isDesktop
        ? ScrollTrigger.create({
            animation: techTL,
            trigger: aboutContainer,

            start: "top 20%",
            end: "bottom 20%",
            //end: () => "+=" + aboutContainer.offsetHeight,
            scrub: true,
            //markers: true,
          })
        : ScrollTrigger.create({
            animation: techTL,
            trigger: aboutSection,
            start: "center 50%",
            end: "+=1200px",
            //end: () => "+=" + aboutContainer.offsetHeight,
            scrub: true,
            //markers: true,
          });
      // HERE STARTS SCROLL paralax animation for about elements

      isDesktop
        ? gsap.to(aboutSection, {
            duration: 3.25,
            yPercent: -100,
            // opacity: 0,
            ease: "powe3.out",
            scrollTrigger: {
              trigger: aboutSection,
              //markers: true,
              id: "about",
              start: "80% 20%",
              //end: "bottom 20%",
              end: () => "+=" + aboutSection.offsetHeight,
              scrub: true,
            },
          })
        : gsap.to(aboutSection, {
            duration: 3.25,
            yPercent: -100,
            // opacity: 0,
            ease: "powe3.out",
            scrollTrigger: {
              trigger: aboutSection,
              //markers: true,
              id: "about",
              start: "bottom 20%",
              //end: "bottom 20%",
              end: () => "+=" + aboutSection.offsetHeight,
              scrub: true,
            },
          });
    }
  );
}
