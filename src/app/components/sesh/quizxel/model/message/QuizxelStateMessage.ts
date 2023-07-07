import {LobbyState} from "../LobbyState";
import {QuizxelMainState} from "../QuizxelMainState";

export interface QuizxelStateMessage {

  state: LobbyState | QuizxelMainState
}
