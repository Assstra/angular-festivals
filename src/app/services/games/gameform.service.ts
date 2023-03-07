import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GameformService {

  constructor(private formBuilder: FormBuilder) { }

  createGameForm(game: any): FormGroup {
    return this.formBuilder.group({
      name: [game.name, [Validators.required, Validators.minLength(4)]],
      type: [game.type, [Validators.required, Validators.minLength(3)]],
    });
  }
}
