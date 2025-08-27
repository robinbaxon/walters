import getAdjectives from "./getAdjectives.jsx";
import getIngredients from "./getIngredients.jsx";
import getAromas from "./getAromas.jsx";
export default function getNewRecipe() {
    const adjectives = getAdjectives();
    const ingredients = getIngredients();
    const aroma = getAromas();
    const recipeNo = Math.floor((Math.random() * 156) + 1);
    const adjNo = Math.floor((Math.random() * adjectives.length - 1) + 1);
    const ingrediensNo = Math.floor((Math.random() * ingredients.length - 1) + 1);
    const aromaNo = Math.floor((Math.random() * aroma.length - 1) + 1);
    return "Walters No." + recipeNo + ": Freia Melkesjokolade med " + adjectives[adjNo] + " " + ingredients[ingrediensNo] + " og " + aroma[aromaNo];
}
