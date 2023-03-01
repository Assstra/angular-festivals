import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(public messageService : MessageService) { }

  ngOnInit(): void {
  }
}
