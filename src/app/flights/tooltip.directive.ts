/* eslint-disable @typescript-eslint/no-explicit-any */

import { Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import { createPopper, Instance, } from '@popperjs/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';  
  private tooltipElement!: HTMLElement;
  private arrowElement!: HTMLElement;
  private popperInstance!: Instance;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    // Create tooltip container
    this.tooltipElement = this.renderer.createElement('div');
    this.tooltipElement.className = 'tooltip-box';
    this.tooltipElement.innerHTML = `
    <div class="tooltip-title">Previous flight status</div>
    <div class="tooltip-content">On Time</div>
  `;

    // Create arrow element
    this.arrowElement = this.renderer.createElement('div');
    this.arrowElement.className = 'tooltip-arrow';
    this.renderer.appendChild(this.tooltipElement, this.arrowElement);

    this.renderer.appendChild(document.body, this.tooltipElement);

    // Popper.js instance with LEFT placement & arrow modifier
    this.popperInstance = createPopper(this.el.nativeElement, this.tooltipElement, {
      placement: 'top',
      modifiers: [
        { name: 'offset', options: { offset: [8, 10] } }, // Adjust spacing
        { name: 'arrow', options: { element: this.arrowElement } } // ✅ Arrow modifier
      ]
    });
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.popperInstance.destroy();
    }
  }
}
