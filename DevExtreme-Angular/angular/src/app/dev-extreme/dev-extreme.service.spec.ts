import { TestBed } from '@angular/core/testing';

import { DevExtremeService } from './dev-extreme.service';

describe('DevExtremeService', () => {
  let service: DevExtremeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevExtremeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
