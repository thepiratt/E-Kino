import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoFormaComponent } from './kino-forma.component';

describe('KinoFormaComponent', () => {
  let component: KinoFormaComponent;
  let fixture: ComponentFixture<KinoFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
