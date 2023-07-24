import {SeshPlayer} from "../SeshPlayer";
import {SeshStage} from "../SeshStage";

export interface SeshState {

  seshCode: string
  players: SeshPlayer[]
  currentStage: SeshStage
}
