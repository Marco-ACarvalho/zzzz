import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontointeresseListComponent } from './pontointeresse-list.component';

describe('PontointeresseListComponent', () => {
  let component: PontointeresseListComponent;
  let fixture: ComponentFixture<PontointeresseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontointeresseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontointeresseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
