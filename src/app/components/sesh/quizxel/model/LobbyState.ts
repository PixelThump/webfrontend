import {SeshStage} from "../../model/SeshStage";
import {QuizxelPlayer} from "./QuizxelPlayer";


export interface LobbyState {
  seshCode: string
  players: QuizxelPlayer[]
  maxPlayers: number
  currentStage: SeshStage
}
