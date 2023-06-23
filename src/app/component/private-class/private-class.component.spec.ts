import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateClassComponent } from './private-class.component';

describe('PrivateClassComponent', () => {
  let component: PrivateClassComponent;
  let fixture: ComponentFixture<PrivateClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
