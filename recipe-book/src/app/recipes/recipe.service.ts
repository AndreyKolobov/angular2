import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://toriavey.com/images/2011/02/IMG_1544.jpg', [
    new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
