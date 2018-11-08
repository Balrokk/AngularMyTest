import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DataService} from './services/data.service';
import {ProfileComponent} from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
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
export class AppModule {
}
