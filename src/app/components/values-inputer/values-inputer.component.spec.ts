import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesInputerComponent } from './values-inputer.component';

describe('ValuesInputerComponent', () => {
  let component: ValuesInputerComponent;
  let fixture: ComponentFixture<ValuesInputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesInputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesInputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
