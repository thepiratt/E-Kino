import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekcijaEditComponent } from './projekcija-edit.component';

describe('ProjekcijaEditComponent', () => {
  let component: ProjekcijaEditComponent;
  let fixture: ComponentFixture<ProjekcijaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekcijaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekcijaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
