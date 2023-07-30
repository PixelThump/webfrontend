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
  private baseUrl = environment.socketProtocol + environment.apiUrl
  private topicPath = "/topic/sesh"
  private stompconfig = {brokerURL: this.baseUrl + "/quizxel" +'/ws'}

  joinSeshAsHost(seshCode: string, seshtype: string): Observable<IMessage> {
    this.stompconfig.brokerURL = this.baseUrl + "/" + seshtype + "/ws"
    console.log(this.stompconfig.brokerURL)
    this.rxStomp.configure(this.stompconfig)
    this.rxStomp.activate()
    const path = this.topicPath + "/" + seshCode + "/host"
    console.log(path)
    const options = {destination: path}
    return this.rxStomp.watch(options)
  }

  joinSeshAsController(seshCode: string, playerName: string, seshtype: string): Observable<IMessage> {
    this.stompconfig.brokerURL = this.baseUrl + "/" + seshtype + "/ws"
    console.log(this.stompconfig.brokerURL)
    this.rxStomp.configure(this.stompconfig)
    this.rxStomp.activate()
    const path = this.topicPath + "/" + seshCode + "/controller"
    const headers = {'playerName': playerName}

    const options = {destination: path, subHeaders: headers, headers: headers}
    return this.rxStomp.watch(options)
  }

  sendCommand(command: SeshCommand, seshCode: string, seshtype: string) {

    const path = this.topicPath + "/" + seshCode
    const options = {destination: path, body: JSON.stringify({command: command})}
    return this.rxStomp.publish(options)
  }
}
