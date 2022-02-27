import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaFilmComponent } from './forma-film.component';

describe('FormaFilmComponent', () => {
  let component: FormaFilmComponent;
  let fixture: ComponentFixture<FormaFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
