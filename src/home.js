import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class SplitTextJS {
  constructor(_target) {
    this.result = new Object();
    this.result.originalText = _target.innerText;
    this.result.splitted = this.split(_target);
    this.result.words = this.result.splitted.querySelectorAll(
      ".SplitTextJS-wrapper"
    );
    this.result.chars =
      this.result.splitted.querySelectorAll(".SplitTextJS-char");
    this.result.spaces = this.result.splitted.querySelectorAll(
      ".SplitTextJS-spacer"
    );
    return this.result;
  }
  createSpan(_class) {
    let span = document.createElement("span");
    span.style.display = "inline-block";
    span.className = _class;
    return span;
  }
  split(_target) {
    let containerArray = new Array();
    const splittedTarget = _target.innerText.split(" ");
    let counter = splittedTarget.length;
    splittedTarget.map((word) => {
      const wrapper = this.createSpan("SplitTextJS-wrapper");
      word.split(/(?!^)/).map((char) => {
        let el = this.createSpan("SplitTextJS-char");
        el.innerText = char;
        wrapper.appendChild(el);
      });
      counter--;
      containerArray.push(wrapper);

      if (counter > 0) {
        let space = this.createSpan("SplitTextJS-char SplitTextJS-spacer");
        space.innerHTML = "&nbsp;";
        containerArray.push(space);
      }
    });
    _target.innerHTML = "";
    containerArray.forEach((child) => {
      _target.appendChild(child);
    });
    return _target;
  }
}

export function home() {
  // HERE STARTS THE ANIMATION FOR THE HOME TITLES
  const titles = document.querySelectorAll(".home__name-change");

  var titleTL = gsap.timeline({
    repeat: -1,
  });

  titles.forEach((title) => {
    const splitTitle = new SplitTextJS(title);

    titleTL
      .from(
        splitTitle.chars,
        { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 },
        "<0.8"
      )
      .to(
        splitTitle.chars,
        { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 },
        "<2"
      );
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE BG

  const canvass = document.querySelectorAll("#myThreeJsCanvas");

  gsap.from(canvass, {
    duration: 2,
    opacity: 0,
    delay: 2.9,

    ease: "back.out",
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE NAV
  const navItem = document.querySelectorAll(".nav__item");

  gsap.from(navItem, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9,
    stagger: 0.2,
    ease: "back.out",
  });

  // HERE STARTS THE LOAD REVEAL ANIMATION FOR THE RIGHT SIDE OF THE HOME PAGE ON
  // LARGE SCREENS
  const homeLeftCol = document.querySelector(".home__data");
  const childElementsLeftCol = homeLeftCol.querySelectorAll(":scope > *");

  gsap.from(childElementsLeftCol, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9,

    stagger: 0.2,
    ease: "back.out",
  });

  const homeRightCol = document.querySelector(".home__img-container");
  gsap
    .timeline()
    .from(homeRightCol, {
      duration: 2,
      yPercent: 100,
      opacity: 0,
      delay: 2.9,
      ease: "power3.out",
    })
    .from(
      "#card--design",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.5"
    )
    .from(
      "#card--development",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.25,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.25"
    );
  // HERE STARTS SCROLL paralax animation for home elements

  const homeContainer = document.querySelector(".home__container");
  const homeSection = document.querySelector(".home");

  gsap.to(homeContainer, {
    duration: 3.25,
    yPercent: -100,
    // opacity: 0,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: homeSection,
      start: "60% 20%",
      // end: "bottom top",
      end: () => "+=" + homeSection.offsetHeight,
      scrub: true,
    },
  });
}
