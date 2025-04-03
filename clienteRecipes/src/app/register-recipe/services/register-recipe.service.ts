import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterRecipeService {
  private registerRecipeUrl = 'http://localhost:3000/rest/meals/save';

  constructor(private http: HttpClient) { }

  registerRecipe(userData: any){
    return this.http.post(this.registerRecipeUrl, userData);
  }
}
