import {JoinCommand} from "./JoinCommand";

export interface GameState {

  chatLog: string[]
  chatter: string[]
  lastCommand:JoinCommand

}
