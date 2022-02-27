import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiEditComponent } from './eventi-edit.component';

describe('EventiEditComponent', () => {
  let component: EventiEditComponent;
  let fixture: ComponentFixture<EventiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
