import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-recipe-details-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './recipe-details-page.component.html',
  styleUrl: './recipe-details-page.component.css'
})
export class RecipeDetailsPageComponent {

  mealName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.mealName = params.get('mealName') || '';
      console.log("meal: " + this.mealName);
    });
  }

}
