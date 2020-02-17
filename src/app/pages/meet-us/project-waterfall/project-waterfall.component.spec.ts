import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWaterfallComponent } from './project-waterfall.component';

describe('ProjectWaterfallComponent', () => {
  let component: ProjectWaterfallComponent;
  let fixture: ComponentFixture<ProjectWaterfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWaterfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWaterfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
