import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikliIndexComponent } from './artikli-index.component';

describe('ArtikliIndexComponent', () => {
  let component: ArtikliIndexComponent;
  let fixture: ComponentFixture<ArtikliIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikliIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikliIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
