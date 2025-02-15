import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./welcome/pages/welcome-page/welcome-page.component')
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/pages/countries-page/countries-page.component')
  },
  {
    path: '**',
    redirectTo: 'home',
  }
  
];
