import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MilkshakeContainerComponent } from './milkshake-container/milkshake-container.component';
import { MilkshakeDetailsComponent } from './milkshake-container/milkshake-details/milkshake-details.component';
import { MilkshakeListComponent } from './milkshake-container/milkshake-list/milkshake-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilkshakeListComponent,
    MilkshakeDetailsComponent,
    MilkshakeContainerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
