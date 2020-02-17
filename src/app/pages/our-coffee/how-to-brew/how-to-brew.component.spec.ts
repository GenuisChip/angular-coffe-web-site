import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBrewComponent } from './how-to-brew.component';

describe('HowToBrewComponent', () => {
  let component: HowToBrewComponent;
  let fixture: ComponentFixture<HowToBrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToBrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToBrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
