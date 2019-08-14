import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFileManagerModule } from '../../projects/mat-file-manager/src/lib/mat-file-manager.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatFileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
