import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuButtonsComponent } from "../../components/menu-buttons/menu-buttons.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { PopularMealComponent } from "../../components/popular-meal/popular-meal.component";
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MenuButtonsComponent, CardsComponent, NavbarComponent, PopularMealComponent, FooterComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePageComponent {

 }
