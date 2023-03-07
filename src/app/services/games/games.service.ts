import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Game } from '../../models/game';
import { GamejsonService } from './gamejson.service';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(
    private db: AngularFirestore,
    private messageService: MessageService,
    private jsonService: GamejsonService
  ) {}

  gamePath: string = '/games/';

  festivalStore: AngularFirestore = this.db;
  gamesCollection: AngularFirestoreCollection<Game> = this.db.collection(
    this.gamePath
  );

  getAllGames(): Observable<Game[]> {
    return this.gamesCollection.valueChanges({ idField: 'id' }).pipe(
      tap((doc) => {
        this.messageService.log(`doc=${JSON.stringify(doc)}`);
      }),
      map((data) => data.map((doc) => this.jsonService.json2Game(doc)))
    );
  }

  deleteGame(game: Game) {
    this.festivalStore.doc<Game>(this.gamePath + game.id).delete();
  }

  addNewGame(game: Game) {
    if (game.id == null) {
      game.id = this.festivalStore.createId();
    }
    this.gamesCollection
      .doc(game.id)
      .get()
      .subscribe((doc) => {
        if (!doc.exists) {
          this.gamesCollection.doc(game.id).set(Object.assign({}, game));
        } // else doc exists!
      });
  }
}
