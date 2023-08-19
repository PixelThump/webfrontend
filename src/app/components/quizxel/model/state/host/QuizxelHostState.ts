import {QuizxelPlayer} from "../../QuizxelPlayer";
import {QuizxelState} from "../QuizxelState";


export interface QuizxelHostState extends QuizxelState {
  players: QuizxelPlayer[]
}
