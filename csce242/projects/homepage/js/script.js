const genreRows = document.querySelectorAll(".genre-row");

for (let i = 0; i < genreRows.length; i++) {
    const row = genreRows[i];
    const images = row.querySelectorAll(".slides img");
    const nextButton = row.querySelector(".arrow-next");
    const prevButton = row.querySelector(".arrow-prev");
    let currentIndex = 0;

    for (let j = 0; j < images.length; j++) {
        if (!images[j].classList.contains("hidden")) {
            currentIndex = j;
            break;
        }
    }

    function showImage(nextIndex) {
        images[currentIndex].classList.add("hidden");
        images[nextIndex].classList.remove("hidden");
        currentIndex = nextIndex;
    }

    if (nextButton) {
        nextButton.onclick = function () {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        };
    }

    if (prevButton) {
        prevButton.onclick = function () {
            const nextIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(nextIndex);
        };
    }
}
