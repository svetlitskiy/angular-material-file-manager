import { TestBed } from '@angular/core/testing';

import { MatFileManagerService } from './mat-file-manager.service';

describe('MatFileManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatFileManagerService = TestBed.get(MatFileManagerService);
    expect(service).toBeTruthy();
  });
});
