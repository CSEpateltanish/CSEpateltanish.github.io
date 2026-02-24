document.querySelectorAll(".genre-row").forEach((row) => {
  const images = Array.from(row.querySelectorAll(".slides img"));
  let currentIndex = images.findIndex((image) => !image.classList.contains("hidden"));

  if (currentIndex === -1) {
    currentIndex = 0;
    images.forEach((image, index) => {
      image.classList.toggle("hidden", index !== 0);
    });
  }

  const showImage = (nextIndex) => {
    images[currentIndex].classList.add("hidden");
    images[nextIndex].classList.remove("hidden");
    currentIndex = nextIndex;
  };

  row.querySelector(".arrow-next").onclick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  };

  row.querySelector(".arrow-prev").onclick = () => {
    const nextIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(nextIndex);
  };
});
