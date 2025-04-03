import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  constructor(private http: HttpClient) { }

  obtenerDetallesReceta(strMeal: string){
    return this.http.get(`http://localhost:3000/rest/meals/search?s=${strMeal}`);
  }
}
