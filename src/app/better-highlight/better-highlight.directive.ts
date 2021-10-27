import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  //instead of hard coded colors we can use properties and we can bind them from outside
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue'; // after adding appBetterHighlight(is name of selector) as alias, we should change template


 // using HostBinding('which propety of the host element we want to bind') instead of renderer
 //backgroundColorProp is a property and give it default value 'transparent'
  // @HostBinding('style.backgroundColor') backgroundColorProp: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColorProp: string; //we'll add the default value into ngOnInit()
  //we can use HostBinding you can bind to any property of the element you're siiting on

  // you should use renderer for any DOM manipulation
  // accessing element : private elRef: ElementRef
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // setStyle method set style of some elements
    // elRef(which element want to style, "which style", "value assign for this property")
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColorProp = this.defaultColor;
  }

  // adding new decorator(@HostListener) and set it to any method we want(mouseover):
  @HostListener('mouseenter') mouseover(eventData: Event) { //after hovering it gets blue
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColorProp = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColorProp = this.defaultColor;
  }
}
// after saving this add to app component
