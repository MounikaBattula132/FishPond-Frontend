import { TestBed } from '@angular/core/testing';

import { FishpondService } from './fishpond.service';

describe('FishpondService', () => {
  let service: FishpondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishpondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
