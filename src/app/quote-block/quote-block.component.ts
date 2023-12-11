import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-quote-block',
  animations: [
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
        width: '500px'
      })),
      transition('width0 => width500', [animate('1s ease-in')]),
    ]),
  ],
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.css']
})
export class QuoteBlockComponent {
  @Input() text = '';

  isCaptionHover = false;
  captionShow(){
    this.isCaptionHover = true;
  }
  isLineHover = false;
  lineShow(){
    this.isLineHover = true;
  }
}
