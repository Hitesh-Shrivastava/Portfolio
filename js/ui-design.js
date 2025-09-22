// Store images for each subsection
const uiImages = {
  "game-bg": ["ui-images/menu.png", "ui-images/menu2.png", "ui-images/menu.png"],
  "game-sprites": ["ui-images/button.png", "ui-images/button-2.png", "ui-images/button.png"],
  "game-menu": ["ui-images/menu.png", "ui-images/button2.png"],

  "fun-bg": ["ui-images/menu.png", "ui-images/menu2.png"],
  "fun-sprites": ["ui-images/button-2.png", "ui-images/button2.png", "ui-images/button.png"],
  "fun-menu": ["ui-images/menu.png", "ui-images/menu_2.png","ui-images/menu-3.png"]
};

// Track current index for each subsection
let uiIndices = {};
for (let key in uiImages) {
  uiIndices[key] = 0;
}

// Initialize on load
window.onload = function () {
  for (let key in uiImages) {
    showImage(key, uiIndices[key]);
  }
};

// Show image in subsection
function showImage(section, index) {
  let imgElement = document.getElementById(section + "-image");
  if (!imgElement) return;

  imgElement.src = uiImages[section][index];

  // Update dots
  let dotsContainer = document.getElementById(section + "-dots");
  dotsContainer.innerHTML = "";
  uiImages[section].forEach((_, i) => {
    let dot = document.createElement("span");
    if (i === index) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

// Next image
function nextImage(section) {
  uiIndices[section] = (uiIndices[section] + 1) % uiImages[section].length;
  showImage(section, uiIndices[section]);
}

// Previous image
function prevImage(section) {
  uiIndices[section] =
    (uiIndices[section] - 1 + uiImages[section].length) %
    uiImages[section].length;
  showImage(section, uiIndices[section]);
}

// -------- Fullscreen Overlay --------

// Create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("fullscreen-overlay");
overlay.style.display = "none";
overlay.innerHTML = `
  <div class="fullscreen-content">
    <button class="close-btn">
      <img src="assets/exit.svg" alt="Exit">
    </button>
    <img id="fullscreen-img" src="" alt="Fullscreen">
  </div>
`;
document.body.appendChild(overlay);
// Open fullscreen on image click
document.querySelectorAll(".ui-container img").forEach((img) => {
  img.addEventListener("click", () => {
    fullscreenImg.src = img.src;
    overlay.style.display = "flex";
  });
});

// Close fullscreen
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

