import { ChangeDetectorRef, Component } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../interfaces/ingredients';

@Component({
  selector: 'app-grid',
  imports: [],
  providers: [IngredientsService],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  ingredients: Ingredients[] = [];

  constructor(
    private ingredientsService: IngredientsService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.ingredientsService.obtenerIngredientes().subscribe(respuesta => {
      const data = respuesta as any;
      this.ingredients = data.meals || [];
      this.cdr.detectChanges();
    });
  }
}
