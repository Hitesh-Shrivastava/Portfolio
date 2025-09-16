window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0"; // start fade out
  setTimeout(() => {
    preloader.style.display = "none"; // remove after fade completes
  }, 7000); // matches 7s transition
});
