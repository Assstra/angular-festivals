import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root',
})
export class GamejsonService {
  constructor() {}

  json2Game(json: any): Game {
    return new Game(
      json.name,
      json.type,
      json.minAge,
      json.maxAge,
      json.id,
    );
  }

  doc2Game(game: any): Game {
    return new Game(
      game.name,
      game.type,
      game.minAge,
      game.maxAge,
      game.id,
    );
  }
}
