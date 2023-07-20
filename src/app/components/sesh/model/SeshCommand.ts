import {SeshAction} from "./action/SeshAction";

export interface SeshCommand {
  playerId:string
  action: SeshAction
}
