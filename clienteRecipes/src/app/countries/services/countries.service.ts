import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(private http: HttpClient) { }

  obtenerPaises(){
    return this.http.get('http://localhost:3000/rest/countries/all');
  }

  obtenerRecetasPais(strArea: string){
    return this.http.get(`http://localhost:3000/rest/meals/filter?a=${strArea}`);
  }

}
