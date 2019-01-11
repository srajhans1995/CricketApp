import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryformComponent } from './summaryform.component';

describe('SummaryformComponent', () => {
  let component: SummaryformComponent;
  let fixture: ComponentFixture<SummaryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
