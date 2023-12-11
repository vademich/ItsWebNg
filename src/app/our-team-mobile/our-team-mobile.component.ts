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
    ])
  ],
  templateUrl: './our-team-mobile.component.html',
  styleUrls: ['./our-team-mobile.component.css']//, '../css/typography.css']
})
export class OurTeamMobileComponent {
  text = `Все это благодаря небольшой, но очень сильной и эффективной команде. 
  И чтобы расти дальше, любой компании нужно усиливать её со всех сторон. 
  В компании должна быть сильная команда IT, сильная бухгалтерская и юридическая часть,
  HR и безопасность.`;
  
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
