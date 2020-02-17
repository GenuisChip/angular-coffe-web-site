import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFlavorsComponent } from './the-flavors.component';

describe('TheFlavorsComponent', () => {
  let component: TheFlavorsComponent;
  let fixture: ComponentFixture<TheFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
