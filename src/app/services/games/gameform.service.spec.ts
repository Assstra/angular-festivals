import { TestBed } from '@angular/core/testing';

import { GameformService } from './gameform.service';

describe('GameformService', () => {
  let service: GameformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
