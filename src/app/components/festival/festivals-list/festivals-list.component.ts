import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.css'],
})
export class FestivalsListComponent {
  @Input() public festivals: Festival[] | undefined | null;
  @Output() newEvent = new EventEmitter<string>();
  constructor(
    public logger: MessageService,
    public festivalService: FestivalsService
  ) {}

  ngOnChanges() {
    if (this.festivals) {
      this.logger.log(
        `Affichage du nombre de festivals - ${this.festivals.length}`
      );
    }
  }

  selectId(value: string) {
    this.newEvent.emit(value);
  }

  deleteById(fest: Festival) {
    this.festivalService.deleteFestival(fest);
  }
}
