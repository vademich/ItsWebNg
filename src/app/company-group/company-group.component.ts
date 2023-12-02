import { Component } from '@angular/core';

@Component({
  selector: 'app-company-group',
  templateUrl: './company-group.component.html',
  styleUrls: ['./company-group.component.css', '../css/typography.css']
})
export class CompanyGroupComponent {
  text = `
  Нами было принято решение о создании группы компаний, которая будет сопровождать наши ведущие компании, а также работать на внешнего клиента. Сегодня в нашей группе 8 компаний, работающих в разных направлениях.`;
}
