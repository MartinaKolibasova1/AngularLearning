import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles' +
          '%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=1600&q=70',
            [new Ingredient('meat', 1), new Ingredient('French fries', 20)],
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-' +
                'grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
            [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
        ),
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // return a copy of array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}
