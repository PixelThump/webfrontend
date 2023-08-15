import {Injectable} from '@angular/core';
import {IMessage, RxStomp} from "@stomp/rx-stomp";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {MessagingCommand} from "./model/MessagingCommand";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private rxStomp = new RxStomp();
  private baseUrl = environment.socketProtocol + environment.apiUrl
  private topicPath = "/topic/sesh"
  private stompconfig = {brokerURL: this.baseUrl + "/messaging" + '/ws'}


  constructor() {

    this.rxStomp.configure(this.stompconfig)
    this.rxStomp.activate()
  }

  joinSeshAsHost(seshCode: string): Observable<IMessage> {

    const path = this.topicPath + "/" + seshCode + "/host"
    const options = {destination: path}
    console.log(options)
    return this.rxStomp.watch(options)
  }

  joinSeshAsController(seshCode: string, playerName: string): Observable<IMessage> {

    const path = this.topicPath + "/" + seshCode + "/controller"
    const headers = {'playerName': playerName, "reconnectToken" : <string> sessionStorage.getItem("reconnectToken")}
    const options = {destination: path, subHeaders: headers, headers: headers}
    console.log(options)
    return this.rxStomp.watch(options)
  }

  sendCommand(command: MessagingCommand, seshCode: string) {

    const path = this.topicPath + "/" + seshCode
    const options = {destination: path, body: JSON.stringify({command: command})}
    console.log("sendingCommand " + JSON.stringify(command) + " " + seshCode)
    console.log("sendingCommand " + JSON.stringify(command) + " " + seshCode)
    console.log(options)
    return this.rxStomp.publish(options)
  }
}
