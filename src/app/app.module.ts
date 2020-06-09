import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material.module';
import { ProgressBarColor } from './progress.color.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule ],
  declarations: [ AppComponent, HelloComponent, ProgressBarColor ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
