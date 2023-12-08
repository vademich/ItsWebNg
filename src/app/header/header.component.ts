import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('menuClick', [
      state('menu-open',
      style({
        height: '812px',
        display: 'flex',
        'flex-direction': 'column',
        opacity: 1,
      })),
      state('menu-close',
      style({
        height: '56px'
      })),
      transition('menu-close => menu-open', [animate('0.5s ease-in')]),
      transition('menu-open => menu-close', [animate('0.5s ease-in')]),
      state('menu',
      style({
        'background-image': 'url(../../assets/images/menu.svg)'
      })),
      state('cross',
      style({
        'background-image': 'url(../../assets/images/cross.svg)'
      })),
      transition('menu => cross', [animate('0.1s ease-in')]),
      transition('cross => menu', [animate('0.1s ease-in')])
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  clicked = false;
  showMenu() {
    this.clicked = !this.clicked;
  }
}
