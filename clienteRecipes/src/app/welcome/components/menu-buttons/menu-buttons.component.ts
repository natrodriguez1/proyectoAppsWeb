import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  standalone: true,
  imports: [],
  templateUrl: './menu-buttons.component.html',
  styleUrl: './style-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonsComponent { }
