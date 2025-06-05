import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.routes')
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./tournaments/tournaments.routes')
  },
  {
    path: '**',
    redirectTo: 'about-us'
  }
];
