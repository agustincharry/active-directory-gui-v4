import { TestBed } from '@angular/core/testing';

import { ActiveDirectoryService } from './active-directory.service';

describe('ActiveDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveDirectoryService = TestBed.get(ActiveDirectoryService);
    expect(service).toBeTruthy();
  });
});
