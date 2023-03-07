import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Festival } from '../../models/festival';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { FestivaljsonService } from './festivaljson.service';

@Injectable({
  providedIn: 'root',
})
export class FestivalsService {
  constructor(
    private db: AngularFirestore,
    private messageService: MessageService,
    private jsonService: FestivaljsonService
  ) {}

  festivalPath: string = '/festivals/';

  festivalStore: AngularFirestore = this.db;
  festivalCollection: AngularFirestoreCollection<Festival> = this.db.collection(
    this.festivalPath
  );

  getAllFestivals(): Observable<Festival[]> {
    return this.festivalCollection.valueChanges({ idField: 'id' }).pipe(
      tap((doc) => {
        this.messageService.log(`doc=${JSON.stringify(doc)}`);
      }),
      map((data) => data.map((doc) => this.jsonService.json2Festival(doc)))
    );
  }

  addUpdateFestival(festival: Festival) {
    if (festival.id == null) {
      festival.id = this.festivalStore.createId();
    }
    this.festivalCollection.doc(festival.id).set(Object.assign({}, festival));
  }

  addNewFestival(festival: Festival) {
    if (festival.id == null) {
      festival.id = this.festivalStore.createId();
    }
    this.festivalCollection
      .doc(festival.id)
      .get()
      .subscribe((doc) => {
        if (!doc.exists) {
          this.festivalCollection
            .doc(festival.id)
            .set(Object.assign({}, festival));
        } // else doc exists!
      });
  }

  deleteFestival(festival: Festival) {
    this.festivalStore.doc<Festival>(this.festivalPath + festival.id).delete();
  }

  getFestival(id: String): Observable<Festival> {
    var itemDoc = this.festivalStore.doc<Festival>(this.festivalPath + id);
    return itemDoc
      .valueChanges()
      .pipe(map((fest) => this.jsonService.doc2Festival(fest)));
  }
}
