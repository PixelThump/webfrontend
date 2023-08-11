import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";
import {QuizxelStage} from "../../QuizxelStage";


export interface QuizxelControllerPlayerMainState extends MessagingState {
  currentStage: QuizxelStage
  buzzedPlayerId: string
  playerId: string;
}
