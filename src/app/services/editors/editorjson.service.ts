import { Injectable } from '@angular/core';
import { Editor } from 'src/app/models/editor';

@Injectable({
  providedIn: 'root'
})
export class EditorjsonService {

  constructor() { }

  json2Editor(json: any): Editor {
    return new Editor(
      json.name,
      json.contacts,
      json.id,
    );
  }

  doc2Editor(editor: any): Editor {
    return new Editor(
      editor.name,
      editor.contacts,
      editor.id,
    );
  }
}
