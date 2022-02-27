import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrIndexComponent } from './zanr-index.component';

describe('ZanrIndexComponent', () => {
  let component: ZanrIndexComponent;
  let fixture: ComponentFixture<ZanrIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
