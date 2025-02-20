import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Meal } from '../../../shared/interfaces/meal';
import { WelcomeServicesService } from '../../services/welcome-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './style-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  @Input() category: string = '';
  meals: Meal[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private apiService: WelcomeServicesService, private cdr: ChangeDetectorRef){}
  ngOnChanges(): void {
    if (this.category) {
      this.loading = true;
      this.error = null;
      this.meals = [];
      this.loadMealsByCategory(this.category);
    }
  }

  loadMealsByCategory(category: string) {
    this.apiService.getMealByCategory(category).subscribe({
      next: (response) => {
        this.meals = response.meals ?? [];
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading meals:', error);
        this.error = 'Failed to load meals. Please try again.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }


}
