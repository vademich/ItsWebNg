import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
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
    ]),
    trigger('main', [
      state('main', 
      style({
        color: '#002ED0'
      }))
    ]),
    trigger('our-team', [
      state('our-team', 
      style({
        color: '#002ED0'
      }))
    ]),
    trigger('group', [
      state('group', 
      style({
        color: '#002ED0'
      }))
    ]),
    trigger('contacts', [
      state('contacts', 
      style({
        color: '#002ED0'
      }))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../fonts/fonts.css', '../app/header/header.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    this.changeColor();
  }

  // Header
  clicked = false;
  showMenu() {
    this.clicked = !this.clicked;
  }
  main = true;
  our_team = false;
  group = false;
  contacts = false;
  showHeight() {
    if (window.pageYOffset < 2410) {
      this.main = true;
    }
    else {
      this.main = false;
    }
    if (window.pageYOffset > 2410 && window.pageYOffset < 3270) {
      this.our_team = true;
    }
    else {
      this.our_team = false;
    }
    if (window.pageYOffset > 3270 && window.pageYOffset < 4520) {
      this.group = true;
    }
    else {
      this.group = false;
    }
    if (window.pageYOffset > 4520) {
      this.contacts = true;
    }
    else {
      this.contacts = false;
    }
  }


  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changeColor() {
    this.sleep(1000).then(() => this.showHeight());
  }

}

