import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoCreateComponent } from './kino-create.component';

describe('KinoCreateComponent', () => {
  let component: KinoCreateComponent;
  let fixture: ComponentFixture<KinoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
