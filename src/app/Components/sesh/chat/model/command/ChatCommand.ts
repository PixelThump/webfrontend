import {Action} from "./action/Action";

export interface ChatCommand {
  action: Action
  player: string
}
