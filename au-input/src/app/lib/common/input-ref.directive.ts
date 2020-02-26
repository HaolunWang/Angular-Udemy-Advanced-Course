import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'au-fa-input input'
})
export class InputRefDirective {

  // constructor() { }

  focus = false;
  
  @HostListener('focus')//decorator
  onFocus(){
    this.focus = true;
  }

  @HostListener('blur')
  onBlur(){
    this.focus = false;
  }

}
