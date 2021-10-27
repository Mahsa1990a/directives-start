import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
 // using HostBinding('which propety of the host element we want to bind') instead of renderer
 //backgroundColorProp is a property and give it default value 'transparent'
  @HostBinding('style.backgroundColor') backgroundColorProp: string = 'transparent';
  //we can use HostBinding you can bind to any property of the element you're siiting on

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
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColorProp = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColorProp = 'transparent';
  }
}
// after saving this add to app component
