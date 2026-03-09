const photoElement = document.getElementById("detail-photo");
const titleElement = document.getElementById("detail-title");
const dateElement = document.getElementById("detail-date");
const locationElement = document.getElementById("detail-location");
const cameraElement = document.getElementById("detail-camera");
const descriptionElement = document.getElementById("detail-description");
const statusElement = document.getElementById("detail-status");

const params = new URLSearchParams(window.location.search);
const imageId = params.get("id");

const photoDetails = [];
photoDetails["landscape-island"] = {
    title: "Island",
    image: "images/photos/landscape/island.jpeg",
    date: "May 18, 2024",
    location: "Hilton Head, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A calm shoreline that highlights the texture of coastal rocks and water."
};
photoDetails["landscape-waterfall"] = {
    title: "Waterfall",
    image: "images/photos/landscape/waterfall.jpeg",
    date: "June 2, 2024",
    location: "Pisgah Forest, North Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Moving water framed with natural rock detail and soft light."
};
photoDetails["landscape-leaves"] = {
    title: "Leaves",
    image: "images/photos/landscape/Leaves.jpeg",
    date: "October 14, 2021",
    location: "Mountains of Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Fall colors and leaf texture focused to create a close natural composition."
};
photoDetails["landscape-mountains"] = {
    title: "Mountains",
    image: "images/photos/landscape/NC_Mountains.jpeg",
    date: "July 8, 2024",
    location: "Smoky Mountains, Tennessee",
    camera: "Canon EOS Rebel T7",
    description: "Wide mountain framing that emphasizes depth, layers, and haze across the range."
};
photoDetails["landscape-ocean"] = {
    title: "Ocean",
    image: "images/photos/landscape/Ocean.jpeg",
    date: "August 3, 2022",
    location: "Horseneck Beach, Dartmouth, Massachusetts",
    camera: "Canon EOS Rebel T7",
    description: "Open ocean lines and horizon with a clean, minimal landscape feel."
};
photoDetails["landscape-reedy"] = {
    title: "Reedy",
    image: "images/photos/landscape/ReedyRiver.jpeg",
    date: "September 9, 2017",
    location: "Falls Park, Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Reedy River in downtown Greenville, one of my personal favourites."
};
photoDetails["landscape-river"] = {
    title: "River",
    image: "images/photos/landscape/River_rocks.jpeg",
    date: "April 21, 2021",
    location: "Mountains of Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Flowing water around rocks to show natural patterns and motion in one frame."
};
photoDetails["landscape-train"] = {
    title: "Train",
    image: "images/photos/landscape/Train.jpeg",
    date: "November 11, 2020",
    location: "Mt. Washington, Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Train blowing steam as it climbs up to over 6000ft of elevation."
};
photoDetails["urban-miami"] = {
    title: "Miami",
    image: "images/photos/urban/Miami.jpeg",
    date: "December 20, 2017",
    location: "Miami, Florida",
    camera: "Canon EOS Rebel T7",
    description: "Urban architecture and street energy combined in a clean, modern city shot."
};
photoDetails["urban-miami2"] = {
    title: "Bayside",
    image: "images/photos/urban/Miami_2.jpeg",
    date: "December 21, 20174",
    location: "Downtown Miami, Florida",
    camera: "Canon EOS Rebel T7",
    description: "Bayside perspective focused on shape and contrast between the boardwalk and sky in Miami."
};
photoDetails["urban-cola"] = {
    title: "Columbia",
    image: "images/photos/urban/cola.jpg",
    date: "March 3, 2024",
    location: "Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Street-level composition showing city rhythm, people flow, and structure."
};
photoDetails["urban-toronto"] = {
    title: "Toronto",
    image: "images/photos/urban/Toronto.jpeg",
    date: "June 26, 2022",
    location: "Toronto, Ontario",
    camera: "Canon EOS Rebel T7",
    description: "Tall architecture and perspective lines designed to emphasize scale."
};
photoDetails["urban-gvl"] = {
    title: "Greenville",
    image: "images/photos/urban/gvl.jpg",
    date: "September 28, 2016",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A downtown moment focused on the color and pace of the local streets of Greenville, SC."
};
photoDetails["urban-willyb"] = {
    title: "Williams Brice",
    image: "images/photos/urban/WillyB.jpeg",
    date: "November 4, 2024",
    location: "Cincinnati, Ohio",
    camera: "iPhone 16 Pro Max",
    description: "Williams Brice in action during a UofSC classic, Sandstorm."
};
photoDetails["portrait-capecod"] = {
    title: "Cape",
    image: "images/photos/portrait/Cape_cod.jpeg",
    date: "July 17, 2021",
    location: "Cape Cod, Massachusetts",
    camera: "Canon EOS Rebel T7",
    description: "Portrait-focused composition using natural light and coastal background in Cape Cod."
};
photoDetails["portrait-ceremony"] = {
    title: "Ceremony",
    image: "images/photos/portrait/Ceremony.jpeg",
    date: "May 10, 2017",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A candid moment during a baby shower."
};
photoDetails["portrait-bird"] = {
    title: "Bird",
    image: "images/photos/portrait/bird.jpg",
    date: "August 15, 2024",
    location: "Riverbanks Zoo, Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Wildlife portrait."
};
photoDetails["portrait-cincy"] = {
    title: "Cincy",
    image: "images/photos/portrait/Cincy_Portrait.jpeg",
    date: "October 6, 2019",
    location: "Cincinnati, Ohio",
    camera: "Canon EOS Rebel T7",
    description: "City portrait of my uncle and aunt in Cincinnati."
};
photoDetails["portrait-graduation"] = {
    title: "Graduation",
    image: "images/photos/portrait/Graduation.jpeg",
    date: "September 14, 2019",
    location: "Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Celebratory portrait of my sister on her achievement of graduating nursing school"
};
photoDetails["portrait-dog"] = {
    title: "Dog",
    image: "images/photos/portrait/dog.jpg",
    date: "November 2, 2024",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Dog portrait."
};
photoDetails["portrait-giraffe"] = {
    title: "Giraffe",
    image: "images/photos/portrait/giraffe.jpg",
    date: "March 24, 2024",
    location: "Riverbanks Zoo, Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Animal portrait."
};

if (!imageId) {
    window.location.href = "portfolio.html";
}

const details = photoDetails[imageId];

if (details) {
    if (photoElement) {
        photoElement.src = details.image;
        photoElement.alt = details.title;
    }

    if (titleElement) {
        titleElement.textContent = details.title;
    }

    if (dateElement) {
        dateElement.textContent = details.date;
    }

    if (locationElement) {
        locationElement.textContent = details.location;
    }

    if (cameraElement) {
        cameraElement.textContent = details.camera;
    }

    if (descriptionElement) {
        descriptionElement.textContent = details.description;
    }

    if (statusElement) {
        statusElement.textContent = "";
        statusElement.classList.remove("is-error");
    }
} else {
    if (titleElement) {
        titleElement.textContent = "Photo Detail";
    }

    if (dateElement) {
        dateElement.textContent = "N/A";
    }

    if (locationElement) {
        locationElement.textContent = "N/A";
    }

    if (cameraElement) {
        cameraElement.textContent = "N/A";
    }

    if (descriptionElement) {
        descriptionElement.textContent = "Details unavailable for this image.";
    }

    if (statusElement) {
        statusElement.textContent = "error loading image details";
        statusElement.classList.add("is-error");
    }
}
