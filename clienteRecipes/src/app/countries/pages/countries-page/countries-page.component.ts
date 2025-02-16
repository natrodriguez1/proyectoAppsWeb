import {ChangeDetectionStrategy, Component } from '@angular/core';
import { FlagsComponent } from '../../components/flags/flags.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-countries-page',
  imports: [FlagsComponent, NavbarComponent],
  standalone: true,
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountriesPageComponent {
  
}
