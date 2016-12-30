import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://www.bbcgoodfood.com/sites/default/files/styles/carousel_small/public/recipe/recipe-image/2016/03/chicken-schnitzel-strips-with-tomato-spaghetti.jpg?itok=3r23piTE', [
    new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
  ];

  constructor() { }
  
  getRecipes(){
    return this.recipes;
  }

}
