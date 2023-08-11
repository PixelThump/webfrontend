import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";
import {QuizxelPlayer} from "../../QuizxelPlayer";
import {QuizxelStage} from "../../QuizxelStage";


export interface QuizxelControllerLobbyState extends MessagingState {
  players: QuizxelPlayer[]
  currentStage: QuizxelStage
  hasVip:boolean
}
