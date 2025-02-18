import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { AllRecipesService } from '../../services/all-recipes.service';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [],
  providers: [AllRecipesService],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent {

  @Input() public filterType!: string;
  @Input() public filterValue!: string;

  meals: Meal[] = [];

  constructor(private allRecipesService: AllRecipesService, private cdr: ChangeDetectorRef){
  }

  ngOnInit(){

    this.allRecipesService.obtenerRecetasPorParametro(this.filterType, this.filterValue).subscribe(respuesta =>{
      const data = respuesta as any;
      this.meals = data.meals || [];
      this.cdr.detectChanges();
    } )
  }
  

}
