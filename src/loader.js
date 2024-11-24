import { gsap } from "gsap";
import {ScrollTrigger }from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

export function loader() {
  // Create separate timelines for welcome and loading animations
  const welcomeTimeline = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  });

  const loadingTimeline = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  });

  // Initial setup
  gsap.set(".loading-text", { yPercent: 100, opacity: 0 });
  gsap.set(".loader", { width: "0%", opacity: 0 });
  gsap.set(".loader-container", { opacity: 0 });
  gsap.set([".block-top", ".block-bottom"], { yPercent: 0 });

  // Split text animation setup
  const letters = document.querySelector('.loading-text').textContent.split('');
  document.querySelector('.loading-text').innerHTML = letters
    .map(letter => `<span class="letter">${letter}</span>`)
    .join('');
  
  gsap.set(".letter", { opacity: 0, y: 20 });

  // Welcome animation sequence
  welcomeTimeline
    .to(".loading-text", {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(".letter", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out"
    })
    .to(".loading-text", {
      opacity: 1,
      duration: 0.8,
    });

  // Loading animation sequence
  loadingTimeline
    .to(".loader-container", {
      opacity: 1,
      duration: 0.3,
    })
    .to(".loader", {
      opacity: 1,
      duration: 0.2,
    }, "<")
    .to(".loader", {
      width: "100%",
      duration: 1.5,
      ease: "power4.inOut",
    })
    .to(".loading-text", {
      yPercent: -100,
      // opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    })
    .to({}, { duration: 0.3 })
    .to([".block-top", ".block-bottom"], {
      yPercent: (index) => index === 0 ? -100 : 100,
      duration: 1.8,
      ease: "power3.inOut",
      stagger: 0.15,
    })
    .to(".blocks", {
      display: "none",
      duration: 0.1,
    });

  const handleLoad = async () => {
    // Play welcome animation immediately
    welcomeTimeline.play();

    // Wait for minimum time and page load
    await Promise.all([
      new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', resolve);
        }
      }),
      new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds minimum
    ]);

    // Start loading animation after welcome
    loadingTimeline.play();
  };

  handleLoad();

  return { welcomeTimeline, loadingTimeline };
}
