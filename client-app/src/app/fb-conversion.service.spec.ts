import { TestBed } from '@angular/core/testing';

import { FbConversionService } from './fb-conversion.service';

describe('FbConversionService', () => {
  let service: FbConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
