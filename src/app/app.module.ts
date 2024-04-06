import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomePageComponent } from './pages/contant/home-page/home-page.component';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { LogInComponent } from './pages/contant/log-in/log-in.component';
import { SingUpComponent } from './pages/contant/sing-up/sing-up.component';
import { CarListComponent } from './pages/contant/car-list/car-list.component';
import { CarDetailsComponent } from './pages/contant/car-details/car-details.component';
import { ReservationComponent } from './pages/contant/reservation/reservation.component';
import { ServecesComponent } from './pages/contant/serveces/serveces.component';
import { AboutComponent } from './pages/contant/about/about.component';
import { ContactComponent } from './pages/contant/contact/contact.component';
import { AddCarComponent } from './pages/contant/add-car/add-car.component';
import { HearoComponent } from './pages/contant/hearo/hearo.component';
import { NotFoundComponent } from './pages/contant/not-found/not-found.component';

const Router:Routes=[
  {path:'',component:HomePageComponent},
  {path:'Home',component:HomePageComponent},
  {path:'Home/about',component:AboutComponent},
  {path:'Home/serveces',component:ServecesComponent},
  {path:'Home/contact',component:ContactComponent},
  {path:'Log In',component:LogInComponent},
  {path:'Sing Up',component:SingUpComponent},
  {path:'Cars List',component:CarListComponent},
  { path: 'car-details/:id', component: CarDetailsComponent },
  {path:'Add car',component:AddCarComponent},
  { path: 'reservation', component: ReservationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LogInComponent,
    SingUpComponent,
    CarListComponent,
    CarDetailsComponent,
    ReservationComponent,
    ServecesComponent,
    AboutComponent,
    ContactComponent,
    AddCarComponent,
    HearoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
