import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { RouterLink } from '@angular/router';
import { RecipeDetailsService } from '../../services/recipe-details.service';

@Component({
  selector: 'app-search-component',
  imports: [RouterLink],
  providers: [RecipeDetailsService],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  @Input() public nameMeal!: string;

  meals: Meal[] = [];

  constructor(private recipesDetails: RecipeDetailsService, private cdr: ChangeDetectorRef){
  }

  ngOnInit(){

    this.recipesDetails.obtenerDetallesReceta(this.nameMeal).subscribe(respuesta =>{
      const data = respuesta as [];
      this.meals = data;
      console.log(this.meals)
      this.cdr.detectChanges();
    } )
  }
  
}
