import { TestBed } from '@angular/core/testing';

import { ProjekcijaService } from './projekcija.service';

describe('ProjekcijaService', () => {
  let service: ProjekcijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjekcijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
