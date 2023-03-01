import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  messages: String[] = []

  log(txt: string): void{
    this.messages = [...this.messages, txt]
  }

  clear(){
    this.messages = []
  }
}
