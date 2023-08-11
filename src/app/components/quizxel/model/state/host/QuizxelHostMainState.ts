import {QuizxelPlayer} from "../../QuizxelPlayer";
import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";
import {QuizxelStage} from "../../QuizxelStage";
import {QuizxelQuestion} from "../../question/QuizxelQuestion";


export interface QuizxelHostMainState extends MessagingState {
  players: QuizxelPlayer[]
  currentStage: QuizxelStage
  currentQuestion:QuizxelQuestion<any>
  showQuestion:boolean
  showAnswer:boolean
  buzzedPlayerId:string
}
