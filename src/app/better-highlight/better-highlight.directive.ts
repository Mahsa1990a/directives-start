import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // you should use renderer for any DOM manipulation
  // accessing element : private elRef: ElementRef
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // setStyle method set style of some elements
    // elRef(which element want to style, "which style", "value assign for this property")
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  // adding new decorator(@HostListener) and set it to any method we want(mouseover):
  @HostListener('mouseenter') mouseover(eventData: Event) { //after hovering it gets blue
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }
}
// after saving this add to app component
