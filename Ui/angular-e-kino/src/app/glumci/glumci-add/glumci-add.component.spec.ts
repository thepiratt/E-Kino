import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlumciAddComponent } from './glumci-add.component';

describe('GlumciAddComponent', () => {
  let component: GlumciAddComponent;
  let fixture: ComponentFixture<GlumciAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlumciAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlumciAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
