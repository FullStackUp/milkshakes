import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MilkshakeListComponent } from './milkshake-list/milkshake-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilkshakeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
