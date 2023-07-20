import {Injectable} from '@angular/core';
import {IMessage, RxStomp} from "@stomp/rx-stomp";
import {Observable} from "rxjs";
import {SeshCommand} from "../components/sesh/model/SeshCommand";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SheshServiceService {

  private rxStomp = new RxStomp();
  private baseUrl = "ws:"+ environment.apiUrl
  private topicPath = "/topic/sesh"
  private stompconfig = {brokerURL: this.baseUrl + '/ws'}


  constructor() {

    this.rxStomp.configure(this.stompconfig)
    this.rxStomp.activate()
  }

  joinSeshAsHost(seshCode: string): Observable<IMessage> {

    const path = this.topicPath + "/" + seshCode + "/host"

    const options = {destination: path}
    return this.rxStomp.watch(options)
  }

  joinSeshAsController(seshCode: string, playerName: string): Observable<IMessage> {

    const path = this.topicPath + "/" + seshCode + "/controller"
    const headers = {'playerName': playerName}

    const options = {destination: path, subHeaders: headers, headers: headers}
    return this.rxStomp.watch(options)
  }

  sendCommand(command: SeshCommand, seshCode: string) {

    const path = this.topicPath + "/" + seshCode
    const options = {destination: path, body: JSON.stringify({command: command})}
    return this.rxStomp.publish(options)
  }
}
