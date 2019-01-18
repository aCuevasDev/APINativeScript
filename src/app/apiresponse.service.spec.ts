import { TestBed } from '@angular/core/testing';

import { APIResponseService } from './apiresponse.service';

describe('APIResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIResponseService = TestBed.get(APIResponseService);
    expect(service).toBeTruthy();
  });
});
