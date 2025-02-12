import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipStyleDirectiveDirective } from '../directives/tooltip-style-directive.directive';

import { MatTooltipModule } from '@angular/material/tooltip';








@NgModule({
  declarations: [

    TooltipStyleDirectiveDirective,


  ],
  imports: [
    CommonModule,
  
    MatTooltipModule
  ],
  exports: [TooltipStyleDirectiveDirective]
})
export class SharedModule { }
