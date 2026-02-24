const portfolioFilters = document.querySelectorAll(".portfolio-filter");
const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioFilters.forEach((button) => {
  button.onclick = () => {
    portfolioFilters.forEach((filterButton) => {
      filterButton.classList.remove("is-active");
    });
    button.classList.add("is-active");

    const selectedFilter = button.dataset.filter;

    portfolioCards.forEach((card) => {
      const showCard =
        selectedFilter === "all" || card.dataset.genre === selectedFilter;

      card.classList.toggle("hidden-card", !showCard);
    });
  };
});
