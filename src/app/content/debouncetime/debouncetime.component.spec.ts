import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeComponent } from './debouncetime.component';

describe('DebouncetimeComponent', () => {
  let component: DebouncetimeComponent;
  let fixture: ComponentFixture<DebouncetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
