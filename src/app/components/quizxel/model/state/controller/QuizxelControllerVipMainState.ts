import {QuizxelQuestion} from "../../question/QuizxelQuestion";
import {QuizxelStage} from "../../QuizxelStage";
import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";


export interface QuizxelControllerLobbyState extends MessagingState {
  currentStage: QuizxelStage
  playerId: string
  buzzedPlayerId: string
  currentQuestion: QuizxelQuestion<any>
  showQuestion: boolean
  showAnswer: boolean
}
