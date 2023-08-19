import {QuizxelQuestion} from "../../question/QuizxelQuestion";
import {QuizxelControllerMainState} from "./QuizxelControllerMainState";


export interface QuizxelControllerMainVipState extends QuizxelControllerMainState {
  currentQuestion: QuizxelQuestion<any>
  showQuestion: boolean
  showAnswer: boolean
}
