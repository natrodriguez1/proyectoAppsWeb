import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { RecipesByLetterServiceService } from '../../services/recipes-by-letter-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Meal } from '../../../shared/interfaces/meal';

@Component({
  selector: 'app-recipes-by-letter',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  providers: [RecipesByLetterServiceService],
  templateUrl: './recipes-by-letter.component.html',
  styleUrl: './recipes-by-letter.component.css'
})
export class RecipesByLetterComponent {

  meals : Meal[] = [];
  letrasConRecetas: string[] = [];

  @Input() public letra!: string;

  constructor(private recipesByLetterService: RecipesByLetterServiceService,private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.recipesByLetterService.obtenerRecetasPorLetra(this.letra).subscribe(respuesta =>{
      const data = respuesta as [];
      this.meals = data || [];
      this.cdr.detectChanges();
    })
  }

}
