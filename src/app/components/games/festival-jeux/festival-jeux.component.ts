import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { GamesService } from 'src/app/services/games/games.service';
import { GameformService } from 'src/app/services/games/gameform.service';
import { GamejsonService } from 'src/app/services/games/gamejson.service';

@Component({
  selector: 'app-festival-jeux',
  templateUrl: './festival-jeux.component.html',
  styleUrls: ['./festival-jeux.component.css'],
})
export class FestivalJeuxComponent {
  public games: Observable<Game[]> | undefined | null;
  public creationGameForm!: FormGroup;
  public game!: Game;

  constructor(
    private gamesService: GamesService,
    private gameformService: GameformService,
    private gamejsonService: GamejsonService,
    private route: Router
  ) {}

  ngOnInit() {
    this.games = this.gamesService.getAllGames();
    this.game = this.gamejsonService.doc2Game({
      name: '',
      type: '',
    });
    this.creationGameForm = this.gameformService.createGameForm(this.game);
  }

  createGame() {
    this.game.id = undefined; // Don't need to define ID, auto created !
    this.game.name = this.creationGameForm.value.name;
    this.game.type = this.creationGameForm.value.type;
    this.gamesService.addNewGame(this.game);
    this.route.navigate(['/App']);
  }

  deleteById(game: Game) {
    this.gamesService.deleteGame(game);
  }
}
