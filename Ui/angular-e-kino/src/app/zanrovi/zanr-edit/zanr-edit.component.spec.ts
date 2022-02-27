import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrEditComponent } from './zanr-edit.component';

describe('ZanrEditComponent', () => {
  let component: ZanrEditComponent;
  let fixture: ComponentFixture<ZanrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
