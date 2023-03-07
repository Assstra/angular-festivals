import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Editor } from 'src/app/models/editor';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditorformService } from 'src/app/services/editors/editorform.service';
import { EditorsService } from 'src/app/services/editors/editors.service';

@Component({
  selector: 'app-festival-editeurs-details',
  templateUrl: './festival-editeurs-details.component.html',
  styleUrls: ['./festival-editeurs-details.component.css']
})
export class FestivalEditeursDetailsComponent {
  editor!: Editor;

  public nameForm!: FormGroup

  constructor(
    private route: ActivatedRoute,
    private editorsService: EditorsService,
    private editorForm: EditorformService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('editorId')) {
      const id = this.route.snapshot.paramMap.get('editorId');
      if (!id) {
        throw Error ('oulaaaa')
      } else {
        this.editorsService.getEditor(id).subscribe((edit: Editor) => { // navigate to 404 if dosn't exist
          this.editor = edit;
          this.editor.id = id // Setting current editor id
          this.nameForm = this.editorForm.createEditorForm(this.editor)
        });
      }
    }
  }

  changeValue() {
    this.editor.name = this.nameForm.value.name;
    this.editor.contacts = this.nameForm.value.contacts;
    this.editorsService.addUpdateEditor(this.editor)
    this.router.navigate(['/App']) // Change when list whould be in /editors
  }
}
