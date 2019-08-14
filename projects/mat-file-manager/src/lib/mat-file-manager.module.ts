import { NgModule } from '@angular/core';

import { MatFileManagerComponent } from './mat-file-manager.component';
import { MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [MatFileManagerComponent],
  imports: [
    MatTableModule,
    MatSortModule,
  ],
  exports: [MatFileManagerComponent]
})
export class MatFileManagerModule { }
