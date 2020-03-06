import { Directive, ElementRef, OnInit } from '@angular/core';



// ***NOTE: Don't forget to import this in app Module!!!!



@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{

  // Using the 'private' here automatically makes elementRef a property of
  // our directive... and assigns the value.
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
