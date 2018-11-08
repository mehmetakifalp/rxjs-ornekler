import { TestBed } from '@angular/core/testing';

import { JsdataService } from './jsdata.service';

describe('JsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsdataService = TestBed.get(JsdataService);
    expect(service).toBeTruthy();
  });
});
