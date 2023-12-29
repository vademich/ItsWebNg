import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-company-group',
  animations: [
    trigger('hover', [
      state('block-start',
      style({'background-color': '#FFF'})),
      state('block-end',
      style({'background-color': '#002ED0'})),
      state('circle-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#264DD7',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block2-start',
      style({'background-color': '#FFF'})),
      state('block2-end',
      style({'background-color': '#007FF3'})),
      state('circle2-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#2692F5',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle2-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      state('details-start',
      style({
        background: 'url(../../assets/images/more-details-gray.svg) no-repeat center,rgba(58, 58, 58, 0.05)'
      })),
      state('details-end',
      style({
        background: 'url(../../assets/images/more-details-white.svg) no-repeat center right 10px,rgba(255, 255, 255, 0.15)'
      })),
      // 
      // 
      // 
      state('block3-start',
      style({'background-color': '#FFF'})),
      state('block3-end',
      style({'background-color': '#2FC94C'})),
      state('circle3-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#4ED167',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle3-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block4-start',
      style({'background-color': '#FFF'})),
      state('block4-end',
      style({'background-color': '#FF7800'})),
      state('circle4-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#FF8C26',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle4-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block5-start',
      style({'background-color': '#FFF'})),
      state('block5-end',
      style({'background-color': '#7221D5'})),
      state('circle5-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#8742DB',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle5-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block6-start',
      style({'background-color': '#FFF'})),
      state('block6-end',
      style({'background-color': '#043860'})),
      state('circle6-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#2A4F78',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle6-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block7-start',
      style({'background-color': '#FFF'})),
      state('block7-end',
      style({'background-color': '#FFB700'})),
      state('circle7-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#FFC226',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle7-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // 
      state('block8-start',
      style({'background-color': '#FFF'})),
      state('block8-end',
      style({'background-color': '#00BDC8'})),
      state('circle8-start',
      style({
        width: '86px',
        height: '86px',
        'background-color': '#26C7D0',
        opacity: 0,
        'border-radius': '43px',
      })),
      state('circle8-end',
      style({
        width: '240px',
        height: '240px',
        opacity: 1,
        'border-radius': '120px',
      })),
      // // 
      state('title-start',
      style({color: '#3A3A3A'})),
      state('title-end',
      style({color: '#FFF'})),
      state('text-start',
      style({opacity: 0})),
      state('text-end',
      style({
        opacity: 1,
        color:'#FFF'
      })),
      state('picture-start',
      style({
        transform: 'scale(0.8)'
      })),
      state('picture-end',
      style({
        transform: 'rotate(-8deg) scale(0.9)',
      })),
      state('shadow-start',
      style({
      })),
      state('shadow-end',
      style({
        transform: 'scale(1.2) translateX(10px) rotate(-1deg)',
      })),
      transition('block-start => block-end', [animate('0.3s ease-out')]),
      transition('block-end => block-start', [animate('0.3s ease-out')]),
      transition('circle-start => circle-end', [animate('0.3s ease-out')]),
      transition('circle-end => circle-start', [animate('0.3s ease-out')]),
      // 
      transition('block2-start => block2-end', [animate('0.3s ease-out')]),
      transition('block2-end => block2-start', [animate('0.3s ease-out')]),
      transition('circle2-start => circle2-end', [animate('0.3s ease-out')]),
      transition('circle2-end => circle2-start', [animate('0.3s ease-out')]),
      // 
      transition('block3-start => block3-end', [animate('0.3s ease-out')]),
      transition('block3-end => block3-start', [animate('0.3s ease-out')]),
      transition('circle3-start => circle3-end', [animate('0.3s ease-out')]),
      transition('circle3-end => circle3-start', [animate('0.3s ease-out')]),
      // 
      transition('block4-start => block4-end', [animate('0.3s ease-out')]),
      transition('block4-end => block4-start', [animate('0.3s ease-out')]),
      transition('circle4-start => circle4-end', [animate('0.3s ease-out')]),
      transition('circle4-end => circle4-start', [animate('0.3s ease-out')]),
      // 
      transition('block5-start => block5-end', [animate('0.3s ease-out')]),
      transition('block5-end => block5-start', [animate('0.3s ease-out')]),
      transition('circle5-start => circle5-end', [animate('0.3s ease-out')]),
      transition('circle5-end => circle5-start', [animate('0.3s ease-out')]),
      // 
      transition('block6-start => block6-end', [animate('0.3s ease-out')]),
      transition('block6-end => block6-start', [animate('0.3s ease-out')]),
      transition('circle6-start => circle6-end', [animate('0.3s ease-out')]),
      transition('circle6-end => circle6-start', [animate('0.3s ease-out')]),
      // 
      transition('block7-start => block7-end', [animate('0.3s ease-out')]),
      transition('block7-end => block7-start', [animate('0.3s ease-out')]),
      transition('circle7-start => circle7-end', [animate('0.3s ease-out')]),
      transition('circle7-end => circle7-start', [animate('0.3s ease-out')]),
      // 
      transition('block8-start => block8-end', [animate('0.3s ease-out')]),
      transition('block8-end => block8-start', [animate('0.3s ease-out')]),
      transition('circle8-start => circle8-end', [animate('0.3s ease-out')]),
      transition('circle8-end => circle8-start', [animate('0.3s ease-out')]),
      // 
      transition('title-start => title-end', [animate('0.3s ease-out')]),
      transition('title-end => title-start', [animate('0.3s ease-out')]),
      transition('text-start => text-end', [animate('0.3s ease-out')]),
      transition('text-end => text-start', [animate('0.3s ease-out')]),
      transition('picture-start => picture-end', [animate('0.3s ease-out')]),
      transition('picture-end => picture-start', [animate('0.3s ease-out')]),
      transition('shadow-start => shadow-end', [animate('0.3s ease-out')]),
      transition('shadow-end => shadow-start', [animate('0.3s ease-out')]),
      transition('details-start => details-end', [animate('0.3s ease-out')]),
      transition('details-end => details-start', [animate('0.3s ease-out')])
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
  ],
  templateUrl: './company-group.component.html',
  styleUrls: ['./company-group.component.css', '../css/typography.css']
})
export class CompanyGroupComponent {
  isCaptionHover = false;
  captionShow(){
    this.isCaptionHover = true;
  }
  isLineHover = false;
  lineShow(){
    this.isLineHover = true;
  }
  text = `IT, HR, бухгалтерия, налоги, юристы, тендеры, строители, недвижимость. Все к вашим услугам.
  Наши профессионалы готовы к решениям ваших самых непростых задач. По всей территории нашей страны 🇷🇺, а иногда и за её пределами 😉`;
  
  blockHover = false;
  circleHover = false;
  onBlock() {
    this.blockHover = !this.blockHover;
  };
  onCircle() {
    this.circleHover = !this.circleHover;
  };
  titleHover = false;
  textHover = false;
  onTitle() {
    this.titleHover = !this.titleHover;
  };
  onText() {
    this.textHover = !this.textHover;
  };
  pictureHover = false;
  onPicture() {
    this.pictureHover = !this.pictureHover;
  }
  shadowHover = false;
  onShadow() {
    this.shadowHover = !this.shadowHover;
  }
  // 
  block2Hover = false;
  circle2Hover = false;
  onBlock2() {
    this.block2Hover = !this.block2Hover;
  };
  onCircle2() {
    this.circle2Hover = !this.circle2Hover;
  };
  title2Hover = false;
  text2Hover = false;
  onTitle2() {
    this.title2Hover = !this.title2Hover;
  };
  onText2() {
    this.text2Hover = !this.text2Hover;
  };
  picture2Hover = false;
  onPicture2() {
    this.picture2Hover = !this.picture2Hover;
  }
  shadow2Hover = false;
  onShadow2() {
    this.shadow2Hover = !this.shadow2Hover;
  }
  // 
  block3Hover = false;
  circle3Hover = false;
  onBlock3() {
    this.block3Hover = !this.block3Hover;
  };
  onCircle3() {
    this.circle3Hover = !this.circle3Hover;
  };
  title3Hover = false;
  text3Hover = false;
  onTitle3() {
    this.title3Hover = !this.title3Hover;
  };
  onText3() {
    this.text3Hover = !this.text3Hover;
  };
  picture3Hover = false;
  onPicture3() {
    this.picture3Hover = !this.picture3Hover;
  }
  shadow3Hover = false;
  onShadow3() {
    this.shadow3Hover = !this.shadow3Hover;
  }
  // 
  block4Hover = false;
  circle4Hover = false;
  onBlock4() {
    this.block4Hover = !this.block4Hover;
  };
  onCircle4() {
    this.circle4Hover = !this.circle4Hover;
  };
  title4Hover = false;
  text4Hover = false;
  onTitle4() {
    this.title4Hover = !this.title4Hover;
  };
  onText4() {
    this.text4Hover = !this.text4Hover;
  };
  picture4Hover = false;
  onPicture4() {
    this.picture4Hover = !this.picture4Hover;
  }
  shadow4Hover = false;
  onShadow4() {
    this.shadow4Hover = !this.shadow4Hover;
  }
  // 
  // 
  block5Hover = false;
  circle5Hover = false;
  onBlock5() {
    this.block5Hover = !this.block5Hover;
  };
  onCircle5() {
    this.circle5Hover = !this.circle5Hover;
  };
  title5Hover = false;
  text5Hover = false;
  onTitle5() {
    this.title5Hover = !this.title5Hover;
  };
  onText5() {
    this.text5Hover = !this.text5Hover;
  };
  picture5Hover = false;
  onPicture5() {
    this.picture5Hover = !this.picture5Hover;
  }
  shadow5Hover = false;
  onShadow5() {
    this.shadow5Hover = !this.shadow5Hover;
  }
  // 
  // 
  block6Hover = false;
  circle6Hover = false;
  onBlock6() {
    this.block6Hover = !this.block6Hover;
  };
  onCircle6() {
    this.circle6Hover = !this.circle6Hover;
  };
  title6Hover = false;
  text6Hover = false;
  onTitle6() {
    this.title6Hover = !this.title6Hover;
  };
  onText6() {
    this.text6Hover = !this.text6Hover;
  };
  picture6Hover = false;
  onPicture6() {
    this.picture6Hover = !this.picture6Hover;
  }
  shadow6Hover = false;
  onShadow6() {
    this.shadow6Hover = !this.shadow6Hover;
  }
  // 
  // 
  block7Hover = false;
  circle7Hover = false;
  onBlock7() {
    this.block7Hover = !this.block7Hover;
  };
  onCircle7() {
    this.circle7Hover = !this.circle7Hover;
  };
  title7Hover = false;
  text7Hover = false;
  onTitle7() {
    this.title7Hover = !this.title7Hover;
  };
  onText7() {
    this.text7Hover = !this.text7Hover;
  };
  picture7Hover = false;
  onPicture7() {
    this.picture7Hover = !this.picture7Hover;
  }
  shadow7Hover = false;
  onShadow7() {
    this.shadow7Hover = !this.shadow7Hover;
  }
  // 
  // 
  block8Hover = false;
  circle8Hover = false;
  onBlock8() {
    this.block8Hover = !this.block8Hover;
  };
  onCircle8() {
    this.circle8Hover = !this.circle8Hover;
  };
  title8Hover = false;
  text8Hover = false;
  onTitle8() {
    this.title8Hover = !this.title8Hover;
  };
  onText8() {
    this.text8Hover = !this.text8Hover;
  };
  picture8Hover = false;
  onPicture8() {
    this.picture8Hover = !this.picture8Hover;
  }
  shadow8Hover = false;
  onShadow8() {
    this.shadow8Hover = !this.shadow8Hover;
  }
  // 
  details2Hover = false;
  onDetails2() {
    this.details2Hover = !this.details2Hover;
  } 
  details3Hover = false;
  onDetails3() {
    this.details3Hover = !this.details3Hover;
  } 
  details4Hover = false;
  onDetails4() {
    this.details4Hover = !this.details4Hover;
  } 
  details5Hover = false;
  onDetails5() {
    this.details5Hover = !this.details5Hover;
  } 
  details6Hover = false;
  onDetails6() {
    this.details6Hover = !this.details6Hover;
  } 
  details7Hover = false;
  onDetails7() {
    this.details7Hover = !this.details7Hover;
  } 
  details8Hover = false;
  onDetails8() {
    this.details8Hover = !this.details8Hover;
  }
}
