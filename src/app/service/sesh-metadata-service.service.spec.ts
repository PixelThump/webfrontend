import { TestBed } from '@angular/core/testing';

import { SeshMetadataServiceService } from './sesh-metadata-service.service';

describe('SeshMetadataServiceService', () => {
  let service: SeshMetadataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeshMetadataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
