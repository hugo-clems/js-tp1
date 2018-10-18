import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style['text-transform'] = 'uppercase';
  }
}
