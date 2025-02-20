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
    
    /*if (this.filterType == "countries") {
      this.countriesService.obtenerRecetasPais(this.filterValue).subscribe(respuesta => {
        const data = respuesta as any;
        this.meals = data.meals || [];
        console.log("filter type: " + this.filterType);
        console.log("filter value: " + this.filterValue);
        this.cdr.detectChanges();
        
      })
    }else if(this.filterType == "ingredients"){

    }*/
  

}
