import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/user/login/login.component';
import { ListComponent } from './component/user/list/list.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { Page404Component } from './component/user/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent},
  { path: 'user/list', component: ListComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/save', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent},

  { path: '**', component: Page404Component}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
