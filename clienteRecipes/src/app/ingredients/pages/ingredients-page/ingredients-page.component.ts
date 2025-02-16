import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { GridComponent } from '../../components/grid/grid.component';

@Component({
  selector: 'app-ingredients-page',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, GridComponent],
  templateUrl: './ingredients-page.component.html',
  styleUrl: './ingredients-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export default class IngredientsPageComponent {

}
