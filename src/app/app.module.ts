import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFileManagerModule } from '../../projects/mat-file-manager/src/lib/mat-file-manager.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
