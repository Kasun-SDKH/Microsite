import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageSliderComponent } from './page-slider/page-slider.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SectionOneComponent } from './pages/section-one/section-one.component';
import { NavBarLogoComponent } from './pages/nav-bar-logo/nav-bar-logo.component';


@NgModule({
  declarations: [
    PageSliderComponent,
    LandingPageComponent,
    SectionOneComponent,
    NavBarLogoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
