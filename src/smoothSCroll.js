import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function smoothScroll() {
  const lenis = new Lenis({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: navigator.userAgent.includes('Safari') ? 0.5 : 1,
    touchMultiplier: navigator.userAgent.includes('Safari') ? 1.5 : 1,
    smoothTouch: false,
  });

  let rafId = null;
  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  return () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
}
