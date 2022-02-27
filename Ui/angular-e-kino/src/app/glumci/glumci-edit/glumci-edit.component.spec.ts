import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlumciEditComponent } from './glumci-edit.component';

describe('GlumciEditComponent', () => {
  let component: GlumciEditComponent;
  let fixture: ComponentFixture<GlumciEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlumciEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlumciEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
