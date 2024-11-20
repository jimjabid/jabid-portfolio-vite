import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loader } from "./src/loader.js";
import { smoothScroll } from "./src/smoothSCroll.js";
import BallBackground from "./src/canvas/BallBackground.js";
import { home } from "./src/home.js";
import { about } from "./src/about.js";
import BallAboutInstance from "./src/canvas/BallAbout.js";
import { projects } from "./src/projects.js";
import { contact } from "./src/contact.js";
import { lazyLoadImages, lazyLoad3DModels } from './src/utils/lazyLoad.js';

// Register GSAP plugins and configure ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

// Global ScrollTrigger configuration
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

function initTechBalls() {
  const techContainer = document.querySelector('.tech-container');
  if (!techContainer) {
    console.error('Tech container not found');
    return;
  }
  
  // Wait for next frame to ensure DOM is ready
  requestAnimationFrame(() => {
    BallAboutInstance();
  });
}

function init() {
  // Initialize lazy loading
  lazyLoadImages();
  
  // Initialize core components
  loader();
  const cleanupScroll = smoothScroll();
  
  // Initialize 3D background with proper cleanup
  const ballBackground = new BallBackground({ 
    dom: document.querySelector("#myThreeJsCanvas") 
  });

    // Add resize handler
    window.addEventListener('resize', () => {
      if (ballBackground) {
        ballBackground.resize();
      }
    });
    
  // Lazy load 3D models for about section
  lazyLoad3DModels(() => {
    BallAboutInstance();
  });

  // Initialize page sections
  home();
  about();
  projects();
  contact();

  // Initialize tech balls after a short delay to ensure DOM is ready
  setTimeout(initTechBalls, 100);

  // Cleanup on page unload
  window.addEventListener('unload', () => {
    if (cleanupScroll) cleanupScroll();
    if (ballBackground) ballBackground.dispose();
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
