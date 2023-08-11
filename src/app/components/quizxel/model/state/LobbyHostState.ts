import {SeshState} from "./SeshState";

export interface LobbyHostState extends SeshState {

  maxPlayers: number
  hasVip: boolean
}
