const desktopNav = document.getElementById("on-desktop");

document.addEventListener("mousemove", (e) => {
  if (e.clientY < 20) {
    desktopNav.classList.add("visible");
  } else if (!desktopNav.matches(":hover")) {
    desktopNav.classList.remove("visible");
  }
});
