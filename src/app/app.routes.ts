import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import { PATHS } from '../constants/paths';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

export const routes: Routes = [
  { path: PATHS.LOGIN, component: LoginPage },
  { path: '**', component: PageNotFoundComponent },
];
