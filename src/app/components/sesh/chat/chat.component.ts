import {Component, OnInit} from '@angular/core';
import {SheshServiceService} from "../../../service/shesh-service.service";
import {ActivatedRoute} from "@angular/router";
import {ChatCommandMessage} from "./model/message/ChatCommandMessage";
import {ChatStateMessage} from "./model/message/ChatStateMessage";
import {ChatJoinAction} from "./model/command/action/ChatJoinAction";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users: string[] = [];
  messages: string[] = [];
  seshCode: string = ""
  playerName = "";
  initializing = true

  constructor(private seshService: SheshServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")
        this.playerName = <string>params.get("playerName")

        this.seshService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {


          const message = JSON.parse(iMessage.body)

          if ('command' in message) {

            this.handleCommandMessage(<ChatCommandMessage>message)
          }
          if ('state' in message) {

            this.handleStateMessage(<ChatStateMessage>message)
          }
        })
      }
    )
  }

  private handleCommandMessage(message: ChatCommandMessage) {

    if (this.initializing) {

      return
    }

    if ('joiningPlayer' in message.command.action) {

      const action = <ChatJoinAction>message.command.action
      this.users.push(action.joiningPlayer)
      this.messages.push(action.message)
    }


  }

  private handleStateMessage(message: ChatStateMessage) {

    const state = message.state
    this.messages = state.chatLog
    this.users = state.chatters
    this.initializing = false
  }
}
