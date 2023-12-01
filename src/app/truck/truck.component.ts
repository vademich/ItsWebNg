import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-truck',
  animations: [
    trigger('truckHover', [
      state('truckStart',
      style({
        backgroundImage: 'url(../../../assets/images/truck.svg)',
        'transform': 'translateX(400px)',
        'opacity': '0',
      })),
      state('truckFinish',
      style({
        backgroundImage: 'url(../../../assets/images/truck.svg)',
        'opacity': 1,
        'transform': 'translateX(-200px)',
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
        'font-family': 'Gilroy',
        'font-size': '48px',
        'font-weight': '600',
        'line-height': '50px',
        'letter-spacing': '0em',
        'text-align': 'left',
        'color': '#CED0E2',
        'display': 'flex',
        'justify-content': 'space-between'
      })),
      state('start',
      style({
        'transform': 'translateX(400px)',
        'opacity': '0',
        'font-family': 'Gilroy',
        'font-size': '48px',
        'font-weight': '600',
        'line-height': '50px',
        'letter-spacing': '0em',
        'text-align': 'left',
        'color': '#CED0E2',
        'display': 'flex',
        'justify-content': 'space-between'
      })),
      transition('start => move-from-right', [animate('1s ease-out')])
    ]),
    trigger('lettersSecond', [
      state('move-from-left',
      style({
        'transform': 'translateX(0px)',
        'opacity': '1',
        'font-family': 'Gilroy',
        'font-size': '48px',
        'font-weight': '600',
        'line-height': '50px',
        'letter-spacing': '0em',
        'text-align': 'left',
        'color': '#CED0E2',
        'display': 'flex',
        'justify-content': 'space-between'
      })),
      state('start',
      style({
        'transform': 'translateX(-400px)',
        'opacity': '0',
        'font-family': 'Gilroy',
        'font-size': '48px',
        'font-weight': '600',
        'line-height': '50px',
        'letter-spacing': '0em',
        'text-align': 'left',
        'color': '#CED0E2',
        'display': 'flex',
        'justify-content': 'space-between'
      })),
      transition('start => move-from-left', [animate('1s ease-out')])
    ])
  ],
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent {
  text = `Все это сопровождает нас в бизнесе в период его становления. Мы почувствовали это на себе, на своем бизнесе, созданном в 2014 году.
  На уровне одного города мы начали объединять различный сервис для грузовых машин и за несколько лет стали крупнейшим агрегатором автомобильного сервиса в Евразии.`
  
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
