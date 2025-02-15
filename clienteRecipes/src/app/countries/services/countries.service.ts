import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private cachedCountries: any = null;

  constructor(private http: HttpClient) { }

  /*obtenerPaises(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }*/

  obtenerPaises(){
    if (this.cachedCountries != null) {
      return of(this.cachedCountries); 
    } else {
      return this.http.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list").pipe(
        tap(data => this.cachedCountries = data) 
      );
    }
  }

}
