import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.css']
})
export class FestivalsListComponent {

  @Input() public festivals!: Festival[];
  @Output() newEvent = new EventEmitter<number>();

  constructor(public logger: MessageService) {}

  ngOnInit(){
    this.logger.log(`Affichage du nombre de festivals - ${this.festivals.length}`);
  }

  selectId(value: number) {
    this.newEvent.emit(value);
  }
}
