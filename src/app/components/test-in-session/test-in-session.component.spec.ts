import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInSessionComponent } from './test-in-session.component';

describe('TestInSessionComponent', () => {
  let component: TestInSessionComponent;
  let fixture: ComponentFixture<TestInSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
