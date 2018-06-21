import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontointeresseFormComponent } from './pontointeresse-form.component';

describe('PontointeresseFormComponent', () => {
  let component: PontointeresseFormComponent;
  let fixture: ComponentFixture<PontointeresseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontointeresseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontointeresseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
