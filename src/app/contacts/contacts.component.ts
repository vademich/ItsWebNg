import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  clicked = false;
  
  name = '';
  phone = '';
  email ='';
    
  token: string|undefined;

  constructor(
    private http: HttpClient
  ) {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    else {
      const data = {
        "name": form?.form?.value?.name,
        "phone": form?.form?.value?.phone,
        "email": form?.form?.value?.email
    };
      const url = 'http://localhost:5000/send-letter';
      axios.post(url, data);
      this.clicked = true;
      this.name = '';
      this.phone = '';
      this.email = '';
      this.token = '';
    }
  }

}