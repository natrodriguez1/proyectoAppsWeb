import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllRecipesComponent } from '../../../shared/components/all-recipes/all-recipes.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-recipes-by-ingredients-page',
  standalone: true,
  imports: [AllRecipesComponent, NavbarComponent, FooterComponent],
  templateUrl: './recipes-by-ingredients-page.component.html',
  styleUrl: './recipes-by-ingredients-page.component.css'
})
export class RecipesByIngredientsPageComponent {
  ingredient: string = '';

  constructor(private route: ActivatedRoute) {
      this.route.paramMap.subscribe(params => {
        this.ingredient = params.get('ingredient') || '';
      });
    }
}
