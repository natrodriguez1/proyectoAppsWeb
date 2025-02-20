import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  constructor(private http: HttpClient) { }

  obtenerDetallesReceta(strMeal: string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`);
  }
}
