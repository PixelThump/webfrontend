import {QuizxelQuestion} from "./question/QuizxelQuestion";
import {LobbyState} from "./LobbyState";

export interface QuizxelMainState extends LobbyState{

  currentQuestion: QuizxelQuestion
  buzzedPlayerId: string
  showQuestion: boolean
}
