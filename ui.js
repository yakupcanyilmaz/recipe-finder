class UI {
  constructor() {
    this.recipeList = document.getElementById("recipe-list");
  }

  showRecipes(recipes) {
    let output = "";
    recipes.forEach(function(recipe) {
      output += `
      <div
      class="card border-secondary d-flex flex-column align-items-center p-2 mb-4"
      style="width:210px;">
      
      <img
        class="rounded"
        src="${recipe.recipe.image}"
        alt="${recipe.recipe.label}"
        style="width:200px;"
      />

      <h6 class="my-2 text-center" style="height:3.5rem;">${
        recipe.recipe.label
      }</h6>

      <a href="${
        recipe.recipe.url
      }" target="_blank" class="btn btn-secondary btn-block">See Recipe</a>

      </div>`;
    });
    this.recipeList.innerHTML = output;
  }
}
