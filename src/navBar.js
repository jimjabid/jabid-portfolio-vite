export const navBar = () => {
  /*=============== SHOW MENU ===============*/
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navMenu = document.getElementById("nav-menu");

  function toggleMenu() {
    navMenu.classList.toggle("hidden");
  }

  navToggle.addEventListener("click", toggleMenu);
  navClose.addEventListener("click", toggleMenu);

  // Get all list items inside the navMenu
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to hide the navMenu when any list item is clicked
  function hideNavMenu() {
    navMenu.classList.add("hidden");
  }

  // Add event listener to each list item
  navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
    console.log(link);
  });
};
