import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesByLetterServiceService {

  constructor(private http: HttpClient) { }

  obtenerRecetasPorLetra(letra : string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
  }
}
