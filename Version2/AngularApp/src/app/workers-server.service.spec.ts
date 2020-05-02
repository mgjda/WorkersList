import { TestBed } from '@angular/core/testing';

import { WorkersServerService } from './workers-server.service';

describe('WorkersServerService', () => {
  let service: WorkersServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
