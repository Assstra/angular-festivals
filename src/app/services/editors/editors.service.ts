import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Editor } from '../../models/editor';
import { EditorjsonService } from './editorjson.service';

@Injectable({
  providedIn: 'root',
})
export class EditorsService {
  constructor(
    private db: AngularFirestore,
    private messageService: MessageService,
    private jsonService: EditorjsonService
  ) {}

  editorPath: string = '/editors/';

  festivalStore: AngularFirestore = this.db;
  editorsCollection: AngularFirestoreCollection<Editor> = this.db.collection(
    this.editorPath
  );

  getAllEditors(): Observable<Editor[]> {
    return this.editorsCollection.valueChanges({ idField: 'id' }).pipe(
      tap((doc) => {
        this.messageService.log(`doc=${JSON.stringify(doc)}`);
      }),
      map((data) => data.map((doc) => this.jsonService.json2Editor(doc)))
    );
  }

  addUpdateEditor(editor: Editor) {
    if (editor.id == null) {
      editor.id = this.festivalStore.createId();
    }
    this.editorsCollection.doc(editor.id).set(Object.assign({}, editor));
  }

  deleteEditeur(editor: Editor) {
    this.festivalStore.doc<Editor>(this.editorPath + editor.id).delete();
  }

  addNewEditeur(editor: Editor) {
    if (editor.id == null) {
      editor.id = this.festivalStore.createId();
    }
    this.editorsCollection
      .doc(editor.id)
      .get()
      .subscribe((doc) => {
        if (!doc.exists) {
          this.editorsCollection.doc(editor.id).set(Object.assign({}, editor));
        } // else doc exists!
      });
  }

  getEditor(id: String): Observable<Editor> {
    var itemDoc = this.festivalStore.doc<Editor>(this.editorPath + id);
    return itemDoc
      .valueChanges()
      .pipe(map((edit) => this.jsonService.doc2Editor(edit)));
  }
}
