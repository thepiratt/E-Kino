import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlumciOdabirComponent } from './glumci-odabir.component';

describe('GlumciOdabirComponent', () => {
  let component: GlumciOdabirComponent;
  let fixture: ComponentFixture<GlumciOdabirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlumciOdabirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlumciOdabirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
