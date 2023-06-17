import { TestBed } from '@angular/core/testing';

import { SheshServiceService } from './shesh-service.service';

describe('SheshServiceService', () => {
  let service: SheshServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheshServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
