import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandovozFormComponent } from './comandovoz-form.component';

describe('ProdutoFormComponent', () => {
  let component: ComandovozFormComponent;
  let fixture: ComponentFixture<ComandovozFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandovozFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandovozFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
