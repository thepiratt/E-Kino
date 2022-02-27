import { TestBed } from '@angular/core/testing';

import { ZanrService } from './zanr.service';

describe('ZanrService', () => {
  let service: ZanrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZanrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
