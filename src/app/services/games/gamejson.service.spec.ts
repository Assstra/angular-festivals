import { TestBed } from '@angular/core/testing';

import { GamejsonService } from './gamejson.service';

describe('GamesjsonService', () => {
  let service: GamejsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamejsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
