import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Festival } from 'src/app/models/festival';
import { FestivalformService } from 'src/app/services/festivals/festivalform.service';
import { FestivaljsonService } from 'src/app/services/festivals/festivaljson.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';
import { EditorsService } from 'src/app/services/editors/editors.service';
import { Editor } from 'src/app/models/editor';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-festival-creation',
  templateUrl: './festival-creation.component.html',
  styleUrls: ['./festival-creation.component.css'],
})
export class FestivalCreationComponent {
  public creationForm!: FormGroup;
  public festival!: Festival;
  public editors!: Observable<Editor[]>;
  public games!: Observable<Game[]>;
  public selectedOptions: string[] = [];

  constructor(
    private festivalsService: FestivalsService,
    private festivalformService: FestivalformService,
    private festivaljsonService: FestivaljsonService,
    private editorsService: EditorsService,
    private gamesService: GamesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.editors = this.editorsService.getAllEditors();
    this.games = this.gamesService.getAllGames();
    this.festival = this.festivaljsonService.doc2Festival({
      name: '',
      tablemax_1: 0,
      tablemax_2: 0,
      editor: '',
      games: [],
    });
    this.creationForm = this.festivalformService.createFestivalForm(
      this.festival
    );
  }

  createFestival() {
    this.festival.id = undefined; // Don't need to define ID, auto created !
    this.festival.name = this.creationForm.value.name;
    this.festival.tablemax_1 = this.creationForm.value.entranceLoc;
    this.festival.tablemax_2 = this.creationForm.value.mainRoomLoc;
    this.festival.editor = this.creationForm.value.editor;
    this.festival.games = this.selectedOptions;
    this.festivalsService.addNewFestival(this.festival);
    this.route.navigate(['/App']);
  }

  onSelectionChange(name: string) {
    const index = this.selectedOptions.indexOf(name);
    if (index > -1) {
      this.selectedOptions.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      this.selectedOptions.push(name)
    }
  }
}
