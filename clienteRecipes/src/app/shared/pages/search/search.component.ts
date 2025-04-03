import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchComponentComponent } from "../../components/search-component/search-component.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [NavbarComponent, FooterComponent, SearchComponentComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  mealName: string = '';

  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.mealName = params.get('mealName') || '';
      console.log("meal: " + this.mealName);
    });
  }


}
