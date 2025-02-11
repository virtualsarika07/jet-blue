import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

const routes: Routes = [
  { path: '', component: FlightListComponent },  // Default page showing flights list
  { path: 'detail/:id', component: FlightDetailComponent }  // Route for flight details
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Ensure RouterModule is imported correctly
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
