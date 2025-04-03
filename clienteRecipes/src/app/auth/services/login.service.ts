import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject = new BehaviorSubject<{ id: number, username: string } | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private loginUrl = 'http://localhost:3000/users/login';

  constructor(private http: HttpClient) { }

  login(userData : any){
    this.currentUserSubject.next(userData);
    return this.http.post(this.loginUrl, userData);
  }

  getCurrentUserId(): number | null {
    return this.currentUserSubject.value ? this.currentUserSubject.value.id : null;
  }
}
