import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FestivalformService {
  constructor(private formBuilder: FormBuilder) {}

  createFestivalForm(festival: any): FormGroup {
    return this.formBuilder.group({
      name: [festival.name, [Validators.required, Validators.minLength(4)]],
      entranceLoc: [
        festival.tablemax_1,
        [Validators.required, Validators.min(50)],
      ],
      mainRoomLoc: [
        festival.tablemax_2,
        [Validators.required, Validators.min(60)],
      ],
      editor: [
        festival.editor,
        [],
      ],
      games: [
        festival.games,
        [],
      ]
    });
  }
}
