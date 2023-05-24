import {Component, OnInit} from '@angular/core';
import {RxStompService} from "../rx-stomp.service";
import {Message} from '@stomp/stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: string[] = [];
  public gameCode: string = "";
  public playerName: string = "";
  public players: string[] = [];
  private readonly messageHandlers: {STATE:Function,JOIN:Function,MESSAGE:Function} = {STATE:this.handleStateMessage,JOIN:this.handleJoinMessage,MESSAGE:this.handleMessageMessage};

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {

    this.onJoin("roboter5123", "idpv")
  }

  onJoin(playerName: string, gameCode: string) {

    this.gameCode = gameCode;
    this.playerName = playerName;

    this.rxStompService.watch("/topic/game/" + gameCode, {playerName: playerName}).subscribe((message: Message) => {

      let body = JSON.parse(message.body);

      if (body.messageType === 'STATE'){

        this.messageHandlers['STATE'](body.body)

      }else if (body.body.action.type === "JOIN"){

        this.messageHandlers["JOIN"](body.body)

      }else if (body.body.action.type === "MESSAGE"){

        this.messageHandlers["MESSAGE"](body.body)
      }
    })
  }

  handleStateMessage(body:{}){

    if (body["chatLog"]) {

      this.messages = body["chatLog"]

    } else {

      this.messages = []
    }

    this.players = body["chatters"]
  }

  handleJoinMessage(body:{action:{body:string}}){

    this.messages.push(body.action.body + " has joined the conversation")
    this.players.push(body.action.body)
  }

  handleMessageMessage(body:{action:{body:string}}){

    this.messages.push(body.action.body)
  }

  onSendMessage() {

    const message: string = `Message generated at ${new Date()}`;
    this.rxStompService.publish({destination: '/topic/game/' + this.gameCode, body: message,})
  }
}
