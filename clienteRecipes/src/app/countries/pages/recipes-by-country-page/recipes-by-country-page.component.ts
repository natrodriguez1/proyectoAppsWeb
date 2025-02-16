import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-recipes-by-country-page',
  standalone: true,
  imports: [NavbarComponent],
  //template: '<h1>País seleccionado: {{countryName}}</h1>',
  templateUrl: './recipes-by-country-page.component.html',
  styleUrl: './recipes-by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesByCountryPageComponent {
  countryName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName') || '';
    });
  }
}
