export function fitText() {
  const titles = document.querySelectorAll('.hero-title');
  const container = document.querySelector('.hero-titles-container');
  
  titles.forEach(title => {
    let fontSize = 100;
    title.style.fontSize = `${fontSize}px`;
    
    while (title.scrollWidth > container.clientWidth && fontSize > 20) {
      fontSize -= 1;
      title.style.fontSize = `${fontSize}px`;
    }
  });
}

// If you're using a framework like React, you might want to use a ResizeObserver instead
export function initTextFit() {
  // Run on load and resize
  window.addEventListener('load', fitText);
  window.addEventListener('resize', fitText);

  const resizeObserver = new ResizeObserver(entries => {
    fitText();
  });

  const container = document.querySelector('.hero-titles-container');
  if (container) {
    resizeObserver.observe(container);
  }
} 