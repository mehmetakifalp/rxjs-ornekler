import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbyComponent } from './groupby.component';

describe('GroupbyComponent', () => {
  let component: GroupbyComponent;
  let fixture: ComponentFixture<GroupbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
