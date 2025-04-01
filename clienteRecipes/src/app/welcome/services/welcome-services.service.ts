import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../../shared/interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServicesService {

  private apiUrlRandom = 'http://localhost:3000/rest/meals/random';

  constructor(private http: HttpClient) { }

  getRandomMeal(){
    return this.http.get(this.apiUrlRandom);
  }

  getMealByCategory(category: string){
    const apiUrlMealByCategory = `http://localhost:3000/rest/meals/filter?c=${category}`;
    console.log('API URL:', apiUrlMealByCategory);
    return this.http.get(apiUrlMealByCategory);
  }

}
