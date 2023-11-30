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

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, TruckComponent, MainComponent, HeaderComponent, EmployeeComponent, OurTeamComponent, QuoteBlockComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}