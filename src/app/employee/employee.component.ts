import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employeeName = 'Имя Фамилия';
  @Input() job = 'Должность';
  @Input() employeeImage = "../assets/images/people/background.png";

}
