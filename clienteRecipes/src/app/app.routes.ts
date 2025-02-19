import { Routes } from '@angular/router';
import { FlagsComponent } from './countries/components/flags/flags.component';
import { RecipesByCountryPageComponent } from './countries/pages/recipes-by-country-page/recipes-by-country-page.component';
import { RecipesByIngredientsPageComponent } from './ingredients/pages/recipes-by-ingredients-page/recipes-by-ingredients-page.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./welcome/pages/welcome-page/welcome-page.component')
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/pages/countries-page/countries-page.component'),

  },

  {
    path:'countries/:countryName',
    component: RecipesByCountryPageComponent,
  },
  {
    path:'ingredients/:ingredientName',
    component: RecipesByIngredientsPageComponent,
  },

  {
    path:'ingredients',
    loadComponent: () => import('./ingredients/pages/ingredients-page/ingredients-page.component'),
  },

  {
    path:'ingredients/:ingredient',
    component: RecipesByIngredientsPageComponent,
  },


  {
    path: '**',
    redirectTo: 'home',
  }
  
];
