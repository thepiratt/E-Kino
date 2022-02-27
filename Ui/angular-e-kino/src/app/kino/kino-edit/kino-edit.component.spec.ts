import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoEditComponent } from './kino-edit.component';

describe('KinoEditComponent', () => {
  let component: KinoEditComponent;
  let fixture: ComponentFixture<KinoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
