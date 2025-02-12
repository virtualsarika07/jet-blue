import { CommonModule } from '@angular/common';
import { FlightsRoutingModule } from './flights-routing.module';  // Ensure routing module is imported
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { NgModule, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { TooltipDirective } from './tooltip.directive';


@NgModule({
  declarations: [
    FlightListComponent,
    FlightDetailComponent,
    TooltipDirective,
   
   
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MatCardModule,
    MatTooltipModule,
    SharedModule
 

  
  ],
  exports:[FlightListComponent]
 
})
export class FlightsModule { }
