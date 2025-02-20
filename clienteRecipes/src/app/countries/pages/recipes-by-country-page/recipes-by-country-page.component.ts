import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AllRecipesComponent } from '../../../shared/components/all-recipes/all-recipes.component';

@Component({
  selector: 'app-recipes-by-country-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AllRecipesComponent],
  templateUrl: './recipes-by-country-page.component.html',
  styleUrl: './recipes-by-country-page.component.css',
})
export class RecipesByCountryPageComponent {
  countryName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName') || '';
    });
  }
}
