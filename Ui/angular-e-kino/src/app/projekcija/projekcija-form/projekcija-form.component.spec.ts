import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekcijaFormComponent } from './projekcija-form.component';

describe('ProjekcijaFormComponent', () => {
  let component: ProjekcijaFormComponent;
  let fixture: ComponentFixture<ProjekcijaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekcijaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekcijaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
