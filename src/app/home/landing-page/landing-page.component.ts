import { Component, Input } from '@angular/core';
import { ISlide } from 'src/app/interfaces/page-slider.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @Input() public slide!: ISlide;
}
