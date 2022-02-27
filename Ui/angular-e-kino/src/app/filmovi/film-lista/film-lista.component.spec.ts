import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListaComponent } from './film-lista.component';

describe('FilmListaComponent', () => {
  let component: FilmListaComponent;
  let fixture: ComponentFixture<FilmListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
