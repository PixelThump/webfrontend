import {PlayerIconName} from "../host/lobby/player/PlayerIconNames";

export interface QuizxelPlayer {

  playerName:string
  vip:boolean
  playerId:string
  points:number
  playerIconName: PlayerIconName
}
