export function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

export function lazyLoad3DModels(callback) {
  const modelContainer = document.querySelector('#tech-container');
  
  const modelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        modelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (modelContainer) {
    modelObserver.observe(modelContainer);
  }
} 