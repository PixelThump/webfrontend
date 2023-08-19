import {PlayerIconName} from "../host/lobby/player/PlayerIconNames";

export interface QuizxelPlayer {

  playerId : {playerName:string, seshCode:string}
  vip:boolean
  points:number
  playerIconName: PlayerIconName
}
