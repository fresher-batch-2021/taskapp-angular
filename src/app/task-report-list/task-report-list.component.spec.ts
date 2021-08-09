import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReportListComponent } from './task-report-list.component';

describe('TaskReportListComponent', () => {
  let component: TaskReportListComponent;
  let fixture: ComponentFixture<TaskReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
