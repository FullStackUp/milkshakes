import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MilkshakeListComponent } from './milkshake-list/milkshake-list.component';
import { MilkshakeDetailsComponent } from './milkshake-details/milkshake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilkshakeListComponent,
    MilkshakeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
