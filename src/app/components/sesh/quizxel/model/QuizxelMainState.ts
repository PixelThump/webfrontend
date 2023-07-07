import {QuizxelPlayer} from "./QuizxelPlayer";
import {QuizxelQuestion} from "./question/QuizxelQuestion";
import {SeshStage} from "../../model/SeshStage";

export interface QuizxelMainState {

  players: QuizxelPlayer[]
  currentQuestion: QuizxelQuestion
  currentStage: SeshStage
  maxPlayers: number
}
