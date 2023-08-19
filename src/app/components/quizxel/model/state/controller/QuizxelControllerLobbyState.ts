import {QuizxelControllerState} from "./QuizxelControllerState";
import {PlayerIconName} from "../../../host/lobby/player/PlayerIconNames";


export interface QuizxelControllerLobbyState extends QuizxelControllerState {
  currentIcon: PlayerIconName;
  hasVip: boolean
}
