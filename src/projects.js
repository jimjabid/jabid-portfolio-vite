import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { gsap } from "gsap";

export function projects() {
  // Title animation
  gsap.from(".project-title", {
    duration: 1.5,
    xPercent: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects",
      start: "top 70%",
      end: "top 60%",
      scrub: true,
    }
  });

  const swiper = new Swiper('.projects-container', {
    modules: [Navigation, Pagination, EffectCoverflow],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Mobile
      320: {
        slidesPerView: 1,
        effect: 'slide',
      },
      // Tablet
      768: {
        slidesPerView: 2,
        effect: 'coverflow',
      },
      // Desktop
      1024: {
        slidesPerView: 3,
        effect: 'coverflow',
      }
    },
    on: {
      init: function() {
        handleProjectHover();
      },
    }
  });

  // Handle project hover effects
  function handleProjectHover() {
    const projects = document.querySelectorAll('.slider-content');
    
    projects.forEach(project => {
      const projectInfo = project.querySelector('.show-project');
      
      project.addEventListener('mouseenter', () => {
        gsap.to(projectInfo, {
          scaleY: 1,
          duration: 0.5,
          ease: "power3.out"
        });
      });

      project.addEventListener('mouseleave', () => {
        gsap.to(projectInfo, {
          scaleY: 0,
          duration: 0.3,
          ease: "power3.in"
        });
      });

      // For mobile
      project.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          gsap.to(projectInfo, {
            scaleY: projectInfo.scaleY === 1 ? 0 : 1,
            duration: 0.5,
            ease: "power3.inOut"
          });
        }
      });
    });
  }

  // Add custom styles
  const style = document.createElement('style');
  style.textContent = `
    .swiper-pagination-bullet {
      background: var(--primary-color, #fff);
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--primary-color, #fff);
    }
    .swiper-slide {
      opacity: 0.4;
      transition: opacity 0.3s;
    }
    .swiper-slide-active {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  // Cleanup function
  return () => {
    if (swiper) {
      swiper.destroy();
    }
    style.remove();
  };
}
