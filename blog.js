const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-input ion-icon");
const recipeListItems = document.querySelectorAll(".recipe-list li");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const searchRegex = new RegExp(
    searchTerm.replace(/\s+/g, "").split("").join(".*")
  );

  let matchCount = 0; // Track the number of matching results

  recipeListItems.forEach(function (item) {
    const recipeLink = item.querySelector("a");
    const recipeTitle = recipeLink.textContent.toLowerCase();

    if (recipeTitle.match(searchRegex)) {
      item.style.display = "flex";
      item.style.margin = "0";
      matchCount++; // Increment the match count
    } else {
      // Hide the recipe item
      item.style.display = "none";
    }
  });

  if (searchTerm.length > 0) {
    searchIcon.style.display = "none";
  } else {
    searchIcon.style.display = "block";
  }

  // Adjust styles if there is only one matching result
  if (matchCount === 1) {
    const singleResultItem = document.querySelector(
      ".recipe-list li:not([style*='display: none'])"
    );
    const singleResultImage = singleResultItem.querySelector("img");
    const singleResultLink = singleResultItem.querySelector("a");

    singleResultImage.style.height = "14.5rem";
    singleResultImage.style.width = "14.5rem";
    singleResultLink.style.fontSize = "6rem";
    singleResultLink.style.padding = "4rem";
  }
});

/*====================== */

window.addEventListener("scroll", function () {
  let scrollTopBtn = document.querySelector(".scroll");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 20, behavior: "smooth" });
}

// JavaScript
const backIcon = document.querySelector(".back");

backIcon.addEventListener("click", () => {
  window.location.href = "index.html";
});
