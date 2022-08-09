import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekcijaIndexComponent } from './projekcija-index.component';

describe('ProjekcijaIndexComponent', () => {
  let component: ProjekcijaIndexComponent;
  let fixture: ComponentFixture<ProjekcijaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekcijaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekcijaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
