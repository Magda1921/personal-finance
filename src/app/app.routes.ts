import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import { PATHS } from '../constants/paths';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: PATHS.LOGIN, component: LoginPage },
  { path: PATHS.DASHBOARD, component: Dashboard },
  { path: '**', component: PageNotFoundComponent },
];
