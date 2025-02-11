import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsComponent } from './flights/flights.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule
  ],
  exports:[  ],
  providers: [],
 
})
export class AppModule { }
