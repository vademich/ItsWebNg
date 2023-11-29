import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';
import { MainComponent } from './main/main.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, TruckComponent, MainComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}