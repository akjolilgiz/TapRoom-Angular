import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTapComponent } from './edit-tap.component';

describe('EditTapComponent', () => {
  let component: EditTapComponent;
  let fixture: ComponentFixture<EditTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
