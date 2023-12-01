import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-geography',
  animations: [
    trigger('flag-line-one', [
      state('in',
      style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      state('out',
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('out => in', [animate('1s')])
    ]),
    trigger('flag-line-two', [
      state('in',
      style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      state('out',
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('out => in', [animate('1s')])
    ])
  ],
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css', '../css/typography.css']
})
export class GeographyComponent {
  flagsOne = false;
  flagsTwo = false;
  showFlags(){
    this.flagsOne = true;
    this.flagsTwo = true;
  }

}
