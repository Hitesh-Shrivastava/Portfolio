// Handle clicks for sections
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const links = document.querySelectorAll(".nav-link");

  // Clicking "Hitesh Shrivastava" scrolls to Home
  logo.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

  // Section links scroll inside page
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) { // only for sections
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
