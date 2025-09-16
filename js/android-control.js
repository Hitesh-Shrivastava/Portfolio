document.addEventListener('DOMContentLoaded', () => {
  const desktopNav = document.querySelector(".desktop-nav");
  const mobileNav = document.querySelector(".mobile-nav");

  const toggleNavigation = () => {
    if (window.innerWidth <= 768) {
      if (desktopNav) desktopNav.style.display = "none";
      if (mobileNav) mobileNav.style.display = "block";
    } else {
      if (desktopNav) desktopNav.style.display = "block";
      if (mobileNav) mobileNav.style.display = "none";
    }
  };

  // Run on load
  toggleNavigation();

  // Run on window resize
  window.addEventListener('resize', toggleNavigation);
});
