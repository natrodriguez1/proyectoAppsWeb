import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './style-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
