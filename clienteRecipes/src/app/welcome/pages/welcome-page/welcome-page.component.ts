import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePageComponent {

 }
