import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {

  @Input()
  icon:string;

  constructor() { }

  ngOnInit() {
  }

  /*class = "fa fa-envelope"
  * The first fa CSS class adds generic font awesome CSS types, 
  * while the fa-envelop adds the styles specific only to the font awesome envelope icon.
  */
  get classes(){
    const cssClasses = {
      'fa': true// fa means angular font awesome package
    };
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
