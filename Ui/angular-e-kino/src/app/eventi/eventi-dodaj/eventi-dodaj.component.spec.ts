import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiDodajComponent } from './eventi-dodaj.component';

describe('EventiDodajComponent', () => {
  let component: EventiDodajComponent;
  let fixture: ComponentFixture<EventiDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventiDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
