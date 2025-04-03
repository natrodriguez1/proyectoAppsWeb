import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterRecipeService } from '../../services/register-recipe.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';
import { CountriesService } from '../../../countries/services/countries.service';
import { Countries } from '../../../countries/interfaces/countries';
import { AllCategoriesService } from '../../services/all-categories.service';
import { Categories } from '../../../shared/interfaces/category';
import { Router } from '@angular/router';

export interface IngredientInput {
  name: string;
  quantity: number;
  unit: string;
  measure?: string; // se calculará combinando quantity y unit
}


@Component({
  selector: 'app-recipe-form',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  providers: [RegisterRecipeService, LoginService, AllCategoriesService],
  templateUrl: './recipe-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class RecipeFormComponent { 
  // Para los ingredientes, mantenemos un array que se actualizará dinámicamente.
  ingredients: { name: string; measure: string }[] = [];

  ingredient: IngredientInput = {name:'',quantity:0.01, unit: ''};

  countries: Countries[] = [];
  categories: Categories[] = [];

  constructor(
    private recipeService: RegisterRecipeService, 
    private loginService: LoginService, 
    private countriesService: CountriesService,
    private allCategoriesService: AllCategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.obtenerPaises().subscribe(respuesta => {
      this.countries = respuesta as [];
    });

    this.allCategoriesService.obtenerCategorias().subscribe(respuesta => {
      this.categories = respuesta as [];
    });
  }

  addIngredient(): void {

    if (this.ingredient.name && this.ingredient.quantity && this.ingredient.unit) {
      const measure = `${this.ingredient.quantity} ${this.ingredient.unit}`;
      this.ingredients.push({
        name: this.ingredient.name,
        measure: measure
      });

      this.ingredient = { name: '', quantity: 0.01, unit: '' };
    }
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  onSubmit(recipeForm: any): void {
    console.log("Estado del formulario:", recipeForm);
    if (recipeForm.invalid) {
      console.log("Form inválido", recipeForm.controls);
      return;
    }

    const formValues = recipeForm.value;

    /*const userId = this.loginService.getCurrentUserId();
    if (!userId) {
      console.error('No user logged in');
      return;
    }*/
    const recipeData = {
      name: formValues.recipeName,
      area: formValues.recipeArea, 
      category: formValues.recipeCategory, 
      thumbnail_url: formValues.thumbnailUrl,
      youtube_url: formValues.youtubeUrl,
      tags: formValues.recipeTags,
      instructions: formValues.instructions,
      ingredients: this.ingredients,
      user: 5 
    };
    //console.log(userId);

    console.log("datos a enviar ", recipeData);

    this.recipeService.registerRecipe(recipeData).subscribe({
      next: response => {
        console.log('Recipe created successfully:', response);
        recipeForm.resetForm();
        this.router.navigateByUrl(`/recipes/${recipeData.name}`);
      },
      error: error => {
        console.error('Error creating recipe:', error);
      }
    });
  }
}
