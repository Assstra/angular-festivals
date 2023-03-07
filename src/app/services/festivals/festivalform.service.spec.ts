import { TestBed } from '@angular/core/testing';

import { FestivalformService } from './festivalform.service';

describe('FestivalformService', () => {
  let service: FestivalformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivalformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
