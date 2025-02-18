import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { WelcomeServicesService } from '../../services/welcome-services.service';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-popular-meal',
  imports: [],
  templateUrl: './popular-meal.component.html',
  styleUrl: './style-popular-meal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularMealComponent implements OnInit{
  meal: Meal| null = null;
  private apiService = inject(WelcomeServicesService);

  ngOnInit(): void {
      this.apiService.getRandomMeal().subscribe(response =>{
        this.meal = response?.meals[0] ?? null;
        console.log('Api response: ', response);
      });
  }
 }
