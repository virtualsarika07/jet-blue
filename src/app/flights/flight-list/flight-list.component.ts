import { Component } from '@angular/core';
import tippy from 'tippy.js';


@Component({
  selector: 'app-flight-list',

  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
 

})
export class FlightListComponent {

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    tippy('.tooltip-target', {
      content: '<strong>Previous flight status</strong><br>On Time',
      allowHTML: true,
      placement: 'left', // Position the tooltip to the left
      theme: 'light',
      arrow: true,
      animation: 'shift-away',
      inertia: true,
    });
  }
  flights = [
    { id: 101, name: 'JetBlue 101', previousStatus: 'Delayed', currentStatus: 'On Time' },
    { id: 202, name: 'Delta 202', previousStatus: 'On Time', currentStatus: 'Departed' },
    { id: 303, name: 'American Airlines 303', previousStatus: 'Cancelled', currentStatus: 'Scheduled' }
  ];
  

}
