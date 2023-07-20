import {QuizxelQuestion} from "./question/QuizxelQuestion";
import {LobbyState} from "../../model/LobbyState";

export interface QuizxelMainState extends LobbyState{

  currentQuestion: QuizxelQuestion
  buzzedPlayerId: string
  showQuestion: boolean
  showAnswer: boolean;
}
