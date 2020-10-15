import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AuTabPanelComponent,
    AuTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
