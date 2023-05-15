import {Component, OnInit} from '@angular/core';
import {RxStompService} from "../rx-stomp.service";
import {Message} from '@stomp/stompjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: string[] = []

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() { /*empty for later*/
  }

  onJoin() {

   this.rxStompService.watch("/topic/demo",{playerName:"name"}).subscribe((message: Message) => {

     let body;
     try {

       body = JSON.parse(message.body)
     }catch (e){

       body = message.body
     }

      if (Array.isArray(body)){

        this.messages = body

      }else {

        this.messages.push(message.body)
      }

    })
  }

  onSendMessage() {

    const message: string = `Message generated at ${new Date()}`;
    this.rxStompService.publish({destination: '/topic/demo', body: message,})
  }
}
