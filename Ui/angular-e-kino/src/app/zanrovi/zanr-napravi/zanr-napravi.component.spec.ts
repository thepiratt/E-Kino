import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrNapraviComponent } from './zanr-napravi.component';

describe('ZanrNapraviComponent', () => {
  let component: ZanrNapraviComponent;
  let fixture: ComponentFixture<ZanrNapraviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrNapraviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrNapraviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
