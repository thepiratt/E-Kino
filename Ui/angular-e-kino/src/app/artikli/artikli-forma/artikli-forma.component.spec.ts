import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikliFormaComponent } from './artikli-forma.component';

describe('ArtikliFormaComponent', () => {
  let component: ArtikliFormaComponent;
  let fixture: ComponentFixture<ArtikliFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikliFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikliFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
