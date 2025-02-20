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
      this.instructions = this.recipe.strInstructions.split(".");
      this.cdr.detectChanges();
    });
  }

}
