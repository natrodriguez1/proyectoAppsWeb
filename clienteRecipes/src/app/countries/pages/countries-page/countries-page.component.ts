import {ChangeDetectionStrategy, Component } from '@angular/core';
import { FlagsComponent } from '../../components/flags/flags.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-countries-page',
  imports: [FlagsComponent, NavbarComponent, FooterComponent],
  standalone: true,
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountriesPageComponent {
  
}
