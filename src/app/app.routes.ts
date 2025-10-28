import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PATHS } from '../constants/paths';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    pathMatch: 'full',
  },
];
