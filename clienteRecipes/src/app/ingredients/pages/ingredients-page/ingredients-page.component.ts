import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridComponent } from '../../components/grid/grid.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

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
