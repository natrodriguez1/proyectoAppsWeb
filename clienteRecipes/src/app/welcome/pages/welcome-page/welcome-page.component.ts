import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuButtonsComponent } from "../../components/menu-buttons/menu-buttons.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { PopularMealComponent } from "../../components/popular-meal/popular-meal.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MenuButtonsComponent, CardsComponent, NavbarComponent, PopularMealComponent, FooterComponent, CommonModule, CarouselComponent, ReactiveFormsModule],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePageComponent {

  searchForm: FormGroup;
  selectedCategory: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder,){
    this.searchForm = this.formBuilder.group({
      searchRecipe: ['', [Validators.required]]
    });
  }

  onCategorySelected(category: string){
    this.selectedCategory = category;
  }
  updateCategory(category: string){
    this.selectedCategory = category;
  }

  onSubmit(){
    if (this.searchForm.invalid) {
      return;
    }
<<<<<<< HEAD
    
    this.router.navigateByUrl(`/search/${this.searchForm}`);
=======

    this.router.navigateByUrl(`/search/${this.searchForm.value}`);
>>>>>>> origin/Juan-Diego
  }
 }
