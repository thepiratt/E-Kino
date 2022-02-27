import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiFormaComponent } from './eventi-forma.component';

describe('EventiFormaComponent', () => {
  let component: EventiFormaComponent;
  let fixture: ComponentFixture<EventiFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventiFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
