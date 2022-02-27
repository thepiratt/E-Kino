import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetaljiComponent } from './film-detalji.component';

describe('FilmDetaljiComponent', () => {
  let component: FilmDetaljiComponent;
  let fixture: ComponentFixture<FilmDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
