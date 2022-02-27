import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikliEditComponent } from './artikli-edit.component';

describe('ArtikliEditComponent', () => {
  let component: ArtikliEditComponent;
  let fixture: ComponentFixture<ArtikliEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikliEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikliEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
