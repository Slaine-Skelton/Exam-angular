import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClipartsListComponent } from './cliparts-list/cliparts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipartComponent } from './clipart/clipart.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipartsListComponent,
    ClipartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
