// Models data for each section
const modelData = {
  environment: ["3d-assets/leaves.glb", "models/environment2.glb"],
  weapons: ["3d-assets/weapon.glb", "models/weapon2.glb", "models/weapon3.glb"],
  roads: ["3d-assets/road-first.glb", "models/road2.glb"],
  props: ["3d-assets/egg.glb", "models/prop2.glb", "models/prop3.glb"]
};

const modelIndices = {
  environment: 0,
  weapons: 0,
  roads: 0,
  props: 0
};

// Initialize dots and first models
window.onload = () => {
  for (const section in modelData) {
    const dotsContainer = document.getElementById(`${section}-dots`);
    modelData[section].forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.onclick = () => setModel(section, i);
      dotsContainer.appendChild(dot);
    });
  }
};

// Switch model
function setModel(section, index) {
  modelIndices[section] = index;
  const viewer = document.getElementById(`${section}-viewer`);
  viewer.src = modelData[section][index];

  const dots = document.getElementById(`${section}-dots`).children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === index);
  }
}

function prevModel(section) {
  const total = modelData[section].length;
  modelIndices[section] =
    (modelIndices[section] - 1 + total) % total;
  setModel(section, modelIndices[section]);
}

function nextModel(section) {
  const total = modelData[section].length;
  modelIndices[section] =
    (modelIndices[section] + 1) % total;
  setModel(section, modelIndices[section]);
}
