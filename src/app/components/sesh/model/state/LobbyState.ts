import {SeshStage} from "../SeshStage";
import {QuizxelPlayer} from "../../quizxel/model/QuizxelPlayer";


export interface LobbyState {
  seshCode: string
  players: QuizxelPlayer[]
  maxPlayers: number
  currentStage: SeshStage
}
