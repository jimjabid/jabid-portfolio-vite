import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

export function smoothScroll() {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) && 
                navigator.maxTouchPoints && 
                navigator.maxTouchPoints > 1;

  const lenis = new Lenis({
    duration: isIOS ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !isIOS,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: isIOS ? 1.5 : 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable smooth scrolling on iOS
  if (isIOS) {
    lenis.destroy();
    return () => {};
  }

  return () => {
    lenis.destroy();
    gsap.ticker.remove(lenis.raf);
  };
}
