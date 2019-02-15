class Recipe {
  constructor(ingredient) {
    this.appID = "4ef0290d";
    this.appKey = "e6718c52e2f326a351df3b6025acac3a";
    this.ingredient = ingredient;
  }

  // Fetch recipes from API
  async getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.ingredient}&app_id=${
        this.appID
      }&app_key=${this.appKey}`
    );

    const responseData = await response.json();
    return responseData;
  }
}

document.getElementById("search-button").addEventListener("click", e => {
  // Get ingredient
  const ingredient = document.getElementById("search-recipe").value;

  // Init recipe object
  const recipe = new Recipe(ingredient);

  // Init UI
  const ui = new UI();

  recipe
    .getRecipes()
    .then(data => {
      console.log(data.hits);
      ui.showRecipes(data.hits);
    })
    .catch(err => console.log(err));
  e.preventDefault();
});
