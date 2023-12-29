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
    trigger('photo', [
      state('hide',
      style({
        opacity: 0,
      })),
      state('show',
      style({
        opacity: 1,
      })),
      transition('hide => show',[animate('0.5s')]),
      transition('show => hide',[animate('0.5s')])
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
    trigger('captionHoverOurTeam', [
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
    trigger('lineHoverOurTeam', [
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
      state('state-0',
      style({
        transform: 'translateX(0px)'
      })),
      state('state-1',
      style({
        transform: 'translateX(-327px)'
      })),
      state('state-2',
      style({
        transform: 'translateX(-654px)'
      })),
      state('state-3',
      style({
        transform: 'translateX(-981px)'
      })),
      transition('state-1 => state-0', [animate('0.5s ease-in-out')]),
      transition('state-0 => state-1', [animate('0.5s ease-in-out')]),
      transition('state-2 => state-1', [animate('0.5s ease-in-out')]),
      transition('state-1 => state-2', [animate('0.5s ease-in-out')]),
      transition('state-3 => state-2', [animate('0.5s ease-in-out')]),
      transition('state-2 => state-3', [animate('0.5s ease-in-out')]),
      transition('state-3 => state-0', [animate('0.5s ease-in-out')]),
      transition('state-0 => state-3', [animate('0.5s ease-in-out')]),
    ]),
  ],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css', '../css/typography.css']
})
export class OurTeamComponent {
  move = false;
  moveR() {
    this.move = !this.move;
  }
  moveL() {
    this.move = !this.move;
  }
  isCaptionHoverOurTeam = false;
  captionShowOurTeam(){
    this.isCaptionHoverOurTeam = true;
  }
  isLineHoverOurTeam = false;
  lineShowOurTeam(){
    this.isLineHoverOurTeam = true;
  }
  textOurTeam = `Сегодня люди - это самый важный и ценный ресурс. И с каждым днём их ценность будет расти всё больше и больше. Мы - команда предпринимателей нашей страны 🇷🇺 - покоряем новые рынки 🌎.
  `;
  images = ['../assets/images/people/01.jpg', '../assets/images/people/02.jpg', '../assets/images/people/03.jpg', '../assets/images/people/04.jpg', '../assets/images/people/05.jpg',];
  employeeNames = ['Герберт Ромберг', 'Виктория Дементьевская', 'Оксана Костяева', 'Грануш Хачатрян', 'Денис Задорожный'];
  employeeJobs = ['Основатель компании ITS Group, консалтинг',
    'Руководитель Международного направления', 
    'Директор IT-компании, аккредитованной минцифрой',
    'Генеральный директор, агрегатор автомобильного сервиса',
    'Генеральный директор, сеть придорожных сервисов в России'];
  arrowsShown = false;
  showArrows(){
    this.arrowsShown = !this.arrowsShown;
  }
  employeesShown = false;
  showEmployees(){
    this.employeesShown = true;
  }
}
