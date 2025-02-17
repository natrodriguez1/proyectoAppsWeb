import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {

  constructor(private http: HttpClient) { }

  obtenerRecetasPorParametro(strFilter: string, strValue: string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${strFilter}=${strValue}`);
  }
}
