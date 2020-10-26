import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes:Recipe[] =[
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:'https://xtudoreceitas.com/wp-content/uploads/Schnitzel-com-pure-de-maca.jpg',
      ingredients:['Frenc Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:'https://thecozycook.com/wp-content/uploads/2019/08/Bolognese-Sauce.jpg',
      ingredients:['Spagheti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

   // pegar um cópia da classe recipes  
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: String){
    return {
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId;

    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
    })
  }

}
