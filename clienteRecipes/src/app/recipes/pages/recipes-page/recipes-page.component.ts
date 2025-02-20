import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RecipesByLetterComponent } from '../../components/recipes-by-letter/recipes-by-letter.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RecipesByLetterComponent],
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})

export class RecipesPageComponent {

  alphabet : string[] = [];

  constructor(){
  }

  ngOnInit(){
    function getAlphabet(): string[] {

      let alphabet: string[] = [];
    
      for (let i = 65; i <= 90; i++) { // Loop through uppercase ASCII codes

        alphabet.push(String.fromCharCode(i));
    
      }
    
      return alphabet;
    
    }

    this.alphabet = getAlphabet();
  }
  
}
