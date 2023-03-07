import { Injectable } from '@angular/core';
import { Festival } from 'src/app/models/festival';

@Injectable({
  providedIn: 'root',
})
export class FestivaljsonService {
  constructor() {}

  json2Festival(json: any): Festival {
    return new Festival(
      json.name,
      json.id,
      json.tablemax_1,
      json.tablemax_2,
      json.tablemax_3,
      json.tableprice_1,
      json.tableprice_2,
      json.tableprice_3,
      json.sqmprice_1,
      json.sqmprice_2,
      json.sqmprice_3,
      json.editor,
      json.games,
    );
  }

  doc2Festival(fest: any): Festival {
    return new Festival(
      fest.name,
      fest.id,
      fest.tablemax_1,
      fest.tablemax_2,
      fest.tablemax_3,
      fest.tableprice_1,
      fest.tableprice_2,
      fest.tableprice_3,
      fest.sqmprice_1,
      fest.sqmprice_2,
      fest.sqmprice_3,
      fest.editor,
      fest.games
    );
  }
}
