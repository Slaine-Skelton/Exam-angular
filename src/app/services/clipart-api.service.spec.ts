import { TestBed } from '@angular/core/testing';

import { ClipartApiService } from './clipart-api.service';

describe('ClipartApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClipartApiService = TestBed.get(ClipartApiService);
    expect(service).toBeTruthy();
  });
});
