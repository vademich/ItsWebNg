import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-truck',
  animations: [
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
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent {
  isLightHover = false;
  lightOnOff(){
    this.isLightHover = !this.isLightHover;
  }

  text = `Мы - команда предпринимателей - создали компании каждый по своему направлению. 
  Мы получили в найме огромный опыт и решили идти дальше, идти выше. 
  Задача нашей команды - сделать жизнь водителя в дороге более комфортной и безопасной.`
  
  isTruckHover = false;
  lettersHover = false;
  isCaptionHover = false;
  isLineHover = false;

  moveAll() {
    this.isTruckHover = true;
    this.lettersHover = true;
    this.isCaptionHover = true;
    this.isLineHover = true;
  }
}