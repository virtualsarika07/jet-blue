import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsComponent } from './flights/flights.component';
import { FlightsModule } from './flights/flights.module';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
  
   
    
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightsModule ,
    BrowserAnimationsModule,
    SharedModule 
  ],
  exports:[  ],
  providers: [],
 
})
export class AppModule { }
