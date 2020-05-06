import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEditFormComponent } from './worker-edit-form.component';

describe('WorkerEditFormComponent', () => {
  let component: WorkerEditFormComponent;
  let fixture: ComponentFixture<WorkerEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
