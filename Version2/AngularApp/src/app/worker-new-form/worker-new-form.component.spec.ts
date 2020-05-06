import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerNewFormComponent } from './worker-new-form.component';

describe('WorkerNewFormComponent', () => {
  let component: WorkerNewFormComponent;
  let fixture: ComponentFixture<WorkerNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
