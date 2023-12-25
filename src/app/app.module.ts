import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { QuoteBlockComponent } from './quote-block/quote-block.component';
import { GeographyComponent } from './geography/geography.component';
import { CompanyGroupComponent } from './company-group/company-group.component';
import { ContactsComponent } from './contacts/contacts.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { TruckMobileComponent } from './truck-mobile/truck-mobile.component';
import { OurTeamMobileComponent } from './our-team-mobile/our-team-mobile.component';
import { CompanyGroupMobileComponent } from './company-group-mobile/company-group-mobile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        MatSlideToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        HttpClientModule
    ],
    providers: [
        {
          provide: RECAPTCHA_SETTINGS,
          useValue: {
            siteKey: environment.recaptcha.siteKey,
          } as RecaptchaSettings,
        },
      ],
    declarations: [AppComponent, TruckComponent, MainComponent, HeaderComponent, EmployeeComponent, OurTeamComponent, QuoteBlockComponent, GeographyComponent, CompanyGroupComponent, ContactsComponent, FooterComponent, TruckMobileComponent, OurTeamMobileComponent, CompanyGroupMobileComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}