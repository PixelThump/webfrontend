import {QuizxelQuestion} from "../../question/QuizxelQuestion";
import {QuizxelHostState} from "./QuizxelHostState";


export interface QuizxelHostMainState extends QuizxelHostState {
  currentQuestion: QuizxelQuestion<any>
  showQuestion: boolean
  showAnswer: boolean
  buzzedPlayerName: string
}
