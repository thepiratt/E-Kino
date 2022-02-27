import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrFormaComponent } from './zanr-forma.component';

describe('ZanrFormaComponent', () => {
  let component: ZanrFormaComponent;
  let fixture: ComponentFixture<ZanrFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
