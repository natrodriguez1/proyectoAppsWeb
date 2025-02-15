import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuButtonsComponent } from "../../components/menu-buttons/menu-buttons.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { NavbarComponent } from "../../../shared/navbar/navbar.component";

@Component({
  selector: 'app-welcome-page',
  imports: [MenuButtonsComponent, CardsComponent, NavbarComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePageComponent {

 }
