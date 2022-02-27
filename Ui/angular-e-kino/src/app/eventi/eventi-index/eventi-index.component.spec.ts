import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiIndexComponent } from './eventi-index.component';

describe('EventiIndexComponent', () => {
  let component: EventiIndexComponent;
  let fixture: ComponentFixture<EventiIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventiIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
