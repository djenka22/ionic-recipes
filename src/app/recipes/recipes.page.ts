import {Component, OnInit} from '@angular/core';
import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel, RouterLink]
})
export class RecipesPage implements OnInit {

    recipes!: Recipe[];

    constructor(private recipeService: RecipesService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.recipes = this.recipeService.getAllRecipes();
    }

}
