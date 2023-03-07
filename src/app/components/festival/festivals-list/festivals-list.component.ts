import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.css']
})
export class FestivalsListComponent {
  dataSource!: MatTableDataSource<Festival> | any
  @Input() public festivals: Festival[] | undefined | null;
  @Output() newEvent = new EventEmitter<string>();
  displayedColumns: string[] = ['name', 'entranceLoc', 'mainRoomLoc', 'editor', 'games'];
  constructor(public logger: MessageService, public festivalService: FestivalsService) {}
  
  ngOnInit(){
    this.dataSource = this.festivals
  }

  ngOnChanges(){
    if (this.festivals){
      this.logger.log(`Affichage du nombre de festivals - ${this.festivals.length}`);
    }
  }

  selectId(value: string) {
    this.newEvent.emit(value);
  }

  deleteById(fest: Festival){
    this.festivalService.deleteFestival(fest)
  }
}
