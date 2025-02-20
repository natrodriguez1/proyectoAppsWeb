import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-buttons.component.html',
  styleUrl: './style-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonsComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
