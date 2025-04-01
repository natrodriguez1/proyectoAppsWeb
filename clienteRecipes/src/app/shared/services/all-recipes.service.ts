import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {

  constructor(private http: HttpClient) { }

  obtenerRecetasPorParametro(strFilter: string, strValue: string){
    return this.http.get(`http://localhost:3000/rest/meals/filter?${strFilter}=${strValue}`);
  }
}
