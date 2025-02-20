import { ChangeDetectorRef,Component, inject, OnInit } from '@angular/core';
import { WelcomeServicesService } from '../../services/welcome-services.service';
import { Meal } from '../../../shared/interfaces/meal';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-popular-meal',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './popular-meal.component.html',
  styleUrl: './style-popular-meal.css',
})
export class PopularMealComponent implements OnInit{
  meal: Meal| null = null;
  private apiService = inject(WelcomeServicesService);

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
      this.apiService.getRandomMeal().subscribe(response =>{
        this.meal = response?.meals[0] ?? null;
        console.log('Api response: ', response);
        this.cdr.detectChanges();
      });
  }
 }
