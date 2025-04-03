import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllCategoriesService {

  constructor(private http: HttpClient) { }
  
  obtenerCategorias(){
    return this.http.get('http://localhost:3000/rest/categories/all');
  }
}
