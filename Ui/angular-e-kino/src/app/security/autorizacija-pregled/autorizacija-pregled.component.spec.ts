import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacijaPregledComponent } from './autorizacija-pregled.component';

describe('AutorizacijaPregledComponent', () => {
  let component: AutorizacijaPregledComponent;
  let fixture: ComponentFixture<AutorizacijaPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizacijaPregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacijaPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
