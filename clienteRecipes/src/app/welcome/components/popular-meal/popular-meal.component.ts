import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-popular-meal',
  imports: [],
  templateUrl: './popular-meal.component.html',
  styleUrl: './style-popular-meal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularMealComponent { }
