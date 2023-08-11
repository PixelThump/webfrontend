import {QuizxelPlayer} from "../../QuizxelPlayer";
import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";
import {QuizxelStage} from "../../QuizxelStage";


export interface QuizxelHostLobbyState extends MessagingState {
  players: QuizxelPlayer[]
  maxPlayers: number
  currentStage: QuizxelStage
}
