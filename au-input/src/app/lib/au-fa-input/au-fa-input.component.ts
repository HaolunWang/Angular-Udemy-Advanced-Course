import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon:string;

  @ContentChild(InputRefDirective, null)
  input: InputRefDirective;

  // @Input()
  // placeholder = ""; // this would have been passed on from the exterior of the component

  constructor() { }

  ngAfterContentInit(){
    console.log('input', this.input);
    if (!this.input){
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus: false;
  }
  // ngOnInit() {
  // }

  /*class = "fa fa-envelope"
  * The first fa CSS class adds generic font awesome CSS types, 
  * while the fa-envelop adds the styles specific only to the font awesome envelope icon.
  */
  get classes(){
    const cssClasses = {
      // 'fa': true// fa means angular font awesome package
    };
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
