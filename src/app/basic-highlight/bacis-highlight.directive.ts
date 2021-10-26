import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]' //after adding [] we call only appBasicHighlight other places without ""
})

export class BasicHighlightDirective implements OnInit {
  // refrence to the element, the directive was placed on: elementRef(you choose the name)
  constructor(private elementRef: ElementRef) {// ADD private for using this property everywhere in this class
    // elementRef.nativeElement
  }

  //lifecycle hook
  ngOnInit() { //better way for using elementRef:
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

// after craeting this file => we have to inform angular, we have a new directive(app.module.ts)
// then we can use it in app template
