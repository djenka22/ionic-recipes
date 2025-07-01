import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: '1',
            title: 'Spaghetti Carbonara',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
            ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Black pepper'],
        },
        {
            id: '2',
            title: 'Chicken Tikka Masala',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
            ingredients: ['Chicken', 'Yogurt', 'Tomato sauce', 'Spices', 'Onion'],
        },
        {
            id: '3',
            title: 'Beef Stroganoff',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%EB%8C%80%ED%86%B5%EB%A0%B9%EC%83%81%EC%97%90_%EB%B9%9B%EB%82%98%EB%8A%94_%ED%96%89%EC%A3%BC%ED%95%9C%EC%9A%B0.jpg/640px-%EB%8C%80%ED%86%B5%EB%A0%B9%EC%83%81%EC%97%90_%EB%B9%9B%EB%82%98%EB%8A%94_%ED%96%89%EC%A3%BC%ED%95%9C%EC%9A%B0.jpg',
            ingredients: ['Beef', 'Mushrooms', 'Onion', 'Sour cream', 'Egg noodles'],
        }
    ];

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string): Recipe  {

      return {...this.recipes.find(recipe => recipe.id === recipeId) as Recipe};
    }

    constructor() {
    }

    deleteRecipe(id: string) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    }
}
