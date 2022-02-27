import { TestBed } from '@angular/core/testing';

import { ArtikalService } from './artikal.service';

describe('ArtikalService', () => {
  let service: ArtikalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
