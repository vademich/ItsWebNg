import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('menuClick', [
      state('mopen',
      style({
        transform: 'translateY(0px)'
      })),
      state('mclose',
      style({
        transform: 'translateY(-150%)',
      })),
      transition('mclose => mopen', [animate('0.5s ease-in')]),
      transition('mopen => mclose', [animate('0.5s ease-in')]),
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
    ]),

    trigger('truckHover', [
      state('truckStart',
      style({
        backgroundImage: 'url(../../../assets/images/truck.png)',
        'transform': 'translateX(30%)',
        'opacity': '0',
      })),
      state('truckFinish',
      style({
        backgroundImage: 'url(../../../assets/images/truck.png)',
        'opacity': 1,
        'transform': 'translateX(-20%)',
      })),
      transition('truckStart => truckFinish', [animate('1s ease-out')])
    ]),
    trigger('lightHover', [
      state('on',
      style({
        backgroundImage: 'url(../../../assets/images/truck-light.svg)',
        'opacity': 1,
      })),
      state('off',
      style({
        backgroundImage: 'url(../../../assets/images/truck-light.svg)',
        'opacity': 0,
      })),
      transition('on => off', [animate('0.5s')]),
      transition('off => on', [animate('0.5s')])
    ]),
    trigger('lettersFirst', [
      state('move-from-right',
      style({
        'transform': 'translateX(0px)',
        'opacity': '1',
      })),
      state('start',
      style({
        'transform': 'translateX(400px)',
        'opacity': '0',
      })),
      transition('start => move-from-right', [animate('1s ease-out')])
    ]),
    trigger('lettersSecond', [
      state('move-from-left',
      style({
        'transform': 'translateX(0px)',
        'opacity': '1',
      })),
      state('start',
      style({
        'transform': 'translateX(-400px)',
        'opacity': '0',
      })),
      transition('start => move-from-left', [animate('1s ease-out')])
    ]),
    //
    trigger('captionHover', [
      state('invisible',
      style({
        opacity: 0
      })),
      state('visible',
      style({
        opacity: 1
      })),
      transition('invisible => visible', [animate('1s ease-in')]),
    ]),
    trigger('lineHover', [
      state('width0',
      style({
        width: '0px'
      })),
      state('width500',
      style({
        width: '90%'
      })),
      transition('width0 => width500', [animate('1s ease-in')]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../fonts/fonts.css', '../app/header/header.component.css', './truck/truck.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.changeColor();
  }

  // Header
  clicked = false;
  showMenu() {
    this.clicked = !this.clicked;
  }
  main = false;
  our_team = false;
  group = false;
  contacts = false;
  showHeight() {
    // console.log(document.body.scrollTop)
    if (document.body.scrollTop > 700 && document.body.scrollTop < 1350) {
      this.moveLetters()
      this.moveTruck()
      this.captionShow()
      this.lineShow()
    }
    if (document.body.scrollTop < 2410) {
      this.main = true;
    }
    else {
      this.main = false;
    }
    if (document.body.scrollTop > 2410 && document.body.scrollTop < 3270) {
      this.our_team = true;
    }
    else {
      this.our_team = false;
    }
    if (document.body.scrollTop > 3270 && document.body.scrollTop < 4520) {
      this.group = true;
    }
    else {
      this.group = false;
    }
    if (document.body.scrollTop > 4520) {
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

  // TRUCK

  isCaptionHover = false;
  captionShow(){
    this.isCaptionHover = true;
  }
  isLineHover = false;
  lineShow(){
    this.isLineHover = true;
  }

  text = `Мы - команда предпринимателей - создали компании каждый по своему направлению. 
  Мы получили в найме огромный опыт и решили идти дальше, идти выше. 
  Задача нашей команды - сделать жизнь водителя в дороге более комфортной и безопасной.`
  
  isTruckHover = false;
  moveTruck(){
    this.isTruckHover = true;
  }
  isLightHover = false;
  lightOnOff(){
    this.isLightHover = !this.isLightHover;
  }
  lettersHover = false;
  moveLetters(){
    this.lettersHover = true;
  }

}

