import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGlumciComponent } from './form-glumci.component';

describe('FormGlumciComponent', () => {
  let component: FormGlumciComponent;
  let fixture: ComponentFixture<FormGlumciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGlumciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGlumciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
