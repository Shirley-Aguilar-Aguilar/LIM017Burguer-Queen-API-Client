import { TestBed } from '@angular/core/testing';

import { AccessWorkerGuard } from './access-worker.guard';

describe('AccessWorkerGuard', () => {
  let guard: AccessWorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessWorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
