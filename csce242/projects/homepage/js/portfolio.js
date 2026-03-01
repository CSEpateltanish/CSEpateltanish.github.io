const filterAllButton = document.getElementById("filter-all");
const filterLandscapeButton = document.getElementById("filter-landscape");
const filterUrbanButton = document.getElementById("filter-urban");
const filterPortraitButton = document.getElementById("filter-portrait");
const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioCards = document.querySelectorAll(".portfolio-card");
const photoInfo = [];

photoInfo["images/photos/landscape/island.jpeg"] = { id: "landscape-island", caption: "Island" };
photoInfo["images/photos/landscape/waterfall.jpeg"] = { id: "landscape-waterfall", caption: "Waterfall" };
photoInfo["images/photos/landscape/Leaves.jpeg"] = { id: "landscape-leaves", caption: "Leaves" };
photoInfo["images/photos/landscape/NC_Mountains.jpeg"] = { id: "landscape-mountains", caption: "Mountains" };
photoInfo["images/photos/landscape/Ocean.jpeg"] = { id: "landscape-ocean", caption: "Ocean" };
photoInfo["images/photos/landscape/ReedyRiver.jpeg"] = { id: "landscape-reedy", caption: "Reedy" };
photoInfo["images/photos/landscape/River_rocks.jpeg"] = { id: "landscape-river", caption: "River" };
photoInfo["images/photos/landscape/Train.jpeg"] = { id: "landscape-train", caption: "Train" };
photoInfo["images/photos/urban/Miami.jpeg"] = { id: "urban-miami", caption: "Miami" };
photoInfo["images/photos/urban/Miami_2.jpeg"] = { id: "urban-miami2", caption: "Skyline" };
photoInfo["images/photos/urban/cola.jpg"] = { id: "urban-cola", caption: "Columbia" };
photoInfo["images/photos/urban/Toronto.jpeg"] = { id: "urban-toronto", caption: "Toronto" };
photoInfo["images/photos/urban/gvl.jpg"] = { id: "urban-gvl", caption: "Greenville" };
photoInfo["images/photos/urban/WillyB.jpeg"] = { id: "urban-willyb", caption: "Bridge" };
photoInfo["images/photos/portrait/Cape_cod.jpeg"] = { id: "portrait-capecod", caption: "Cape" };
photoInfo["images/photos/portrait/Ceremony.jpeg"] = { id: "portrait-ceremony", caption: "Ceremony" };
photoInfo["images/photos/portrait/bird.jpg"] = { id: "portrait-bird", caption: "Bird" };
photoInfo["images/photos/portrait/Cincy_Portrait.jpeg"] = { id: "portrait-cincy", caption: "Cincy" };
photoInfo["images/photos/portrait/Graduation.jpeg"] = { id: "portrait-graduation", caption: "Graduation" };
photoInfo["images/photos/portrait/dog.jpg"] = { id: "portrait-dog", caption: "Dog" };
photoInfo["images/photos/portrait/giraffe.jpg"] = { id: "portrait-giraffe", caption: "Giraffe" };

function setActiveFilter(activeButton) {
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove("is-active");
    }

    activeButton.classList.add("is-active");
}

function showCards(genreType) {
    for (let i = 0; i < portfolioCards.length; i++) {
        const card = portfolioCards[i];
        let showCard = false;

        if (genreType === "all") {
            showCard = true;
        } else if (card.classList.contains(genreType + "-card")) {
            showCard = true;
        }

        if (showCard) {
            card.classList.remove("hidden-card");
        } else {
            card.classList.add("hidden-card");
        }
    }
}

if (filterAllButton) {
    filterAllButton.onclick = function () {
        setActiveFilter(filterAllButton);
        showCards("all");
    };
}

if (filterLandscapeButton) {
    filterLandscapeButton.onclick = function () {
        setActiveFilter(filterLandscapeButton);
        showCards("landscape");
    };
}

if (filterUrbanButton) {
    filterUrbanButton.onclick = function () {
        setActiveFilter(filterUrbanButton);
        showCards("urban");
    };
}

if (filterPortraitButton) {
    filterPortraitButton.onclick = function () {
        setActiveFilter(filterPortraitButton);
        showCards("portrait");
    };
}

for (let i = 0; i < portfolioCards.length; i++) {
    const card = portfolioCards[i];
    const imageWrap = card.querySelector(".portfolio-card-image");
    const image = card.querySelector(".portfolio-card-image img");
    const button = card.querySelector(".portfolio-card-button");
    const imageSrc = image ? image.getAttribute("src") : "";
    const details = photoInfo[imageSrc];

    if (imageWrap && image) {
        const caption = document.createElement("p");
        caption.className = "portfolio-card-caption";
        if (details) {
            caption.textContent = details.caption;
        } else {
            caption.textContent = "Photo";
        }
        imageWrap.appendChild(caption);
    }

    if (button && image) {
        const imagePath = encodeURIComponent(image.getAttribute("src"));
        const imageId = details ? details.id : "";
        button.href = "photo.html?id=" + imageId + "&img=" + imagePath;
    }
}
