import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFileManagerComponent } from './mat-file-manager.component';

describe('MatFileManagerComponent', () => {
  let component: MatFileManagerComponent;
  let fixture: ComponentFixture<MatFileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFileManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
