export interface Ingredients {
    idIngredient: string;
    name: string;
    img_url: string;
    recipe_ingredients?: {
        measure: string;
      };
}
