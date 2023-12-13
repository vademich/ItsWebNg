import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-our-team',
  animations: [
    trigger('slide-empl', [
      state('slide',
      style({
        opacity: 1,
        transform: 'translateX(0px)',
      })),
      state('out',
      style({
        opacity: 0,
        transform: 'translate(-600px)'
      })),
      transition('out => slide', [animate('1s ease-in-out')]),
    ]),
    trigger('arrow-r', [
      state('hide',
      style({
        opacity: 0,
        transform: 'translateX(-30px)'
      })),
      state('show',
      style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      transition('hide => show',[animate('0.5s ease-out')]),
      transition('show => hide',[animate('0.5s ease-in')])
    ]),
    trigger('arrow-l', [
      state('hide',
      style({
        opacity: 0,
        transform: 'translateX(30px)'
      })),
      state('show',
      style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      transition('hide => show',[animate('0.5s ease-out')]),
      transition('show => hide',[animate('0.5s ease-in')])
    ]),
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
    trigger('trigger-move-right', [
      state('move-0',
      style({
        transform: 'translateX(0px)'
      })),
      state('move-1',
      style({
        transform: 'translateX(-327px)'
      })),
      state('move-2',
      style({
        transform: 'translateX(-654px)'
      })),
      state('move-3',
      style({
        transform: 'translateX(-981px)'
      })),
      transition('move-1 => move-0', [animate('0.5s linear')]),
      transition('move-2 => move-1', [animate('0.5s linear')]),
      transition('move-3 => move-2', [animate('0.5s linear')]),
    ]),
  ],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css', '../css/typography.css']
})
export class OurTeamComponent {
  count_arrow_clicks = 0;
  stripeMoveRight() {
    if (this.count_arrow_clicks > 0) {
      this.count_arrow_clicks--;
    }
    // console.log(this.count_arrow_clicks);
  }
  stripeMoveLeft() {
    if (this.count_arrow_clicks < 3) {
      this.count_arrow_clicks++;
    } else {
      this.count_arrow_clicks = 0;
    }
    // console.log(this.count_arrow_clicks);
  }


  isCaptionHover = false;
  captionShow(){
    this.isCaptionHover = true;
  }
  isLineHover = false;
  lineShow(){
    this.isLineHover = true;
  }
  text = `Сегодня люди - это самый важный и ценный ресурс. И с каждым днём их ценность будет расти всё больше и больше. Мы - команда предпринимателей нашей страны 🇷🇺 - покоряем новые рынки 🌎.
  `;
  
  image1 = '../assets/images/people/gerbert.png';
  employeeName1 = 'Герберт Ромберг';
  employeeJob1 = 'Основатель компании';

  employeeName2 = 'Дмитрий Рыков';
  employeeJob2 = 'Руководитель IT отдела';

  employeeName3 = 'Вадим Гончаров';
  employeeJob3 = 'Frontend developer';
  image3 = '../assets/images/people/vadim.jpeg';

  arrowsShown = false;
  showArrows(){
    this.arrowsShown = !this.arrowsShown;
  }
  employeesShown = false;
  showEmployees(){
    this.employeesShown = true;
  }
}
