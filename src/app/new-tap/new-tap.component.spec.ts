import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTapComponent } from './new-tap.component';

describe('NewTapComponent', () => {
  let component: NewTapComponent;
  let fixture: ComponentFixture<NewTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
