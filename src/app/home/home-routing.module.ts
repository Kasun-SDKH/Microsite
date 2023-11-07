import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSliderComponent } from './page-slider/page-slider.component';

const routes: Routes = [
  {
    path: '',
    component: PageSliderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
