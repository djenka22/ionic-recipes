import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {trashOutline} from "ionicons/icons";

import {
  AlertController,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonGrid, IonRow, IonCol, IonImg, IonList, IonBackButton, IonButtons, IonIcon]
})
export class RecipeDetailPage implements OnInit {

  recipe!: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router,
              private alertController: AlertController) {
    addIcons({trashOutline});
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {

      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
      }

      const recipeId = paramMap.get('recipeId');

      if (!recipeId) {
        this.router.navigate(['/recipes']);
      } else {
        this.recipe = this.recipeService.getRecipe(recipeId)
      }
    })
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteRecipe()
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  private deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
