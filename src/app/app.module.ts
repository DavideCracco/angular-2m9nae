import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TextboxComponent } from './textbox/textbox.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TextboxComponent, BodyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
