import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

export function smoothScroll() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) && 
                navigator.maxTouchPoints > 0;

  // If it's a touch device, don't initialize Lenis
  if (isTouch || isIOS) {
    // Enable native scrolling
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  return () => {
    lenis.destroy();
    gsap.ticker.remove(lenis.raf);
  };
}
