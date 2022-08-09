import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacijaFormComponent } from './autorizacija-form.component';

describe('AutorizacijaFormComponent', () => {
  let component: AutorizacijaFormComponent;
  let fixture: ComponentFixture<AutorizacijaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizacijaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacijaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
