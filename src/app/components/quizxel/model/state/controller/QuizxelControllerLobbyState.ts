import {MessagingState} from "../../../../../service/messagingservice/model/MessagingState";


export interface QuizxelControllerLobbyState extends MessagingState {
  isVip: boolean
  needToAskForVip: boolean
  playerId: string
}
