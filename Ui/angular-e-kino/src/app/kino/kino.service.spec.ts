import { TestBed } from '@angular/core/testing';

import { KinoService } from './kino.service';

describe('KinoService', () => {
  let service: KinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
