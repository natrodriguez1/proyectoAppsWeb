import { Routes } from '@angular/router';
import { FlagsComponent } from './countries/components/flags/flags.component';
import { RecipesByCountryPageComponent } from './countries/pages/recipes-by-country-page/recipes-by-country-page.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./welcome/pages/welcome-page/welcome-page.component')
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/pages/countries-page/countries-page.component'),

    /*children:[
      {
        path:'/:countryName',
        component: RecipesByCountryPageComponent,
      }
    ]*/
  },

  {
    path:'countries/:countryName',
    component: RecipesByCountryPageComponent,
  },

  {
    path: '**',
    redirectTo: 'home',
  }
  
];
