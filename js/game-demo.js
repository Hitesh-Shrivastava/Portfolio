const demoImages = {
  "game1": ["game-demo/screen-shot 1.PNG", "game-demo/Sceen-shot2.PNG", "game-demo/screen-shot3.PNG", "game-demo/screen-shot4.PNG"]
};

let demoIndices = {};
for (let key in demoImages) demoIndices[key] = 0;

// Initialize
window.onload = function () {
  for (let key in demoImages) showDemo(key, 0);
};

function showDemo(game, index) {
  const imgEl = document.getElementById(`${game}-image`);
  if (!imgEl) return;
  imgEl.src = demoImages[game][index];

  const dotsContainer = document.getElementById(`${game}-dots`);
  dotsContainer.innerHTML = "";
  demoImages[game].forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === index) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

function nextDemo(game) {
  demoIndices[game] = (demoIndices[game] + 1) % demoImages[game].length;
  showDemo(game, demoIndices[game]);
}

function prevDemo(game) {
  demoIndices[game] = (demoIndices[game] - 1 + demoImages[game].length) % demoImages[game].length;
  showDemo(game, demoIndices[game]);
}
