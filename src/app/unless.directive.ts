import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// this directive will attach s.th if the condition is false
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // we need to get the condition as Input()
  // appUnless is a property, it's just a setter of property, which is a mechod which executed whenever the property changes
  @Input() set appUnless(condition: boolean) { //appUnless should be same a selector name
    if (!condition) {
      // createEmbeddedView method: creates a view in this viewContainer(and the view is templateRef)
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // to remove eveything from the dom:
      this.viewContainerRef.clear();
    }
  }

  // for injecting template(templateRef), second view container(where should we render it)
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}

// after this, use it in template to replace *ngIf
