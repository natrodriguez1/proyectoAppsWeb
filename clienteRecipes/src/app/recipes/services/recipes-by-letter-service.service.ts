import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesByLetterServiceService {

  constructor(private http: HttpClient) { }

  obtenerRecetasPorLetra(letra : string){
    return this.http.get(`http://localhost:3000/rest/meals/search?f=${letra}`)
  }
}
