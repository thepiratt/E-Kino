import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDodajComponent } from './film-dodaj.component';

describe('FilmDodajComponent', () => {
  let component: FilmDodajComponent;
  let fixture: ComponentFixture<FilmDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
