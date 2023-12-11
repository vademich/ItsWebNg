import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']//, '../css/typography.css']
})
export class ContactsComponent {
    name: string = "";
    email: string = "";
    phone: string = "";
      
    submit(form: NgForm){
        console.log(form);
        console.log(form?.form?.value);
    }
  // sitekey - 6LecwScpAAAAAN1P1zLphhzwaNY-0sCid-nsRkwp
  // secret - 6LecwScpAAAAABgZOmqGK9EL300-hlKV_eIqpqdn
  token: string|undefined;

  constructor() {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

}
