import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoIndexComponent } from './kino-index.component';

describe('KinoIndexComponent', () => {
  let component: KinoIndexComponent;
  let fixture: ComponentFixture<KinoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
