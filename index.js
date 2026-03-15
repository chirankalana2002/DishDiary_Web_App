// Get search input, button, and recipe cards
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const cards = document.querySelectorAll(".card");

// Function to filter recipes
function searchRecipes() {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Search when button clicked
searchButton.addEventListener("click", searchRecipes);

// Search while typing
searchInput.addEventListener("keyup", searchRecipes);