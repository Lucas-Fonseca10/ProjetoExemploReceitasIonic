import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  //essa variavel serve para abri no template
  loadedRecipe: Recipe;

  //1° classe, é uma classe padrão, para pegar valor da rota
  constructor(
    private activateRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) {}

  ngOnInit() {
      //está pegando o valor da url que foi colocado para recipeId
      this.activateRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('recipeId')){
          this.router.navigate(['/recipes']);
          return;
        }
          const recipeId = paramMap.get('recipeId');
          this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      });
  }

  onDeleteRecipe() {
    this.alertCtrl
    .create({
      header: 'Are you sure?',
      message:'You really want to delete the recipe?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text: 'Delete',
        handler: ()=>{
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }
    ]
  })
    .then(alertEl => {
        alertEl.present();
    });
  }
   
}
