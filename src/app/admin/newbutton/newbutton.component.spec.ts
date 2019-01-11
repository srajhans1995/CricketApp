import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuttonComponent } from './newbutton.component';

describe('NewbuttonComponent', () => {
  let component: NewbuttonComponent;
  let fixture: ComponentFixture<NewbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
