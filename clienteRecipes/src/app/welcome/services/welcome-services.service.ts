import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../../shared/interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServicesService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  private apiUrlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<{meals: Meal[]}>{
    return this.http.get<{meals: Meal[]}>(this.apiUrl);
  }
  getRandomMeal(): Observable<{meals: Meal[]}>{
    return this.http.get<{meals: Meal[]}>(this.apiUrlRandom);
  }

}
