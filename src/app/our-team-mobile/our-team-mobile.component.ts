import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-our-team-mobile',
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
    trigger('trigger-move-right', [
      state('state-0',
      style({
        transform: 'translateX(0px)'
      })),
      state('state-1',
      style({
        transform: 'translateX(-427px)'
      })),
      state('state-2',
      style({
        transform: 'translateX(-854px)'
      })),
      state('state-3',
      style({
        transform: 'translateX(-1281px)'
      })),
      state('state-4',
      style({
        transform: 'translateX(-1708px)'
      })),
      transition('state-1 => state-0', [animate('0.5s ease-in-out')]),
      transition('state-0 => state-1', [animate('0.5s ease-in-out')]),
      transition('state-2 => state-1', [animate('0.5s ease-in-out')]),
      transition('state-1 => state-2', [animate('0.5s ease-in-out')]),
      transition('state-3 => state-2', [animate('0.5s ease-in-out')]),
      transition('state-2 => state-3', [animate('0.5s ease-in-out')]),
      transition('state-3 => state-4', [animate('0.5s ease-in-out')]),
      transition('state-4 => state-3', [animate('0.5s ease-in-out')]),
      transition('state-4 => state-0', [animate('0.5s ease-in-out')]),
      transition('state-0 => state-4', [animate('0.5s ease-in-out')]),
    ]),
  ],
  templateUrl: './our-team-mobile.component.html',
  styleUrls: ['./our-team-mobile.component.css']
})
export class OurTeamMobileComponent {
  text = `Сегодня люди - это самый важный и ценный ресурс. И с каждым днём их ценность будет расти всё больше и больше. Мы - команда предпринимателей нашей страны 🇷🇺 - покоряем новые рынки 🌎.
  `;

  images = ['../assets/images/people/01.png', '../assets/images/people/02.png', '../assets/images/people/03.png', '../assets/images/people/04.png', '../assets/images/people/05.png',];
  employeeNames = ['Герберт Ромберг', 'Виктория Дементьевская', 'Оксана Костяева', 'Грануш Хачатрян', 'Денис Задорожный'];
  employeeJobs = ['Основатель компании ITS Group, консалтинг',
    'Руководитель Международного направления', 
    'Директор IT-компании «ООО Айтишник», аккредитованной минцифрой',
    'Генеральный директор компании «ООО М3», агрегатора автомобильного сервиса',
    'Генеральный директор компании «ООО ПК», сети придорожных сервисов в России'];

  move = false;
  move1 = false;
  move2 = false;
  move3 = false;

  moveR() {
    if (!this.move&&!this.move1&&!this.move2&&!this.move3) {
      this.move = true;
      this.move1 = false;
      this.move2 = false;
      this.move3 = false;
    } else if (this.move&&!this.move1&&!this.move2&&!this.move3) {
      this.move = false;
      this.move1 = true;
      this.move2 = false;
      this.move3 = false;
    } else if (!this.move&&this.move1&&!this.move2&&!this.move3) {
      this.move = false;
      this.move1 = false;
      this.move2 = true;
      this.move3 = false;
    } else if (!this.move&&!this.move1&&this.move2&&!this.move3) {
      this.move = false;
      this.move1 = false;
      this.move2 = false;
      this.move3 = true;
    } else if (!this.move&&!this.move1&&!this.move2&&this.move3) {
      this.move = false;
      this.move1 = false;
      this.move2 = false;
      this.move3 = false;
    }
  }
  moveL() {if (this.move&&!this.move1&&!this.move2&&!this.move3) {
      this.move = false;
      this.move1 = false;
      this.move2 = false;
      this.move3 = false;
    } else if (!this.move&&this.move1&&!this.move2&&!this.move3) {
      this.move = true;
      this.move1 = false;
      this.move2 = false;
      this.move3 = false;
    } else if (!this.move&&!this.move1&&this.move2&&!this.move3) {
      this.move = false;
      this.move1 = true;
      this.move2 = false;
      this.move3 = false;
    } else if (!this.move&&!this.move1&&!this.move2&&this.move3) {
      this.move = false;
      this.move1 = false;
      this.move2 = true;
      this.move3 = false;
    }
  }

  arrowsShown = false;
  showArrows(){
    this.arrowsShown = !this.arrowsShown;
  }
  employeesShown = false;
  showEmployees(){
    this.employeesShown = true;
  }
}
