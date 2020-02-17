import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlendsComponent } from './the-blends.component';

describe('TheBlendsComponent', () => {
  let component: TheBlendsComponent;
  let fixture: ComponentFixture<TheBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
