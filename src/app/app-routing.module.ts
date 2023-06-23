import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateGuard } from './guard/check.guard';

import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PrivateClassComponent } from './component/private-class/private-class.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [PrivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'privateclass', component: PrivateClassComponent, canActivate: [PrivateGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
