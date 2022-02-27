import { TestBed } from '@angular/core/testing';

import { GlumciService } from './glumci.service';

describe('GlumciService', () => {
  let service: GlumciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlumciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
