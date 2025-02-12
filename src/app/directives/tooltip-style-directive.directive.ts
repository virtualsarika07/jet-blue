import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltipStyleDirective]'
})
export class TooltipStyleDirectiveDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement,'backgroun-color','white')
    this.renderer.setStyle(this.el.nativeElement,'border', 'grey')
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
  }

}
