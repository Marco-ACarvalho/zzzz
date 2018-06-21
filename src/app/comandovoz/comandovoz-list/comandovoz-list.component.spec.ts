import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandovozListComponent } from './comandovoz-list.component';

describe('ComandovozListComponent', () => {
  let component: ComandovozListComponent;
  let fixture: ComponentFixture<ComandovozListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandovozListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandovozListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
