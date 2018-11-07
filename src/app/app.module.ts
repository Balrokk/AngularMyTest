import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import { AccauntComponent } from './Components/accaunt/accaunt.component';

@NgModule({
  declarations: [
    AppComponent,
    AccauntComponent,
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
