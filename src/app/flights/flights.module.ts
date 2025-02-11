import { CommonModule } from '@angular/common';
import { FlightsRoutingModule } from './flights-routing.module';  // Ensure routing module is imported
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { NgModule, } from '@angular/core';

@NgModule({
  declarations: [
    FlightListComponent,
    FlightDetailComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
  
  ],
 
})
export class FlightsModule { }
