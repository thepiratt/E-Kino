import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikliDodajComponent } from './artikli-dodaj.component';

describe('ArtikliDodajComponent', () => {
  let component: ArtikliDodajComponent;
  let fixture: ComponentFixture<ArtikliDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikliDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikliDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
