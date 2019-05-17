import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClipartsListComponent } from './cliparts-list/cliparts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipartComponent } from './clipart/clipart.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    ClipartsListComponent,
    ClipartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
