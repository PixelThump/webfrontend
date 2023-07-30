import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sesh} from "../model/Sesh";
import {environment} from "../../environments/environment";
import {SeshType} from "../model/SeshType";


@Injectable({
  providedIn: 'root'
})
export class SeshMetadataServiceService {

  private backendUrl = environment.apiProtocol + environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getSeshTypes(): Observable<SeshType[]> {

    return this.http.get<SeshType[]>(this.backendUrl + "/seshservice/seshtypes")
  }

  hostGame(seshType: string): Observable<Sesh> {

    const options = {
      headers: {'Content-Type': 'application/json'}
    }

    return this.http.post<Sesh>(this.backendUrl + "/seshservice/seshs", seshType, options)
  }

  getSesh(sessionCode: string): Observable<Sesh> {

    return this.http.get<Sesh>(this.backendUrl + "/seshservice/seshs/" + sessionCode)
  }
}
