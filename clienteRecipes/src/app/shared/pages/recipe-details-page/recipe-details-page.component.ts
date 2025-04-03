import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecipeDetailsService } from '../../services/recipe-details.service';
import { Meal } from '../../interfaces/meal';
import { Ingredients } from '../../../ingredients/interfaces/ingredients';

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
  meals: Meal[] = [];
  meal: any;
  instructions: string[] = [];
  ingredients: Ingredients[] = [];

  constructor(private detailService: RecipeDetailsService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.route.paramMap.subscribe(params => {
      this.mealName = params.get('mealName') || '';
      console.log("meal: " + this.mealName);
    });
  }
  ngOnInit(): void {
    this.detailService.obtenerDetallesReceta(this.mealName).subscribe(respuesta => {
      const data = respuesta as [];
      this.meals = data || [];
      if (this.meals.length > 0) {
        // Usamos el primer elemento del array
        this.meal = this.meals[0];
        // Ajusta el delimitador: si el string utiliza "\r\n", usa ese; si es solo "\r", cámbialo.
        this.instructions = this.meal.instructions.split("\r\n")
          .map((line: string) => line.trim())
          .filter((line: string) => line.length > 0);

        this.ingredients = this.meal.ingredients as [];
        console.log("medida ingrediente 1 " + this.ingredients[0].recipe_ingredients?.measure);
      }
      this.cdr.detectChanges();
    });
  }

}
