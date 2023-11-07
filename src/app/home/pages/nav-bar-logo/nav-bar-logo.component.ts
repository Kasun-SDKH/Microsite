import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-logo',
  templateUrl: './nav-bar-logo.component.html',
  styleUrls: ['./nav-bar-logo.component.scss'],
})
export class NavBarLogoComponent {
  @Input() public pageIndex: number = 0;
}
