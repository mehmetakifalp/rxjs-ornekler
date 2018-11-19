import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticandistanceComponent } from './staticandistance.component';

describe('StaticandistanceComponent', () => {
  let component: StaticandistanceComponent;
  let fixture: ComponentFixture<StaticandistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticandistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticandistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
