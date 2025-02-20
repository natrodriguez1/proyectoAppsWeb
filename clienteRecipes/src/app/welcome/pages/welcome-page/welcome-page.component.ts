import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuButtonsComponent } from "../../components/menu-buttons/menu-buttons.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { PopularMealComponent } from "../../components/popular-meal/popular-meal.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../components/carousel/carousel.component";
@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MenuButtonsComponent, CardsComponent, NavbarComponent, PopularMealComponent, FooterComponent, CommonModule, CarouselComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePageComponent {

  selectedCategory: string = '';

  onCategorySelected(category: string){
    this.selectedCategory = category;
  }
  updateCategory(category: string){
    this.selectedCategory = category;
  }
 }
