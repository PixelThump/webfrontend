import {MessagingState} from "../../../../service/messagingservice/model/MessagingState";
import {QuizxelStage} from "../QuizxelStage";


export interface QuizxelState extends MessagingState {
  currentStage: QuizxelStage
}
