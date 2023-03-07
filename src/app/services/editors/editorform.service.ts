import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EditorformService {
  constructor(private formBuilder: FormBuilder) {}

  createEditorForm(editor: any): FormGroup {
    return this.formBuilder.group({
      name: [editor.name, [Validators.required, Validators.minLength(4)]],
      contacts: [
        editor.contacts,
        [Validators.required, Validators.minLength(3)],
      ],
    });
  }
}
