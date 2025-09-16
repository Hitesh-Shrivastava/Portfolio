document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-subsection").forEach(subsection => {
    const images = subsection.dataset.images.split(",");
    let currentIndex = 0;

    const imgTag = subsection.querySelector(".carousel-image img");
    const dotsContainer = subsection.querySelector(".carousel-dots");
    dotsContainer.innerHTML = "";
    images.forEach((_, index) => {
      const dot = document.createElement("span");
      if (index === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll("span");
    function updateCarousel() {
      imgTag.src = images[currentIndex].trim();
      dots.forEach((dot, idx) => dot.classList.toggle("active", idx === currentIndex));
    }
    updateCarousel();

    subsection.querySelector(".left").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    subsection.querySelector(".right").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    imgTag.addEventListener("click", () => {
      document.getElementById("overlay-img").src = images[currentIndex].trim();
      document.getElementById("overlay").style.display = "flex";
    });
  });

  document.getElementById("overlay-exit").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
  });
});

