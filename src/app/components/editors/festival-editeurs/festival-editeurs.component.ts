import { Component } from '@angular/core';
import { Editor } from 'src/app/models/editor';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EditorformService } from 'src/app/services/editors/editorform.service';
import { EditorjsonService } from 'src/app/services/editors/editorjson.service';
import { EditorsService } from 'src/app/services/editors/editors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-festival-editeurs',
  templateUrl: './festival-editeurs.component.html',
  styleUrls: ['./festival-editeurs.component.css'],
})
export class FestivalEditeursComponent {
  public editors: Observable<Editor[]> | undefined | null;
  public creationForm!: FormGroup;
  public editor!: Editor;

  constructor(
    private editorsService: EditorsService,
    private editorformService: EditorformService,
    private editorjsonService: EditorjsonService,
    private route: Router
  ) {}

  ngOnInit() {
    this.editors = this.editorsService.getAllEditors();
    this.editor = this.editorjsonService.doc2Editor({
      name: '',
      contacts: [''],
    });
    this.creationForm = this.editorformService.createEditorForm(this.editor);
  }

  createEditor() {
    this.editor.id = undefined; // Don't need to define ID, auto created !
    this.editor.name = this.creationForm.value.name;
    this.editor.contacts = this.creationForm.value.contacts;
    this.editorsService.addNewEditeur(this.editor);
    this.route.navigate(['/App']);
  }

  selectId(value: string) {
    //console.log(value);
    this.route.navigate([`/editor/${value}`]);
  }

  deleteById(edit: Editor) {
    //console.log(edit);
    this.editorsService.deleteEditeur(edit);
  }
}
