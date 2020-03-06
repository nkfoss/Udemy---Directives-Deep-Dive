import { Directive, Renderer2,
  OnInit, ElementRef,
  HostListener, HostBinding, Input } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

// This is a better practice than the implementation in basic-highlight.
// Since service workers might not know about the DOM, basic-highlight might not
// work properly. So we use the renderer.

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'green';

  // Here we have a property called 'backgroundColor, of type string.
  // The host element of this our better-highlight directive has it's style.backgroundColor BOUND to our bgcolor string.
  // Notice, that we when we mouseover the element, the string value changes. Hence, the style will also change.
  // The default color is green. You can see how it changes when you mouse over.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
