import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekcijaAddComponent } from './projekcija-add.component';

describe('ProjekcijaAddComponent', () => {
  let component: ProjekcijaAddComponent;
  let fixture: ComponentFixture<ProjekcijaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekcijaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekcijaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
