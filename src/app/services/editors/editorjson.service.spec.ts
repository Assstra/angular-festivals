import { TestBed } from '@angular/core/testing';

import { EditorjsonService } from './editorjson.service';

describe('EditorsjsonService', () => {
  let service: EditorjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
