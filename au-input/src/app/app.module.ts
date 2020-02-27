import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { AuInputModule } from './lib/au-input-module';
// import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
// import { InputRefDirective } from './lib/common/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }