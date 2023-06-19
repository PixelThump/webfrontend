import {Action} from "./Action";

export interface ChatJoinAction extends Action {
  joiningPlayer: string
  message: string
}
