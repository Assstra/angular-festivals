import { TestBed } from '@angular/core/testing';
import { EditorformService } from '../../services/editors/editorform.service';

describe('EditorformService', () => {
  let service: EditorformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
