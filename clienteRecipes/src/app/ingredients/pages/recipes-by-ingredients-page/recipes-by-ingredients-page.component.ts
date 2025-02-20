import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AllRecipesComponent } from '../../../shared/components/all-recipes/all-recipes.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-by-ingredients-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AllRecipesComponent],
  templateUrl: './recipes-by-ingredients-page.component.html',
  styleUrl: './recipes-by-ingredients-page.component.css'
})
export class RecipesByIngredientsPageComponent {
  ingredientName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ingredientName = params.get('ingredientName') || '';
    });
  }
}
