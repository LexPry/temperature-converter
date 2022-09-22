import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversionInputComponent } from './components/conversion-input/conversion-input.component';
import { ConversionResultComponent } from './components/conversion-result/conversion-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionInputComponent,
    ConversionResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
