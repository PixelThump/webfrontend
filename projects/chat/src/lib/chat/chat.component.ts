import {Component, OnInit} from '@angular/core';

import {Message} from '@stomp/stompjs';
import {RxStompService} from "../rx-stomp-service.service";
import {GameStateMessage} from "../model/GameStateMessage";
import {JoinCommandMessage} from "../model/JoinCommandMessage";

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

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {

    this.onJoin("roboter5123", "bgjb")
  }

  onJoin(playerName: string, gameCode: string) {

    this.gameCode = gameCode;
    this.playerName = playerName;

    this.rxStompService.watch("/topic/game/" + gameCode, {playerName: playerName}).subscribe((message:Message) => {

      let body:GameStateMessage | JoinCommandMessage = JSON.parse(message.body)

      if ("state" in body){

        this.handleStateMessage(body)

      }else if ("command" in body){

        this.handleCommandMessage(body)
      }


    })
  }

  onSendMessage() {

    const message: string = `Message generated at ${new Date()}`;
    this.rxStompService.publish({destination: '/topic/game/' + this.gameCode, body: message,})
  }

 isAnGameStateMessage(obj: any): obj is GameStateMessage {
    return 'id' in obj && 'name' in obj && 'salary' in obj;
  }

  private handleStateMessage(message: GameStateMessage) {

    const state = message.state
    this.players = state.chatter
    this.messages = state.chatLog
  }

  private handleCommandMessage(mesage: JoinCommandMessage) {

  const command = mesage.command

    if ("joiningPlayer" in command.action){

      const player = command.action.joiningPlayer
      this.players.push(player)
      this.messages.push(player + " joined the Conversation!")
    }
  }
}
