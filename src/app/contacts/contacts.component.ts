import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private http: HttpClient,
    private snackBar: MatSnackBar
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
      new Promise((resolve, reject) => {
        axios.post(url, data)
        resolve(data)
      })
        // .then(() => {
        //   // this.snackBar.open("Ваше письмо отправлено", 'OK');
        //   this.clicked = true;
        //   this.name = '';
        //   this.phone = '';
        //   this.email = '';
        //   this.token = '';
        // })
        // // .catch(err => this.snackBar.open("Server error", 'Close'))
    }
  }

}