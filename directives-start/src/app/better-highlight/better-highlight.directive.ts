import { Directive, Renderer2,
  OnInit, ElementRef,
  HostListener, HostBinding } from '@angular/core';

// This is a better practice than the implementation in basic-highlight.
// Since service workers might not know about the DOM, basic-highlight might not
// work properly. So we use the renderer.

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  // Here we have a property called 'backgroundColor, of type string.
  // The host element of this our better-highlight directive has it's style.backgroundColor BOUND to our bgcolor string.
  // Notice, that we when we mouseover the element, the string value changes. Hence, the style will also change.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent'
  }


}
