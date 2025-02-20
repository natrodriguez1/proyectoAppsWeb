import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(private http: HttpClient) { }

  obtenerPaises(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }

  obtenerRecetasPais(strArea: string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`);
  }

}
