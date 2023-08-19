import {QuizxelState} from "../QuizxelState";


export interface QuizxelControllerState extends QuizxelState {
  isVip: boolean
  playerName: string
}
