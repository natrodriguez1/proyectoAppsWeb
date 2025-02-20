import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../../shared/interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServicesService {

  private apiUrlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getRandomMeal(): Observable<{meals: Meal[]}>{
    return this.http.get<{meals: Meal[]}>(this.apiUrlRandom);
  }
  getMealByCategory(category: string): Observable<{meals: Meal[]}>{
    const apiUrlMealByCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    console.log('API URL:', apiUrlMealByCategory);
    return this.http.get<{meals: Meal[]}>(apiUrlMealByCategory);
  }
}
