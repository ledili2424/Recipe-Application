import { async } from "regenerator-runtime";
export const state = {
  recipe: {},
};

//change state object
export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);

  // create a recipe object for later use
  const { recipe } = data.data;
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
  console.log(state.recipe);
};
