import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/user/login/login.component';
import { ListComponent } from './component/user/list/list.component';
import { RegisterComponent } from './component/user/register/register.component';
import { Page404Component } from './component/user/page404/page404.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

//Services
import { DataApiService } from 'src/app/services/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    ListComponent,
    RegisterComponent,
    Page404Component,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
