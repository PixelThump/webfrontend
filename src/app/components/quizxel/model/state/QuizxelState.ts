import {QuizxelPlayer} from "../QuizxelPlayer";
import {MessagingState} from "../../../../service/messagingservice/model/MessagingState";
import {QuizxelStage} from "../QuizxelStage";
import {QuizxelQuestion} from "../question/QuizxelQuestion";


export interface QuizxelState extends MessagingState {
  players: QuizxelPlayer[]
  maxPlayers: number
  currentStage: QuizxelStage
  hasVip:boolean
  currentQuestion:QuizxelQuestion<any>
  showQuestion:boolean
  showAnswer:boolean
  buzzedPlayerId:string
}
