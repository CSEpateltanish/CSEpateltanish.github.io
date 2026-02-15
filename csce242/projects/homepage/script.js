/* Button and gallery element references */
const allButton = document.getElementById("btn-all");
const landscapeButton = document.getElementById("btn-landscape");
const urbanButton = document.getElementById("btn-urban");
const portraitButton = document.getElementById("btn-portrait");
const filterButtons = document.querySelectorAll(".filter-button");
const galleryBoxes = document.querySelectorAll(".gallery-box");

/* Keep the clicked filter button visually active */
const setActiveButton = (activeButton) => {
  filterButtons.forEach((button) => {
    button.classList.remove("is-active");
  });
  activeButton.classList.add("is-active");
};

/* Show all boxes or only boxes matching one category class */
const showAll = () => {
  galleryBoxes.forEach((box) => {
    box.style.display = "block";
  });
};

const showCategory = (categoryClass) => {
  galleryBoxes.forEach((box) => {
    if (box.classList.contains(categoryClass)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
};

/* Click actions for each filter button */
allButton.onclick = () => {
  setActiveButton(allButton);
  showAll();
};

landscapeButton.onclick = () => {
  setActiveButton(landscapeButton);
  showCategory("landscape");
};

urbanButton.onclick = () => {
  setActiveButton(urbanButton);
  showCategory("urban");
};

portraitButton.onclick = () => {
  setActiveButton(portraitButton);
  showCategory("portrait");
};
