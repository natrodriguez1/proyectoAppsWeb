import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './style-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
