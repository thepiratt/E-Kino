import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlumciComponent } from './glumci.component';

describe('GlumciComponent', () => {
  let component: GlumciComponent;
  let fixture: ComponentFixture<GlumciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlumciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlumciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
