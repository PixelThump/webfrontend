import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SeshServiceSeshInfo} from "./model/SeshServiceSeshInfo";
import {SeshServiceSeshType} from "./model/SeshServiceSeshType";


@Injectable({
  providedIn: 'root'
})
export class SeshService {

  private backendUrl = environment.apiProtocol + environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getSeshTypes(): Observable<SeshServiceSeshType[]> {

    return this.http.get<SeshServiceSeshType[]>(this.backendUrl + "/seshservice/seshtypes")
  }

  hostGame(seshTypeName: string): Observable<SeshServiceSeshInfo> {

    const options = {
      headers: {'Content-Type': 'application/json'}
    }

    return this.http.post<SeshServiceSeshInfo>(this.backendUrl + "/seshservice/seshs", seshTypeName, options)
  }

  getSesh(seshCode: string): Observable<SeshServiceSeshInfo> {

    return this.http.get<SeshServiceSeshInfo>(this.backendUrl + "/seshservice/seshs/" + seshCode)
  }
}
