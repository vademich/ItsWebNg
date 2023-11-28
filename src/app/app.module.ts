import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, TruckComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}