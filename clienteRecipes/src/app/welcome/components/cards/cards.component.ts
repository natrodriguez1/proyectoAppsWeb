import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './style-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent { }
