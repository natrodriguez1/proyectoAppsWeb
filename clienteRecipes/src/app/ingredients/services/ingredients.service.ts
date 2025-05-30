import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private cachedIngredients: any = null;

  constructor(private http: HttpClient) {
    
  }
  obtenerIngredientes(){
    if (this.cachedIngredients != null) {
      return of(this.cachedIngredients); 
    } else {
      return this.http.get("http://localhost:3000/rest/ingredients/all").pipe(
        tap(data => this.cachedIngredients = data) 
      );
    }
  }
}
