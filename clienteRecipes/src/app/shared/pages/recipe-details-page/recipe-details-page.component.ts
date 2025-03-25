import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecipeDetailsService } from '../../services/recipe-details.service';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-recipe-details-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  providers: [RecipeDetailsService],
  templateUrl: './recipe-details-page.component.html',
  styleUrl: './recipe-details-page.component.css'
})
export class RecipeDetailsPageComponent {

  mealName: string = '';
  recipe!: Meal;
  instructions: string[] = [];
  ingredients: string[] = [];
  measurments: string[] = [];

  constructor(private detailService: RecipeDetailsService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.route.paramMap.subscribe(params => {
      this.mealName = params.get('mealName') || '';
      console.log("meal: " + this.mealName);
    });
  }
  ngOnInit(): void {
    this.detailService.obtenerDetallesReceta(this.mealName).subscribe(respuesta => {
      const data = respuesta as any;
      this.recipe = data.meals[0] || data.meals[0][0];
      this.instructions = this.recipe.strInstructions.split("\r");

      this.ingredients.push(this.recipe.strIngredient1);
      this.ingredients.push(this.recipe.strIngredient2); 
      this.ingredients.push(this.recipe.strIngredient3);
      this.ingredients.push(this.recipe.strIngredient4);
      this.ingredients.push(this.recipe.strIngredient5);
      this.ingredients.push(this.recipe.strIngredient6);
      this.ingredients.push(this.recipe.strIngredient7);
      this.ingredients.push(this.recipe.strIngredient8);
      this.ingredients.push(this.recipe.strIngredient9);
      this.ingredients.push(this.recipe.strIngredient10);
      this.ingredients.push(this.recipe.strIngredient11);
      this.ingredients.push(this.recipe.strIngredient12);
      this.ingredients.push(this.recipe.strIngredient13);
      this.ingredients.push(this.recipe.strIngredient14);
      this.ingredients.push(this.recipe.strIngredient15);
      this.ingredients.push(this.recipe.strIngredient16);
      this.ingredients.push(this.recipe.strIngredient17);
      this.ingredients.push(this.recipe.strIngredient18);
      this.ingredients.push(this.recipe.strIngredient19);
      this.ingredients.push(this.recipe.strIngredient20);

      this.measurments.push(this.recipe.strMeasure1);
      this.measurments.push(this.recipe.strMeasure2); 
      this.measurments.push(this.recipe.strMeasure3);
      this.measurments.push(this.recipe.strMeasure4);
      this.measurments.push(this.recipe.strMeasure5);
      this.measurments.push(this.recipe.strMeasure6);
      this.measurments.push(this.recipe.strMeasure7);
      this.measurments.push(this.recipe.strMeasure8);
      this.measurments.push(this.recipe.strMeasure9);
      this.measurments.push(this.recipe.strMeasure10);
      this.measurments.push(this.recipe.strMeasure11);
      this.measurments.push(this.recipe.strMeasure12);
      this.measurments.push(this.recipe.strMeasure13);
      this.measurments.push(this.recipe.strMeasure14);
      this.measurments.push(this.recipe.strMeasure15);
      this.measurments.push(this.recipe.strMeasure16);
      this.measurments.push(this.recipe.strMeasure17);
      this.measurments.push(this.recipe.strMeasure18);
      this.measurments.push(this.recipe.strMeasure19);
      this.measurments.push(this.recipe.strMeasure20);
      this.cdr.detectChanges();
    });
  }

}
