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

@NgModule({
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        MatSlideToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    declarations: [AppComponent, TruckComponent, MainComponent, HeaderComponent, EmployeeComponent, OurTeamComponent, QuoteBlockComponent, GeographyComponent, CompanyGroupComponent, ContactsComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}