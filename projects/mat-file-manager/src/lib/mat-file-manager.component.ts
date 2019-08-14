import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IFile } from './models/file.interface';

@Component({
  selector: 'mat-file-manager',
  templateUrl: 'mat-file-manager.component.html',
  styleUrls: ['mat-file-manager.component.scss'],
})

export class MatFileManagerComponent implements OnInit {

  public files: MatTableDataSource<IFile> = new MatTableDataSource();
  public displayedColumns: string[] = ['path', 'name', 'size'];

  public constructor() { }

  public ngOnInit(): void {

    this.files.data = [
      {path: '/', name: 'test.txt', isFolder: false, byteSize: 34553},
      {path: '/', name: 'my folder', isFolder: true, byteSize: 4343445},
    ];
  }

}
