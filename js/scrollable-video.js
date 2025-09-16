document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");
  const video = document.querySelector(".video-container video");
  const maximizeBtn = document.querySelector(".maximize-btn");

  // Start video in loop
  video.loop = true;
  video.play();

  // Shrink video container after 2 seconds
  setTimeout(() => {
    videoContainer.classList.add("shrink");
  }, 5000);

  // On maximize button click
  maximizeBtn.addEventListener("click", () => {
    videoContainer.classList.remove("shrink"); // maximize
    maximizeBtn.classList.add("hidden"); // hide button
    video.play(); // ensure video is playing
  });
});
