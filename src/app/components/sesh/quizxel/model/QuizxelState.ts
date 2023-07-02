import {SeshStage} from "../../model/SeshStage";
import {QuizxelPlayer} from "./QuizxelPlayer";


export interface QuizxelState {

  players:QuizxelPlayer[]
  maxPlayers:number
  currentStage:SeshStage
}
