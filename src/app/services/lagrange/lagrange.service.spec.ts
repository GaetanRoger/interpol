import { TestBed, inject } from '@angular/core/testing';

import { LagrangeService } from './lagrange.service';

describe('LagrangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LagrangeService]
    });
  });

  it('should be created', inject([LagrangeService], (service: LagrangeService) => {
    expect(service).toBeTruthy();
  }));
});
